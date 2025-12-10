const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 数据文件路径
const DATA_DIR = path.join(__dirname, 'data');
const INSTRUMENTS_FILE = path.join(DATA_DIR, 'instruments.json');
const USAGE_RECORDS_FILE = path.join(DATA_DIR, 'usage_records.json');
const INVENTORY_FILE = path.join(DATA_DIR, 'inventory.json');

// 确保数据目录存在
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// 加载数据函数
function loadDataFromFile(filePath, defaultValue) {
    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error(`Error loading data from ${filePath}:`, error);
    }
    return defaultValue;
}

// 保存数据函数
function saveDataToFile(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error(`Error saving data to ${filePath}:`, error);
        return false;
    }
}

// 中间件
app.use(cors());
app.use(express.json());

// 持久化存储数据
let instrumentData = loadDataFromFile(INSTRUMENTS_FILE, []);
let usageRecords = loadDataFromFile(USAGE_RECORDS_FILE, []);
let inventoryData = loadDataFromFile(INVENTORY_FILE, {
    contractNo: '',
    projectName: '',
    outboundInfo: {
        date: '',
        receiver: '',
        manager: ''
    },
    inboundInfo: {
        date: '',
        status: '正常',
        returner: '',
        manager: ''
    },
    instruments: [],
    generateTime: ''
});

// API 端点

// 仪器数据相关
app.get('/api/instruments', (req, res) => {
    res.json(instrumentData);
});

app.post('/api/instruments', (req, res) => {
    const newInstrument = req.body;
    instrumentData.push(newInstrument);
    saveDataToFile(INSTRUMENTS_FILE, instrumentData);
    res.status(201).json(newInstrument);
});

app.put('/api/instruments', (req, res) => {
    const updatedData = req.body;
    if (Array.isArray(updatedData)) {
        instrumentData = updatedData;
        saveDataToFile(INSTRUMENTS_FILE, instrumentData);
        res.json({ message: '所有仪器数据已更新' });
    } else {
        res.status(400).json({ error: '请求体必须是数组' });
    }
});

app.delete('/api/instruments/:id', (req, res) => {
    const id = req.params.id;
    const initialLength = instrumentData.length;
    instrumentData = instrumentData.filter(instrument => instrument.id !== id);
    
    if (instrumentData.length < initialLength) {
        saveDataToFile(INSTRUMENTS_FILE, instrumentData);
        res.json({ message: '仪器已删除' });
    } else {
        res.status(404).json({ error: '未找到该仪器' });
    }
});

// 使用记录相关
app.get('/api/usage-records', (req, res) => {
    res.json(usageRecords);
});

app.post('/api/usage-records', (req, res) => {
    const newRecord = req.body;
    usageRecords.push(newRecord);
    saveDataToFile(USAGE_RECORDS_FILE, usageRecords);
    res.status(201).json(newRecord);
});

app.put('/api/usage-records', (req, res) => {
    const updatedData = req.body;
    if (Array.isArray(updatedData)) {
        usageRecords = updatedData;
        saveDataToFile(USAGE_RECORDS_FILE, usageRecords);
        res.json({ message: '所有使用记录已更新' });
    } else {
        res.status(400).json({ error: '请求体必须是数组' });
    }
});

// 出入库数据相关
app.get('/api/inventory', (req, res) => {
    res.json(inventoryData);
});

app.put('/api/inventory', (req, res) => {
    const updatedData = req.body;
    inventoryData = updatedData;
    saveDataToFile(INVENTORY_FILE, inventoryData);
    res.json({ message: '出入库数据已更新' });
});

// 静态文件服务（用于前端页面）
app.use(express.static(__dirname));

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
    console.log(`前端页面访问地址: http://localhost:${PORT}/index.html`);
});
