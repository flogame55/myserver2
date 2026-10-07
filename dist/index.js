"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const cors_1 = __importDefault(require("cors"));
const node_dns_1 = __importDefault(require("node:dns"));
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
// บังคับให้ Node.js ใช้ Google DNS เพื่อแก้ปัญหา querySrv ECONNREFUSED บน Wi-Fi/เราเตอร์
node_dns_1.default.setServers(['8.8.8.8', '8.8.4.4']);
// โหลดค่าจากไฟล์ .env (ถ้ามีไฟล์ .env ในเครื่อง)
if (node_fs_1.default.existsSync('.env')) {
    try {
        process.loadEnvFile();
    }
    catch (_a) {
        // ข้ามไปถ้าอ่านไฟล์ไม่สำเร็จ
    }
}
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
const mongoUri = process.env.MONGO_URI || '';
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Serve Frontend UI from public directory
app.use(express_1.default.static(node_path_1.default.join(process.cwd(), 'public')));
// Health check endpoint สำหรับ Azure และผู้ใช้ตรวจสอบสถานะระบบ
app.get('/health', (req, res) => {
    const isDbConnected = mongoose_1.default.connection.readyState === 1;
    res.status(200).json({
        status: 'ok',
        version: '1.0.1',
        server: 'running',
        database: isDbConnected ? 'connected' : 'disconnected',
    });
});
// Fallback Middleware สำหรับ /api: ถ้า DB ยังไม่ต่อ ให้ส่ง 503 ทันที (ไม่ปล่อยให้ค้างหรือแครช)
app.use('/api', (req, res, next) => {
    if (mongoose_1.default.connection.readyState !== 1) {
        return res.status(503).json({
            message: 'Database is not connected. Please configure MONGO_URI in environment variables.',
            database: 'disconnected',
        });
    }
    next();
});
// Routes
app.use('/api', UserRoutes_1.default);
// เริ่มรัน Server ทันที เพื่อให้ Azure Health Check ผ่านและ Container ไม่ดับ
app.listen(port, () => {
    console.log(`Server is running on port ${port} (http://localhost:${port})`);
});
// เชื่อมต่อ MongoDB แบบมี Fallback (ถ้าไม่มี MONGO_URI หรือต่อไม่ติด Server จะยังคงทำงานได้)
if (!mongoUri) {
    console.warn('⚠️ Warning: MONGO_URI is not defined. Server is running without MongoDB connection.');
}
else {
    mongoose_1.default
        .connect(mongoUri)
        .then(() => {
        console.log('Connected to MongoDB');
    })
        .catch((err) => {
        console.error('⚠️ Error connecting to MongoDB (Server is still running):', err.message || err);
    });
}
exports.default = app;
