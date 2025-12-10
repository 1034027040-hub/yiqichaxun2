# 仪器查询与出入库管理系统

## 项目介绍

仪器查询与出入库管理系统是一个用于管理仪器设备的Web应用，支持仪器查询、有效期管理、出入库登记和使用记录管理等功能。

## 功能特性

- 🔍 仪器查询：支持按编号搜索仪器信息
- ⏰ 有效期管理：管理员可更新仪器有效期
- 📊 出入库管理：生成和打印出入库登记台帐
- 📅 使用记录：管理仪器日常使用情况
- 👥 多用户数据共享：支持多设备同时访问和编辑数据
- 💾 数据持久化：所有数据保存在服务器文件中，确保数据安全

## 技术栈

- **前端**：HTML, CSS, JavaScript
- **后端**：Node.js + Express
- **数据存储**：文件系统（JSON格式）
- **API设计**：RESTful API

## 快速开始

### 1. 安装Node.js

**Windows系统：**
1. 访问 [Node.js官网](https://nodejs.org/zh-cn/) 下载最新版Node.js
2. 运行安装程序，按照提示完成安装
3. 打开命令提示符，输入 `node -v` 和 `npm -v` 验证安装成功

**macOS系统：**
1. 推荐使用Homebrew安装：`brew install node`
2. 或访问 [Node.js官网](https://nodejs.org/zh-cn/) 下载安装包
3. 打开终端，输入 `node -v` 和 `npm -v` 验证安装成功

**Linux系统：**
- Ubuntu/Debian：`sudo apt update && sudo apt install nodejs npm`
- CentOS/RHEL：`sudo yum install nodejs npm`
- 验证安装：`node -v` 和 `npm -v`

### 2. 安装项目依赖

在项目根目录下执行：

```bash
npm install
```

### 3. 启动服务器

```bash
npm start
```

服务器将在 `http://localhost:3000` 启动

### 4. 访问应用

在浏览器中访问：
- 主页面：`http://localhost:3000/index.html`
- 服务器状态：`http://localhost:3000/api/instruments`（获取仪器数据）

## 多设备数据共享设置

### 关键配置

1. **中央服务器部署**：选择一台稳定的设备作为中央服务器，安装Node.js并启动项目
2. **设备连接**：确保所有设备在同一局域网内
3. **访问地址**：其他设备通过中央服务器的IP地址访问应用，格式为：`http://服务器IP:3000/index.html`

### 示例

- 中央服务器IP：`192.168.1.100`
- 服务器启动：`npm start`
- 设备1访问：`http://192.168.1.100:3000/index.html`
- 设备2访问：`http://192.168.1.100:3000/index.html`

### 注意事项

- 确保中央服务器防火墙允许3000端口访问
- 服务器关闭或重启后，数据会自动从文件中加载，不会丢失
- 所有设备的操作都会实时同步到服务器，确保数据一致性

## 项目结构

```
.
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript逻辑
├── server.js           # 后端服务器
├── package.json        # 项目配置
├── package-lock.json   # 依赖锁定文件（自动生成）
├── .gitignore          # Git忽略配置
├── README.md           # 项目说明文档
└── data/               # 数据存储目录
    ├── instruments.json       # 仪器数据
    ├── usage_records.json     # 使用记录
    └── inventory.json         # 出入库数据
```

## API接口

### 仪器数据
- `GET /api/instruments` - 获取所有仪器数据
- `POST /api/instruments` - 添加新仪器
- `PUT /api/instruments` - 更新所有仪器数据
- `DELETE /api/instruments/:id` - 删除指定仪器

### 使用记录
- `GET /api/usage-records` - 获取所有使用记录
- `POST /api/usage-records` - 添加使用记录
- `PUT /api/usage-records` - 更新所有使用记录

### 出入库数据
- `GET /api/inventory` - 获取出入库数据
- `PUT /api/inventory` - 更新出入库数据

## 管理员功能

### 管理员登录
- 点击"管理员登录"按钮
- 默认密码：`fjjky1234`

### 管理员权限
- 添加新仪器
- 删除选中仪器
- 批量编辑仪器信息
- 更新仪器有效期

## 数据导入导出

### 导出数据
- 点击"导出数据"按钮可将仪器数据导出为JSON文件

### 导入数据
- 点击"导入数据"按钮可选择JSON文件导入仪器数据
- 导入数据会覆盖现有数据，请谨慎操作

## 常见问题

### Q: 为什么多设备无法共享数据？
A: 请确保所有设备连接到同一中央服务器，并且访问地址使用服务器的IP地址而非localhost。

### Q: 服务器重启后数据会丢失吗？
A: 不会，所有数据保存在data目录下的JSON文件中，服务器重启后会自动加载。

### Q: 如何修改管理员密码？
A: 编辑`script.js`文件中的`ADMIN_PASSWORD`常量。

### Q: 如何修改服务器端口？
A: 编辑`server.js`文件中的`PORT`常量，默认端口为3000。

## 许可证

MIT License

## 更新日志

### v1.0.0
- 初始版本发布
- 实现仪器查询和管理功能
- 支持出入库登记和使用记录管理
- 实现多用户数据共享
- 添加数据持久化存储
