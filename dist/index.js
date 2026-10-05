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
// บังคับให้ Node.js ใช้ Google DNS เพื่อแก้ปัญหา querySrv ECONNREFUSED บน Wi-Fi/เราเตอร์
node_dns_1.default.setServers(['8.8.8.8', '8.8.4.4']);
// โหลดค่าจากไฟล์ .env (Node.js 20.6+ มีในตัว ไม่ต้องลงแพ็กเกจเพิ่ม)
try {
    process.loadEnvFile();
}
catch (_a) {
    // ถ้าไม่มีไฟล์ .env (เช่น บน Production/CI) ให้ข้ามไป
}
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || '';
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Serve Frontend UI from public directory
app.use(express_1.default.static(node_path_1.default.join(process.cwd(), 'public')));
// Routes
app.use('/api', UserRoutes_1.default);
// Connect to MongoDB & Start Server
mongoose_1.default
    .connect(mongoUri)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server is running on port ${port} (http://localhost:${port})`);
    });
})
    .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
exports.default = app;
