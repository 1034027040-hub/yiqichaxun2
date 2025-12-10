// ===== 全局变量和常量 =====

// 仪器数据 - 增加出厂编号和上次检定日期字段
const defaultInstrumentData = [
    { id: "TE06-032", name: "一体式数显回弹仪", spec: "HT-225T", factoryNo: "13219126829", lastCalibration: "2025-03-16", expiry: "2026-03-16", status: "expiring", notes: "/" },
    { id: "TE06-033", name: "一体式数显回弹仪", spec: "HT-225T", factoryNo: "13219126839", lastCalibration: "2025-03-16", expiry: "2026-03-16", status: "expiring", notes: "/" },
    { id: "TE06-034", name: "一体式数显回弹仪", spec: "HT-225T", factoryNo: "13219024335", lastCalibration: "2025-03-16", expiry: "2026-03-16", status: "expiring", notes: "/" },
    { id: "TE06-035", name: "一体式数显回弹仪", spec: "HT-225T", factoryNo: "13218124196", lastCalibration: "2025-03-16", expiry: "2026-03-16", status: "expiring", notes: "/" },
    { id: "TE06-018", name: "一体式数显回弹仪", spec: "HT-225T", factoryNo: "13218116376", lastCalibration: "2024-11-07", expiry: "2025-11-07", status: "expiring", notes: "/" },
    { id: "TE06-026", name: "一体式数显回弹仪", spec: "HT-225T", factoryNo: "19219126980", lastCalibration: "2025-03-16", expiry: "2026-03-16", status: "expiring", notes: "/" },
    { id: "TE06-047", name: "一体式数显回弹仪", spec: "HT-225T", factoryNo: "13219034350", lastCalibration: "2025-03-16", expiry: "2026-03-16", status: "expiring", notes: "/" },
    { id: "TE06-037", name: "混凝土回弹仪", spec: "HT225-A", factoryNo: "19040818", lastCalibration: "2025-03-16", expiry: "2026-03-16", status: "expiring", notes: "/" },
    { id: "TE06-038", name: "混凝土回弹仪", spec: "HT225-A", factoryNo: "19040829", lastCalibration: "2025-03-16", expiry: "2026-03-16", status: "valid", notes: "/" },
    { id: "TE06-040", name: "高强回弹仪", spec: "ZC1", factoryNo: "3088", lastCalibration: "2025-03-16", expiry: "2026-03-16", status: "valid", notes: "/" },
    { id: "TE02-046", name: "碳化深度测量仪", spec: "(0-8)mm", factoryNo: "1967871", lastCalibration: "2025-09-16", expiry: "2026-09-16", status: "valid", notes: "/" },
    { id: "TE02-047", name: "碳化深度测量仪", spec: "(0-8)mm", factoryNo: "1967872", lastCalibration: "2025-09-16", expiry: "2026-09-16", status: "valid", notes: "/" },
    { id: "TE02-048", name: "碳化深度测量仪", spec: "HT-A", factoryNo: "1823983", lastCalibration: "2025-09-16", expiry: "2026-09-16", status: "valid", notes: "/" },
    { id: "TE02-049", name: "碳化深度测量仪", spec: "HT-A", factoryNo: "1823984", lastCalibration: "2025-09-16", expiry: "2026-09-16", status: "valid", notes: "/" },
    { id: "TE02-055", name: "全站仪", spec: "ES-602G", factoryNo: "FH7477", lastCalibration: "2025-09-29", expiry: "2026-09-29", status: "valid", notes: "/" },
    { id: "TE02-033", name: "全站仪", spec: "ES-602G", factoryNo: "FH8428", lastCalibration: "2024-10-24", expiry: "2025-10-24", status: "valid", notes: "/" },
    { id: "TE02-052", name: "激光测距仪", spec: "PD5", factoryNo: "009190022", lastCalibration: "2024-10-27", expiry: "2025-10-27", status: "valid", notes: "/" },
    { id: "TE02-005", name: "激光测距仪", spec: "PD5", factoryNo: "318113386", lastCalibration: "2025-09-18", expiry: "2026-09-18", status: "valid", notes: "/" },
    { id: "TE02-044", name: "激光测距仪", spec: "PD5", factoryNo: "8190126", lastCalibration: "2024-10-27", expiry: "2025-10-27", status: "valid", notes: "/" },  
    { id: "TE02-051", name: "手持式激光测距仪", spec: "PD5", factoryNo: "009190012", lastCalibration: "2025-09-18", expiry: "2026-09-18", status: "valid", notes: "/" },
    { id: "TE05-029", name: "一体式钢筋扫描仪", spec: "HC-GY61T", factoryNo: "1141803167", lastCalibration: "2024-11-25", expiry: "2025-11-25", status: "valid", notes: "/" },
    { id: "TE05-027", name: "一体式楼板测厚仪", spec: "HC-HD90", factoryNo: "1211511242", lastCalibration: "2025-09-18", expiry: "2026-09-18", status: "valid", notes: "/" },
    { id: "TE02-109", name: "游标卡尺", spec: "(0-150)mm", factoryNo: "JH101269", lastCalibration: "2024-11-10", expiry: "2025-11-10", status: "valid", notes: "/" },
    { id: "TE02-059", name: "游标卡尺", spec: "200mm", factoryNo: "101112", lastCalibration: "2025-03-23", expiry: "2026-03-23", status: "valid", notes: "/" },
    { id: "TE06-042", name: "里氏硬度计", spec: "TIMI 5301", factoryNo: "0000046085000002", lastCalibration: "2025-09-22", expiry: "2026-09-22", status: "valid", notes: "/" },
    { id: "TE05-028", name: "超声波测厚仪", spec: "TT140", factoryNo: "0000046213000001", lastCalibration: "2025-09-16", expiry: "2026-09-16", status: "valid", notes: "/" },
    { id: "TE06-041", name: "贯入式砂浆强度检测仪", spec: "SJY800B", factoryNo: "1801803061", lastCalibration: "2024-10-22", expiry: "2025-10-22", status: "valid", notes: "/" },
    { id: "TE02-030", name: "钢卷尺", spec: "5m", factoryNo: "1855338", lastCalibration: "2025-09-18", expiry: "2026-09-18", status: "valid", notes: "/" },
    { id: "TE02-056", name: "钢卷尺", spec: "5m", factoryNo: "1855339", lastCalibration: "2025-09-18", expiry: "2026-09-18", status: "valid", notes: "/" },
    { id: "TE02-057", name: "钢卷尺", spec: "5m", factoryNo: "1935286", lastCalibration: "2025-09-18", expiry: "2026-09-18", status: "valid", notes: "/" },
    { id: "TE01-009", name: "锚杆拉拔仪（一体式）", spec: "HC-10", factoryNo: "55019080204", lastCalibration: "2025-09-15", expiry: "2026-09-15", status: "valid", notes: "/" },
    { id: "TE02-053", name: "水准仪", spec: "DiNi 0.3mm per km", factoryNo: "747246", lastCalibration: "2025-09-22", expiry: "2026-09-22", status: "valid", notes: "/" },
    { id: "TE08-008", name: "钢砧", spec: "GZⅡ", factoryNo: "2016", lastCalibration: "2025-10-24", expiry: "2026-10-24", status: "valid", notes: "/" },
    { id: "TE04-005", name: "红外线测温仪", spec: "UT301A+", factoryNo: "C190574464", lastCalibration: "2025-09-17", expiry: "2026-09-17", status: "valid", notes: "/" },
    { id: "TE04-006", name: "红外线测温仪", spec: "UT301A+", factoryNo: "C190574487", lastCalibration: "2025-09-17", expiry: "2026-09-17", status: "valid", notes: "/" },
    { id: "TE01-008", name: "张力计", spec: "SEN-1-1", factoryNo: "38047741", lastCalibration: "2025-09-16", expiry: "2026-09-16", status: "valid", notes: "/" },
    { id: "TE02-062", name: "百分表", spec: "(0-10)mm", factoryNo: "4104400", lastCalibration: "2024-05-23", expiry: "2025-05-23", status: "valid", notes: "/" },
    { id: "TE02-063", name: "百分表", spec: "(0-10)mm", factoryNo: "3714968", lastCalibration: "2024-05-23", expiry: "2025-05-23", status: "valid", notes: "/" },
    { id: "TE02-064", name: "百分表", spec: "(0-10)mm", factoryNo: "2403841", lastCalibration: "2024-05-23", expiry: "2025-05-23", status: "valid", notes: "/" },
    { id: "TE02-065", name: "百分表", spec: "(0-10)mm", factoryNo: "26225", lastCalibration: "2025-09-18", expiry: "2026-09-18", status: "valid", notes: "/" },
    { id: "TE02-066", name: "大量程百分表", spec: "(0-50)mm", factoryNo: "3900526", lastCalibration: "2025-09-18", expiry: "2026-09-18", status: "valid", notes: "/" },
    { id: "TE02-067", name: "大量程百分表", spec: "(0-50)mm", factoryNo: "3900502", lastCalibration: "2025-09-18", expiry: "2026-09-18", status: "valid", notes: "/" },
    { id: "TE02-068", name: "大量程百分表", spec: "(0-50)mm", factoryNo: "5712888", lastCalibration: "2025-09-18", expiry: "2026-09-18", status: "valid", notes: "/" },
    { id: "TE02-031", name: "裂缝测宽仪", spec: "HC-CK102", factoryNo: "1611812275", lastCalibration: "2025-09-18", expiry: "2026-09-18", status: "valid", notes: "/" },
    { id: "TE02-116", name: "放大镜", spec: "MJ-E20XB", factoryNo: "2016277", lastCalibration: "2025-10-13", expiry: "2026-10-13", status: "valid", notes: "/" },
    { id: "TE05-120", name: "一体式钢筋扫描仪", spec: "CW-A50", factoryNo: "20624040421", lastCalibration: "2025-09-18", expiry: "2026-09-18", status: "valid", notes: "/" },
    { id: "TE02-122", name: "焊接检验尺", spec: "HJC40", factoryNo: "24082418", lastCalibration: "2025-09-22", expiry: "2026-09-22", status: "valid", notes: "/" }
];

// 管理密码
const ADMIN_PASSWORD = "fjjky1234";
// 本地存储键名
const STORAGE_KEY = "instrument_system_data";
const UPDATE_TIME_KEY = "instrument_system_last_update";
const USAGE_RECORDS_KEY = "instrument_usage_records";
const INVENTORY_DATA_KEY = "inventory_data";
// 本地存储版本
const STORAGE_VERSION = "1.0";

// 全局变量
let currentInstrumentId = null; // 当前选中的仪器ID
let isAuthenticated = false; // 管理员验证状态
let instrumentData = []; // 仪器数据
let selectedInstrumentIds = []; // 选中的仪器ID数组
let isAdminMode = false; // 是否处于管理员编辑模式
let currentEditInstrumentId = null; // 当前正在编辑的仪器ID
let currentUsageInstrumentId = null; // 当前正在记录使用情况的仪器ID
let deleteConfirmationActive = false; // 删除确认状态，防止重复点击

// 分页相关变量
let currentPage = 1;
let pageSize = 10; // 默认每页显示10条
let totalPages = 1;

// 打印设置相关变量
let printSettings = {
    outboundDate: '',
    deviceStatus: '正常',
    receiver: '',
    manager: ''
};

// 导入数据相关变量
let importFileData = null; // 存储要导入的文件数据

// 使用记录数据
let usageRecords = {
    "TE02-055": [],
    "TE02-033": [],
    "TE02-053": []
};

// 编辑模式状态
let editMode = {
    "TE02-055": false,
    "TE02-033": false,
    "TE02-053": false
};

// 新增：出入库数据
let inventoryData = {
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
};

// ===== 数据初始化和管理 =====

// 初始化：从本地存储加载数据或使用默认数据
function initData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            if (parsedData.version === STORAGE_VERSION && parsedData.data) {
                instrumentData = parsedData.data;
                console.log("从本地存储加载仪器数据");
                showMessage("已加载本地保存的数据", "success");
            } else {
                // 版本不匹配或数据结构不正确，使用默认数据
                instrumentData = [...defaultInstrumentData];
                saveDataToStorage();
                showMessage("数据版本不匹配，已恢复默认数据", "info");
            }
        } catch (e) {
            console.error("加载本地存储数据时出错:", e);
            instrumentData = [...defaultInstrumentData];
            saveDataToStorage();
            showMessage("加载数据出错，已恢复默认数据", "error");
        }
    } else {
        // 本地存储中没有数据，使用默认数据并保存
        instrumentData = [...defaultInstrumentData];
        saveDataToStorage();
        console.log("使用默认仪器数据并保存到本地存储");
    }
    
    // 加载使用记录数据
    loadUsageRecords();
    
    // 加载出入库数据
    loadInventoryData();
    
    // 每次打开主页面时，清空选中的仪器ID
    selectedInstrumentIds = [];
    // 清空本地存储中的选中仪器记录
    localStorage.removeItem("selected_instruments");
    
    // 计算总页数
    calculateTotalPages();
    
    // 初始化打印设置
    initPrintSettings();
    
    // 更新最近更新时间显示
    updateLastUpdateTimeDisplay();
}

// 加载使用记录数据
function loadUsageRecords() {
    const savedRecords = localStorage.getItem(USAGE_RECORDS_KEY);
    
    if (savedRecords) {
        try {
            const parsedRecords = JSON.parse(savedRecords);
            usageRecords = parsedRecords;
            console.log("从本地存储加载使用记录数据");
        } catch (e) {
            console.error("加载使用记录数据时出错:", e);
            usageRecords = {
                "TE02-055": [],
                "TE02-033": [],
                "TE02-053": []
            };
        }
    }
}

// 保存使用记录数据
function saveUsageRecords() {
    try {
        localStorage.setItem(USAGE_RECORDS_KEY, JSON.stringify(usageRecords));
        console.log("使用记录数据已保存到本地存储");
    } catch (e) {
        console.error("保存使用记录数据时出错:", e);
    }
}

// 加载出入库数据
function loadInventoryData() {
    const savedInventory = localStorage.getItem(INVENTORY_DATA_KEY);
    
    if (savedInventory) {
        try {
            const parsedInventory = JSON.parse(savedInventory);
            inventoryData = parsedInventory;
            console.log("从本地存储加载出入库数据");
        } catch (e) {
            console.error("加载出入库数据时出错:", e);
            inventoryData = {
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
            };
        }
    }
}

// 保存出入库数据
function saveInventoryData() {
    try {
        localStorage.setItem(INVENTORY_DATA_KEY, JSON.stringify(inventoryData));
        console.log("出入库数据已保存到本地存储");
    } catch (e) {
        console.error("保存出入库数据时出错:", e);
    }
}

// 更新最近更新时间显示
function updateLastUpdateTimeDisplay() {
    const lastUpdateTime = localStorage.getItem(UPDATE_TIME_KEY);
    const lastUpdateElement = document.getElementById('lastUpdateTime');
    
    if (lastUpdateTime) {
        try {
            const updateDate = new Date(lastUpdateTime);
            const now = new Date();
            const diffInMinutes = Math.floor((now - updateDate) / (1000 * 60));
            
            let displayText = '';
            if (diffInMinutes < 1) {
                displayText = '刚刚';
            } else if (diffInMinutes < 60) {
                displayText = `${diffInMinutes}分钟前`;
            } else if (diffInMinutes < 1440) { // 24小时
                const hours = Math.floor(diffInMinutes / 60);
                displayText = `${hours}小时前`;
            } else {
                const days = Math.floor(diffInMinutes / 1440);
                displayText = `${days}天前`;
            }
            
            lastUpdateElement.textContent = displayText;
            lastUpdateElement.title = `最后更新：${updateDate.toLocaleString('zh-CN')}`;
        } catch (e) {
            console.error("解析更新时间时出错:", e);
            lastUpdateElement.textContent = '未知时间';
        }
    } else {
        lastUpdateElement.textContent = '从未更新';
    }
}

// 初始化打印设置
function initPrintSettings() {
    // 设置默认出库日期为今天
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    printSettings.outboundDate = `${year}-${month}-${day}`;
    
    // 设置其他默认值
    printSettings.deviceStatus = '正常';
    printSettings.receiver = '';
    printSettings.manager = '';
}

// 保存数据到本地存储
function saveDataToStorage() {
    try {
        const now = new Date().toISOString();
        const dataToSave = {
            version: STORAGE_VERSION,
            data: instrumentData,
            lastUpdated: now
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
        localStorage.setItem(UPDATE_TIME_KEY, now);
        console.log("数据已保存到本地存储");
        
        // 更新最近更新时间显示
        updateLastUpdateTimeDisplay();
        
        // 显示自动保存指示器
        showAutoSaveIndicator();
    } catch (e) {
        console.error("保存数据到本地存储时出错:", e);
        showMessage("保存数据时出错，请检查浏览器设置", "error");
    }
}

// 保存选中的仪器ID到本地存储
function saveSelectedInstruments() {
    try {
        localStorage.setItem("selected_instruments", JSON.stringify(selectedInstrumentIds));
    } catch (e) {
        console.error("保存选中仪器时出错:", e);
    }
}

// 从本地存储加载选中的仪器ID
function loadSelectedInstruments() {
    try {
        const savedSelected = localStorage.getItem("selected_instruments");
        if (savedSelected) {
            selectedInstrumentIds = JSON.parse(savedSelected);
        }
    } catch (e) {
        console.error("加载选中仪器时出错:", e);
        selectedInstrumentIds = [];
    }
}

// 显示自动保存指示器
function showAutoSaveIndicator() {
    const indicator = document.getElementById('autoSaveIndicator');
    indicator.style.display = 'flex';
    
    // 3秒后自动隐藏
    setTimeout(() => {
        indicator.style.display = 'none';
    }, 3000);
}

// 计算总页数
function calculateTotalPages() {
    totalPages = Math.ceil(instrumentData.length / pageSize);
    if (totalPages === 0) totalPages = 1;
    
    // 如果当前页码大于总页数，重置为最后一页
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    
    // 更新分页显示
    updatePaginationDisplay();
}

// 更新分页显示
function updatePaginationDisplay() {
    const currentPageDisplayTop = document.getElementById('currentPageDisplayTop');
    const totalPagesDisplayTop = document.getElementById('totalPagesDisplayTop');
    const totalInstrumentsTop = document.getElementById('totalInstrumentsTop');
    
    const currentPageDisplay = document.getElementById('currentPageDisplay');
    const totalPagesDisplay = document.getElementById('totalPagesDisplay');
    const totalInstruments = document.getElementById('totalInstruments');
    
    if (currentPageDisplayTop) currentPageDisplayTop.textContent = currentPage;
    if (totalPagesDisplayTop) totalPagesDisplayTop.textContent = totalPages;
    if (totalInstrumentsTop) totalInstrumentsTop.textContent = instrumentData.length;
    
    if (currentPageDisplay) currentPageDisplay.textContent = currentPage;
    if (totalPagesDisplay) totalPagesDisplay.textContent = totalPages;
    if (totalInstruments) totalInstruments.textContent = instrumentData.length;
    
    // 更新分页按钮状态
    document.getElementById('firstPageBtn').disabled = currentPage === 1;
    document.getElementById('prevPageBtn').disabled = currentPage === 1;
    document.getElementById('nextPageBtn').disabled = currentPage === totalPages;
    document.getElementById('lastPageBtn').disabled = currentPage === totalPages;
    
    // 生成页码按钮
    generatePageNumbers();
    
    // 更新跳转页面输入框的值
    document.getElementById('jumpToPage').value = currentPage;
    document.getElementById('jumpToPage').max = totalPages;
}

// 生成页码按钮
function generatePageNumbers() {
    const pageNumbersContainer = document.getElementById('pageNumbers');
    pageNumbersContainer.innerHTML = '';
    
    // 最多显示5个页码按钮
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    
    // 如果页面不够5个，调整起始页码
    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }
    
    // 添加页码按钮
    for (let i = startPage; i <= endPage; i++) {
        const pageNumber = document.createElement('div');
        pageNumber.className = 'page-number';
        if (i === currentPage) {
            pageNumber.classList.add('active');
        }
        pageNumber.textContent = i;
        pageNumber.dataset.page = i;
        
        pageNumber.addEventListener('click', function() {
            if (parseInt(this.dataset.page) !== currentPage) {
                goToPage(parseInt(this.dataset.page));
            }
        });
        
        pageNumbersContainer.appendChild(pageNumber);
    }
    
    // 如果总页数大于5，添加省略号
    if (totalPages > 5) {
        if (startPage > 1) {
            const ellipsisBefore = document.createElement('div');
            ellipsisBefore.className = 'page-number disabled';
            ellipsisBefore.textContent = '...';
            pageNumbersContainer.insertBefore(ellipsisBefore, pageNumbersContainer.firstChild);
        }
        
        if (endPage < totalPages) {
            const ellipsisAfter = document.createElement('div');
            ellipsisAfter.className = 'page-number disabled';
            ellipsisAfter.textContent = '...';
            pageNumbersContainer.appendChild(ellipsisAfter);
        }
    }
}

// 跳转到指定页面
function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    initTable();
    updatePaginationDisplay();
    
    // 更新全选复选框状态
    updateSelectAllCheckbox();
}

// ===== 表格管理 =====

// 初始化表格（带分页）
function initTable() {
    const tableBody = document.getElementById('instrumentTable');
    tableBody.innerHTML = '';
    
    // 计算当前页的数据范围
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, instrumentData.length);
    
    // 显示当前页的数据
    for (let i = startIndex; i < endIndex; i++) {
        const instrument = instrumentData[i];
        const isSelected = selectedInstrumentIds.includes(instrument.id);
        
        // 计算状态和样式
        const today = new Date();
        const expiryDate = new Date(instrument.expiry);
        const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
        
        let statusClass = 'status-valid';
        let statusText = '有效';
        
        if (daysUntilExpiry < 0) {
            statusClass = 'status-expired';
            statusText = '已过期';
        } else if (daysUntilExpiry <= 90) {
            statusClass = 'status-expiring';
            statusText = '即将到期';
        }
        
        // 在管理员模式下，为出厂编号、上次检定日期和有效期单元格添加编辑图标
        let factoryNoCellContent = instrument.factoryNo || '';
        let lastCalibrationCellContent = instrument.lastCalibration || '';
        let expiryCellContent = instrument.expiry;
        
        if (isAdminMode) {
            factoryNoCellContent = `
                <div class="edit-expiry-cell" data-id="${instrument.id}" data-field="factoryNo">
                    ${instrument.factoryNo || ''}
                    <span class="icon icon-edit edit-icon" title="点击编辑出厂编号"></span>
                </div>
            `;
            
            lastCalibrationCellContent = `
                <div class="edit-expiry-cell" data-id="${instrument.id}" data-field="lastCalibration">
                    ${instrument.lastCalibration || ''}
                    <span class="icon icon-edit edit-icon" title="点击编辑上次检定日期"></span>
                </div>
            `;
            
            expiryCellContent = `
                <div class="edit-expiry-cell" data-id="${instrument.id}" data-field="expiry">
                    ${instrument.expiry}
                    <span class="icon icon-edit edit-icon" title="点击编辑有效期"></span>
                </div>
            `;
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="checkbox-container">
                <input type="checkbox" class="select-checkbox instrument-checkbox" data-id="${instrument.id}" ${isSelected ? 'checked' : ''}>
            </td>
            <td class="management-id">${instrument.id}</td>
            <td>${instrument.name}</td>
            <td>${instrument.spec}</td>
            <td>${factoryNoCellContent}</td>
            <td>${lastCalibrationCellContent}</td>
            <td>${expiryCellContent}</td>
            <td><span class="status ${statusClass}">${statusText}</span></td>
            <td>${instrument.notes || ''}</td>
        `;
        tableBody.appendChild(row);
        
        // 点击表格行可以快速查询（除了勾选框和编辑图标）
        row.addEventListener('click', function(e) {
            // 如果不是点击在勾选框或编辑图标上，则执行查询
            if (!e.target.closest('.select-checkbox') && !e.target.closest('.edit-icon')) {
                document.getElementById('searchInput').value = instrument.id;
                searchInstrument();
            }
        });
        
        // 为勾选框添加点击事件
        const checkbox = row.querySelector('.instrument-checkbox');
        if (checkbox) {
            checkbox.addEventListener('click', function(e) {
                e.stopPropagation(); // 阻止事件冒泡到行点击事件
                const instrumentId = this.getAttribute('data-id');
                toggleInstrumentSelection(this);
                
                 // 检查是否勾选了特定仪器，如果是则弹出使用记录对话框
                // 管理员模式下不弹出使用记录对话框
                if (this.checked && ["TE02-055", "TE02-033", "TE02-053"].includes(instrumentId)) {
                    // 只有在非管理员模式下才弹出使用记录对话框
                    if (!isAdminMode) {
                        showUsageRecordDialog(instrumentId);
                    }
                }
            });
        }
        
        // 在管理员模式下，为编辑图标添加点击事件
        if (isAdminMode) {
            const editCells = row.querySelectorAll('.edit-expiry-cell');
            editCells.forEach(editCell => {
                editCell.addEventListener('click', function(e) {
                    // 如果点击的是编辑图标或单元格本身
                    if (e.target.closest('.edit-expiry-cell')) {
                        const instrumentId = this.getAttribute('data-id');
                        const field = this.getAttribute('data-field');
                        openEditPopup(instrumentId, field);
                    }
                });
            });
        }
    }
    
    // 如果当前页没有数据，显示提示
    if (endIndex <= startIndex) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 40px; color: #888;">
                    暂无仪器数据
                </td>
            </tr>
        `;
    }
    
    // 更新全选复选框状态
    updateSelectAllCheckbox();
    
    // 如果处于管理员模式，添加特殊样式
    if (isAdminMode) {
        document.getElementById('mainInstrumentTable').classList.add('edit-mode');
    } else {
        document.getElementById('mainInstrumentTable').classList.remove('edit-mode');
    }
}

// ===== 仪器查询功能 =====

// 模糊查询仪器
function fuzzySearch(searchId) {
    // 将搜索词转换为小写，实现不区分大小写
    const searchTerm = searchId.toLowerCase().trim();
    
    if (!searchTerm) {
        return [];
    }
    
    // 模糊搜索逻辑：在管理编号、仪器名称、规格和备注中搜索
    const results = instrumentData.filter(instrument => {
        // 检查管理编号（不区分大小写）
        if (instrument.id.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // 检查仪器名称（不区分大小写）
        if (instrument.name.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // 检查型号规格（不区分大小写）
        if (instrument.spec.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // 检查出厂编号（不区分大小写）
        if (instrument.factoryNo && instrument.factoryNo.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // 检查备注（不区分大小写）
        if (instrument.notes && instrument.notes.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        return false;
    });
    
    return results;
}

// 查询仪器
function searchInstrument() {
    const searchId = document.getElementById('searchInput').value.trim();
    const resultContent = document.getElementById('resultContent');
    
    if (!searchId) {
        resultContent.innerHTML = '<div class="result-empty">请输入仪器管理编号进行查询</div>';
        return;
    }
    
    // 1. 首先尝试精确匹配（不区分大小写）
    const exactMatch = instrumentData.find(item => 
        item.id.toLowerCase() === searchId.toLowerCase()
    );
    
    if (exactMatch) {
        // 显示精确匹配的仪器信息
        displayInstrumentInfo(exactMatch);
        // 自动勾选查询到的仪器
        autoSelectInstrument(exactMatch.id);
        return;
    }
    
    // 2. 如果没有精确匹配，进行模糊查询
    const fuzzyResults = fuzzySearch(searchId);
    
    if (fuzzyResults.length === 0) {
        resultContent.innerHTML = `
            <div class="result-empty">
                <p>未找到与 "<strong>${searchId}</strong>" 相关的仪器</p>
                <p style="margin-top:10px; font-size:0.9rem">请尝试输入部分编号、仪器名称或规格进行模糊查询</p>
            </div>
        `;
        return;
    }
    
    if (fuzzyResults.length === 1) {
        // 如果只有一个模糊匹配结果，直接显示该仪器信息并自动勾选
        displayInstrumentInfo(fuzzyResults[0]);
        autoSelectInstrument(fuzzyResults[0].id);
        showMessage(`找到1个相关仪器（模糊匹配）`, 'info');
    } else {
        // 如果有多个模糊匹配结果，显示结果列表
        displayFuzzyResults(fuzzyResults, searchId);
    }
}

// 自动勾选查询到的仪器
function autoSelectInstrument(instrumentId) {
    // 如果仪器还没有被选中，则自动选中
    if (!selectedInstrumentIds.includes(instrumentId)) {
        selectedInstrumentIds.push(instrumentId);
        
        // 保存选中状态到本地存储
        saveSelectedInstruments();
        
        // 更新选中计数和按钮状态
        updateSelectedCount();
        
        // 更新全选复选框状态
        updateSelectAllCheckbox();
        
        // 更新表格中的勾选框状态
        updateTableCheckboxes();
        
        // 如果仪器不在当前页，跳转到仪器所在的页面
        const instrumentIndex = instrumentData.findIndex(item => item.id === instrumentId);
        if (instrumentIndex !== -1) {
            const instrumentPage = Math.floor(instrumentIndex / pageSize) + 1;
            if (instrumentPage !== currentPage) {
                // 显示提示信息
                showMessage(`仪器 "${instrumentId}" 已自动勾选。仪器在第 ${instrumentPage} 页，已自动跳转。`, 'info');
                // 跳转到仪器所在页
                goToPage(instrumentPage);
            } else {
                showMessage(`仪器 "${instrumentId}" 已自动勾选。`, 'success');
            }
        }
    } else {
        // 如果仪器已经被选中，显示提示信息
        showMessage(`仪器 "${instrumentId}" 已选中。`, 'info');
    }
    
    // 检查是否勾选了特定仪器，如果是则弹出使用记录对话框
    if (["TE02-055", "TE02-033", "TE02-053"].includes(instrumentId)) {
        // 延迟弹出，让用户先看到勾选效果
        setTimeout(() => {
            showUsageRecordDialog(instrumentId);
        }, 300);
    }
}

// 更新表格中的勾选框状态
function updateTableCheckboxes() {
    const checkboxes = document.querySelectorAll('.instrument-checkbox');
    checkboxes.forEach(checkbox => {
        const instrumentId = checkbox.getAttribute('data-id');
        checkbox.checked = selectedInstrumentIds.includes(instrumentId);
    });
}

// 显示仪器详细信息
function displayInstrumentInfo(instrument) {
    // 保存当前选中的仪器ID
    currentInstrumentId = instrument.id;
    
    // 计算状态和样式
    const today = new Date();
    const expiryDate = new Date(instrument.expiry);
    const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
    
    let expiryClass = 'valid';
    let statusText = '有效';
    
    if (daysUntilExpiry < 0) {
        expiryClass = 'expired';
        statusText = '已过期';
    } else if (daysUntilExpiry <= 90) {
        expiryClass = 'expiring';
        statusText = '即将到期';
    }
    
    // 检查该仪器是否已被选中
    const isSelected = selectedInstrumentIds.includes(instrument.id);
    
    // 显示仪器信息
    const resultContent = document.getElementById('resultContent');
    resultContent.innerHTML = `
        <div class="instrument-info">
            <div class="info-card">
                <input type="checkbox" class="result-checkbox" data-id="${instrument.id}" ${isSelected ? 'checked' : ''}>
                <span class="result-checkbox-label">勾选此仪器</span>
                <h3><span class="icon icon-instrument"></span> 仪器名称</h3>
                <p>${instrument.name}</p>
            </div>
            <div class="info-card">
                <h3><span class="icon icon-info"></span> 管理编号</h3>
                <p>${instrument.id}</p>
            </div>
            <div class="info-card">
                <h3><span class="icon icon-calendar"></span> 有效期至</h3>
                <p class="${expiryClass}">${instrument.expiry} (${statusText})</p>
            </div>
            <div class="info-card">
                <h3><span class="icon icon-calendar"></span> 上次检定日期</h3>
                <p>${instrument.lastCalibration || '未记录'}</p>
            </div>
            <div class="info-card">
                <h3><span class="icon icon-info"></span> 出厂编号</h3>
                <p>${instrument.factoryNo || '未记录'}</p>
            </div>
            <div class="info-card">
                <h3><span class="icon icon-info"></span> 备注</h3>
                <p>${instrument.notes || '无'}</p>
            </div>
        </div>
        <div style="margin-top: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 8px;">
            <p style="color: #4b6cb7; font-size: 0.9rem; font-weight: 600;">
                <span class="icon icon-checkbox"></span> 提示：此仪器已自动勾选。您可以在下方的仪器列表中进行查看和管理。
            </p>
        </div>
    `;
    
    // 为查询结果的勾选框添加事件
    const resultCheckbox = resultContent.querySelector('.result-checkbox');
    if (resultCheckbox) {
        resultCheckbox.addEventListener('change', function() {
            const instrumentId = this.getAttribute('data-id');
            toggleInstrumentSelection(this);
            
            // 检查是否勾选了特定仪器，如果是则弹出使用记录对话框
            // 管理员模式下不弹出使用记录对话框
            if (this.checked && ["TE02-055", "TE02-033", "TE02-053"].includes(instrumentId)) {
                // 只有在非管理员模式下才弹出使用记录对话框
                if (!isAdminMode) {
                    showUsageRecordDialog(instrumentId);
                }
            }
        });
    }
    
    // 如果已认证，设置有效期表单
    if (isAuthenticated) {
        document.getElementById('expiryDate').value = instrument.expiry;
        document.getElementById('expiryNotes').value = instrument.notes || '';
        
        // 显示有效期表单
        document.getElementById('expiryForm').style.display = 'block';
        
        // 显示提示信息
        showMessage('可以修改当前仪器的有效期，修改后会自动保存。', 'info');
    } else {
        document.getElementById('expiryForm').style.display = 'none';
    }
}

// 显示模糊查询结果列表
function displayFuzzyResults(results, searchTerm) {
    const resultContent = document.getElementById('resultContent');
    const searchTermLower = searchTerm.toLowerCase();
    
    // 生成结果列表HTML
    let resultsHtml = `
        <div class="fuzzy-results">
            <h3><span class="icon icon-search"></span> 找到 ${results.length} 个相关仪器</h3>
            <div style="margin-bottom: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 8px;">
                <p style="color: #4b6cb7; font-size: 0.9rem; font-weight: 600;">
                    <span class="icon icon-checkbox"></span> 提示：点击仪器行可查看详细信息并自动勾选该仪器
                </p>
            </div>
            <table style="width:100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05); margin-top: 10px;">
                <thead>
                    <tr style="background-color: #f8f9fa;">
                        <th style="padding: 12px 15px; text-align: center; color: #182848; font-weight: 600; border-bottom: 2px solid #eaeaea; width: 40px;">选择</th>
                        <th style="padding: 12px 15px; text-align: left; color: #182848; font-weight: 600; border-bottom: 2px solid #eaeaea;">管理编号</th>
                        <th style="padding: 12px 15px; text-align: left; color: #182848; font-weight: 600; border-bottom: 2px solid #eaeaea;">仪器名称</th>
                        <th style="padding: 12px 15px; text-align: left; color: #182848; font-weight: 600; border-bottom: 2px solid #eaeaea;">型号规格</th>
                        <th style="padding: 12px 15px; text-align: left; color: #182848; font-weight: 600; border-bottom: 2px solid #eaeaea;">出厂编号</th>
                        <th style="padding: 12px 15px; text-align: left; color: #182848; font-weight: 600; border-bottom: 2px solid #eaeaea;">有效期至</th>
                        <th style="padding: 12px 15px; text-align: left; color: #182848; font-weight: 600; border-bottom: 2px solid #eaeaea;">状态</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    results.forEach(instrument => {
        // 计算状态和样式
        const today = new Date();
        const expiryDate = new Date(instrument.expiry);
        const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
        
        let statusClass = 'status-valid';
        let statusText = '有效';
        
        if (daysUntilExpiry < 0) {
            statusClass = 'status-expired';
            statusText = '已过期';
        } else if (daysUntilExpiry <= 90) {
            statusClass = 'status-expiring';
            statusText = '即将到期';
        }
        
        // 检查该仪器是否已被选中
        const isSelected = selectedInstrumentIds.includes(instrument.id);
        
        resultsHtml += `
            <tr data-id="${instrument.id}" style="cursor: pointer; border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 15px; text-align: center;">
                    <input type="checkbox" class="fuzzy-results-checkbox" data-id="${instrument.id}" ${isSelected ? 'checked' : ''}>
                </td>
                <td style="padding: 12px 15px;">${instrument.id}</td>
                <td style="padding: 12px 15px;">${instrument.name}</td>
                <td style="padding: 12px 15px;">${instrument.spec}</td>
                <td style="padding: 12px 15px;">${instrument.factoryNo || ''}</td>
                <td style="padding: 12px 15px;">${instrument.expiry}</td>
                <td style="padding: 12px 15px;"><span class="status ${statusClass}">${statusText}</span></td>
            </tr>
        `;
    });
    
    resultsHtml += `
                </tbody>
            </table>
            <p style="margin-top: 15px; font-size: 0.9rem; color: #7f8c8d;">
                提示：点击表格中的仪器行可以查看详细信息并自动勾选该仪器，勾选仪器可添加到出入库列表
            </p>
        </div>
    `;
    
    resultContent.innerHTML = resultsHtml;
    
    // 为结果列表中的行添加点击事件
    const resultRows = resultContent.querySelectorAll('tbody tr');
    resultRows.forEach(row => {
        row.addEventListener('click', function(e) {
            // 如果点击的不是勾选框
            if (!e.target.closest('.fuzzy-results-checkbox')) {
                const instrumentId = this.getAttribute('data-id');
                const instrument = instrumentData.find(item => item.id === instrumentId);
                if (instrument) {
                    document.getElementById('searchInput').value = instrument.id;
                    displayInstrumentInfo(instrument);
                    // 自动勾选该仪器
                    autoSelectInstrument(instrument.id);
                }
            }
        });
    });
    
    // 为结果列表中的勾选框添加事件
    const resultCheckboxes = resultContent.querySelectorAll('.fuzzy-results-checkbox');
    resultCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function(e) {
            e.stopPropagation(); // 阻止事件冒泡到行点击事件
            const instrumentId = this.getAttribute('data-id');
            toggleInstrumentSelection(this);
            
            // 检查是否勾选了特定仪器，如果是则弹出使用记录对话框
            // 管理员模式下不弹出使用记录对话框
            if (this.checked && ["TE02-055", "TE02-033", "TE02-053"].includes(instrumentId)) {
                // 只有在非管理员模式下才弹出使用记录对话框
                if (!isAdminMode) {
                    showUsageRecordDialog(instrumentId);
                }
            }
        });
    });
    
    showMessage(`找到 ${results.length} 个相关仪器，请点击查看详细信息并自动勾选`, 'info');
}

// ===== 管理员登录功能 =====

// 显示密码输入对话框
function showPasswordDialog() {
    // 清空密码输入框
    document.getElementById('passwordDialogInput').value = '';
    
    // 隐藏Caps Lock警告
    document.getElementById('capslockWarning').classList.remove('active');
    
    // 显示对话框
    document.getElementById('passwordDialogOverlay').classList.add('active');
    
    // 聚焦到密码输入框
    document.getElementById('passwordDialogInput').focus();
}

// 关闭密码输入对话框
function closePasswordDialog() {
    document.getElementById('passwordDialogOverlay').classList.remove('active');
}

// 检查Caps Lock状态
function checkCapsLock(event) {
    const capsLockWarning = document.getElementById('capslockWarning');
    
    // 检查是否是字母键
    const isLetter = event.keyCode >= 65 && event.keyCode <= 90;
    
    if (isLetter) {
        // 检查Caps Lock状态
        const isCapsLockOn = event.getModifierState && event.getModifierState('CapsLock');
        capsLockWarning.classList.toggle('active', isCapsLockOn);
    }
}

// 验证管理员密码
function authenticate() {
    const passwordInput = document.getElementById('passwordDialogInput');
    const password = passwordInput.value;
    
    if (password === ADMIN_PASSWORD) {
        isAuthenticated = true;
        isAdminMode = true;
        
        // 更新管理员登录按钮状态
        const adminLoginBtn = document.getElementById('adminLoginBtn');
        adminLoginBtn.innerHTML = '<span class="icon icon-lock"></span> 管理员已登录';
        adminLoginBtn.classList.add('logged-in');
        
        // 显示管理区域
        const managementSection = document.getElementById('managementSection');
        managementSection.classList.add('visible');
        // 显示管理员操作按钮
        document.getElementById('adminActions').style.display = 'block';
        // 显示认证状态
        showAuthStatus();
        // 启用批量编辑按钮（如果已选中仪器）
        if (selectedInstrumentIds.length > 0) {
            document.getElementById('batchEditBtn').disabled = false;
        }
        // 显示成功消息
        showMessage('身份验证成功！您现在可以编辑任何仪器的出厂编号、上次检定日期和有效期。', 'success');
        
        // 关闭密码对话框
        closePasswordDialog();
        
        // 清空结果区域，显示管理员模式信息
        document.getElementById('resultContent').innerHTML = `
            <div class="result-empty">
                <p><strong>管理员模式已启用</strong></p>
                <p style="margin-top:10px; font-size:0.9rem">现在您可以直接在仪器列表表格中点击任何仪器的出厂编号、上次检定日期或有效期进行编辑</p>
                <p style="margin-top:5px; font-size:0.9rem">点击相应列中的编辑图标即可修改该仪器的信息</p>
                <p style="margin-top:5px; font-size:0.9rem">您还可以批量选择仪器，然后点击"批量编辑选中仪器"按钮进行批量修改</p>
            </div>
        `;
        
        // 重新渲染表格，添加编辑功能
        initTable();
        
    } else {
        showMessage('密码错误，请重新输入！', 'error');
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// 显示认证状态
function showAuthStatus() {
    const authStatus = document.getElementById('authStatus');
    authStatus.style.display = 'flex';
}

// 退出管理
function logout() {
    isAuthenticated = false;
    isAdminMode = false;
    document.getElementById('authStatus').style.display = 'none';
    // 隐藏管理员操作按钮
    document.getElementById('adminActions').style.display = 'none';
    
    // 禁用批量编辑按钮
    document.getElementById('batchEditBtn').disabled = true;
    
    // 更新管理员登录按钮状态
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    adminLoginBtn.innerHTML = '<span class="icon icon-lock"></span> 管理员登录';
    adminLoginBtn.classList.remove('logged-in');
    
    // 隐藏管理区域
    const managementSection = document.getElementById('managementSection');
    managementSection.classList.remove('visible');
    
    // 重新渲染表格，移除编辑功能
    initTable();
    
    // 清空结果区域
    document.getElementById('resultContent').innerHTML = '<div class="result-empty">请输入仪器管理编号进行查询</div>';
    
    showMessage('已退出管理员模式。', 'info');
}

// 保存有效期
function saveExpiry() {
    if (!currentInstrumentId) {
        showMessage('请先查询需要修改有效期的仪器。', 'error');
        return;
    }
    
    const expiryDate = document.getElementById('expiryDate').value;
    const expiryNotes = document.getElementById('expiryNotes').value;
    
    if (!expiryDate) {
        showMessage('请选择有效期日期。', 'error');
        return;
    }
    
    // 更新仪器数据
    const instrumentIndex = instrumentData.findIndex(item => item.id === currentInstrumentId);
    if (instrumentIndex !== -1) {
        instrumentData[instrumentIndex].expiry = expiryDate;
        instrumentData[instrumentIndex].notes = expiryNotes;
        
        // 重新计算状态
        updateInstrumentStatus(instrumentIndex);
        
        // 自动保存到本地存储
        saveDataToStorage();
        
        // 重新计算总页数
        calculateTotalPages();
        
        showMessage(`仪器 ${currentInstrumentId} 的有效期已更新为 ${expiryDate}。数据已自动保存。`, 'success');
        
        // 刷新表格和当前显示
        initTable();
        searchInstrument();
    }
}

// 取消修改
function cancelEdit() {
    if (currentInstrumentId) {
        const instrument = instrumentData.find(item => item.id === currentInstrumentId);
        if (instrument) {
            document.getElementById('expiryDate').value = instrument.expiry;
            document.getElementById('expiryNotes').value = instrument.notes || '';
        }
    }
    showMessage('已取消修改。', 'info');
}

// 显示消息
function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = `message message-${type}`;
    messageDiv.style.display = 'block';
    
    // 5秒后自动隐藏消息
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// ===== 数据导出导入功能 =====

// 导出数据
function exportData() {
    try {
        // 从本地存储获取完整数据
        const savedData = localStorage.getItem(STORAGE_KEY);
        let dataToExport;
        
        if (savedData) {
            // 使用本地存储的数据
            dataToExport = savedData;
        } else {
            // 如果没有本地存储数据，使用当前内存中的数据
            const dataToSave = {
                version: STORAGE_VERSION,
                data: instrumentData,
                lastUpdated: new Date().toISOString()
            };
            dataToExport = JSON.stringify(dataToSave, null, 2);
        }
        
        // 创建下载链接
        const blob = new Blob([dataToExport], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        
        // 生成文件名：仪器数据_当前时间.json
        const now = new Date();
        const dateStr = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日_${now.getHours()}时${now.getMinutes()}分`;
        a.download = `仪器数据_${dateStr}.json`;
        
        // 触发下载
        document.body.appendChild(a);
        a.click();
        
        // 清理
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
        
        showMessage('数据导出成功！文件已开始下载。', 'success');
        
    } catch (e) {
        console.error("导出数据时出错:", e);
        showMessage('导出数据时出错，请重试。', 'error');
    }
}

// 显示数据导入对话框
function showDataImportDialog() {
    // 重置导入数据
    importFileData = null;
    
    // 重置文件输入框
    const fileInput = document.getElementById('dataImportFile');
    fileInput.value = '';
    
    // 重置显示文本
    document.getElementById('dataImportFileInput').innerHTML = '<span>点击选择文件或拖放文件到这里</span><input type="file" id="dataImportFile" accept=".json" style="display: none;">';
    
    // 禁用确认按钮
    document.getElementById('dataImportConfirmBtn').disabled = true;
    
    // 显示对话框
    document.getElementById('dataImportDialogOverlay').classList.add('active');
    
    // 重新绑定文件输入事件
    setTimeout(() => {
        setupFileInputEvents();
    }, 100);
}

// 设置文件输入事件
function setupFileInputEvents() {
    const fileInputContainer = document.getElementById('dataImportFileInput');
    const fileInput = document.getElementById('dataImportFile');
    const confirmBtn = document.getElementById('dataImportConfirmBtn');
    
    // 点击容器触发文件选择
    fileInputContainer.addEventListener('click', function(e) {
        if (e.target.tagName !== 'INPUT') {
            fileInput.click();
        }
    });
    
    // 文件选择变化事件
    fileInput.addEventListener('change', function(e) {
        handleFileSelect(e.target.files[0]);
    });
    
    // 拖放事件
    fileInputContainer.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });
    
    fileInputContainer.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
    });
    
    fileInputContainer.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        
        if (e.dataTransfer.files.length) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    });
    
    // 处理文件选择
    function handleFileSelect(file) {
        if (!file) return;
        
        // 检查文件类型
        if (!file.name.toLowerCase().endsWith('.json')) {
            showMessage('请选择JSON格式的文件', 'error');
            return;
        }
        
        // 检查文件大小（限制10MB）
        if (file.size > 10 * 1024 * 1024) {
            showMessage('文件太大，请选择小于10MB的文件', 'error');
            return;
        }
        
        // 读取文件
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const fileContent = e.target.result;
                const parsedData = JSON.parse(fileContent);
                
                // 验证数据格式
                if (!validateImportData(parsedData)) {
                    showMessage('文件格式不正确，请选择从本系统导出的数据文件', 'error');
                    return;
                }
                
                // 保存导入数据
                importFileData = parsedData;
                
                // 更新显示文本
                fileInputContainer.innerHTML = `<span>已选择文件: <strong>${file.name}</strong> (${formatFileSize(file.size)})</span>`;
                
                // 启用确认按钮
                confirmBtn.disabled = false;
                
            } catch (e) {
                console.error("解析文件时出错:", e);
                showMessage('无法解析文件，请确保文件是有效的JSON格式', 'error');
            }
        };
        
        reader.onerror = function() {
            showMessage('读取文件时出错，请重试', 'error');
        };
        
        reader.readAsText(file);
    }
}

// 验证导入数据格式
function validateImportData(data) {
    // 检查基本结构
    if (!data || typeof data !== 'object') return false;
    
    // 检查版本
    if (!data.version || data.version !== STORAGE_VERSION) return false;
    
    // 检查数据字段
    if (!data.data || !Array.isArray(data.data)) return false;
    
    // 检查数据项格式
    if (data.data.length === 0) return false;
    
    const sampleItem = data.data[0];
    if (!sampleItem.id || !sampleItem.name || !sampleItem.spec || !sampleItem.expiry) {
        return false;
    }
    
    return true;
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// 关闭数据导入对话框
function closeDataImportDialog() {
    document.getElementById('dataImportDialogOverlay').classList.remove('active');
}

// 确认导入数据
function confirmDataImport() {
    if (!importFileData) {
        showMessage('请先选择要导入的文件', 'error');
        return;
    }
    
    // 显示确认提示
    if (!confirm('警告：导入数据将覆盖当前所有仪器数据，此操作不可撤销。\n\n确定要导入新数据吗？')) {
        return;
    }
    
    try {
        // 更新仪器数据
        instrumentData = importFileData.data;
        
        // 重新计算状态
        instrumentData.forEach((instrument, index) => {
            updateInstrumentStatus(index);
        });
        
        // 保存到本地存储
        saveDataToStorage();
        
        // 重置当前页码
        currentPage = 1;
        
        // 重新计算总页数
        calculateTotalPages();
        
        // 重新初始化表格
        initTable();
        
        // 关闭对话框
        closeDataImportDialog();
        
        // 显示成功消息
        showMessage(`成功导入 ${instrumentData.length} 台仪器的数据！`, 'success');
        
        // 清空查询结果
        document.getElementById('resultContent').innerHTML = '<div class="result-empty">数据已更新，请输入仪器管理编号进行查询</div>';
        
        // 清空选中的仪器
        selectedInstrumentIds = [];
        updateSelectedCount();
        
    } catch (e) {
        console.error("导入数据时出错:", e);
        showMessage('导入数据时出错，请重试', 'error');
    }
}

// ===== 仪器选择功能 =====

// 仪器选择功能
function toggleInstrumentSelection(checkbox) {
    const instrumentId = checkbox.getAttribute('data-id');
    const isChecked = checkbox.checked;
    
    if (isChecked) {
        // 如果未选中，添加到选中列表
        if (!selectedInstrumentIds.includes(instrumentId)) {
            selectedInstrumentIds.push(instrumentId);
        }
    } else {
        // 如果已选中，从选中列表移除
        const index = selectedInstrumentIds.indexOf(instrumentId);
        if (index !== -1) {
            selectedInstrumentIds.splice(index, 1);
        }
    }
    
    // 保存选中状态到本地存储
    saveSelectedInstruments();
    
    // 更新选中计数和按钮状态
    updateSelectedCount();
    
    // 更新全选复选框状态
    updateSelectAllCheckbox();
    
    // 如果当前在查询结果页面，更新查询结果中的勾选框状态
    updateSearchResultCheckboxes();
}

// 更新查询结果中的勾选框状态
function updateSearchResultCheckboxes() {
    const resultContent = document.getElementById('resultContent');
    
    // 更新单个仪器信息卡片中的勾选框
    const resultCheckbox = resultContent.querySelector('.result-checkbox');
    if (resultCheckbox) {
        const instrumentId = resultCheckbox.getAttribute('data-id');
        resultCheckbox.checked = selectedInstrumentIds.includes(instrumentId);
    }
    
    // 更新模糊查询结果列表中的勾选框
    const fuzzyCheckboxes = resultContent.querySelectorAll('.fuzzy-results-checkbox');
    fuzzyCheckboxes.forEach(checkbox => {
        const instrumentId = checkbox.getAttribute('data-id');
        checkbox.checked = selectedInstrumentIds.includes(instrumentId);
    });
}

// 更新选中计数
function updateSelectedCount() {
    const selectedCount = selectedInstrumentIds.length;
    const selectedCountElement = document.getElementById('selectedCount');
    const outboundBtn = document.getElementById('outboundBtn');
    const batchEditBtn = document.getElementById('batchEditBtn');
    
    if (selectedCount > 0) {
        selectedCountElement.textContent = selectedCount;
        selectedCountElement.style.display = 'inline-block';
        outboundBtn.disabled = false;
        
        // 只有在管理员模式下才启用批量编辑按钮
        if (isAdminMode) {
            batchEditBtn.disabled = false;
        }
    } else {
        selectedCountElement.style.display = 'none';
        outboundBtn.disabled = true;
        batchEditBtn.disabled = true;
    }
}

// 全选当前页
function selectAllCurrentPage() {
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    const isChecked = selectAllCheckbox.checked;
    
    // 计算当前页的数据范围
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, instrumentData.length);
    
    // 获取当前页的所有仪器ID
    const currentPageInstrumentIds = [];
    for (let i = startIndex; i < endIndex; i++) {
        currentPageInstrumentIds.push(instrumentData[i].id);
    }
    
    if (isChecked) {
        // 全选：添加当前页所有仪器到选中列表（避免重复）
        currentPageInstrumentIds.forEach(id => {
            if (!selectedInstrumentIds.includes(id)) {
                selectedInstrumentIds.push(id);
                
                // 检查是否勾选了特定仪器，如果是则弹出使用记录对话框
                if (["TE02-055", "TE02-033", "TE02-053"].includes(id)) {
                    showUsageRecordDialog(id);
                }
            }
        });
    } else {
        // 取消全选：从选中列表中移除当前页所有仪器
        selectedInstrumentIds = selectedInstrumentIds.filter(id => !currentPageInstrumentIds.includes(id));
    }
    
    // 保存选中状态到本地存储
    saveSelectedInstruments();
    
    // 更新表格中所有勾选框的状态
    const checkboxes = document.querySelectorAll('.instrument-checkbox');
    checkboxes.forEach(checkbox => {
        const instrumentId = checkbox.getAttribute('data-id');
        checkbox.checked = selectedInstrumentIds.includes(instrumentId);
    });
    
    // 更新选中计数和按钮状态
    updateSelectedCount();
    
    // 更新查询结果中的勾选框状态
    updateSearchResultCheckboxes();
}

// 更新全选复选框状态
function updateSelectAllCheckbox() {
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    
    // 计算当前页的数据范围
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, instrumentData.length);
    
    // 计算当前页的仪器数量
    const currentPageCount = endIndex - startIndex;
    if (currentPageCount === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.disabled = true;
        return;
    }
    
    selectAllCheckbox.disabled = false;
    
    // 获取当前页的所有仪器ID
    const currentPageInstrumentIds = [];
    for (let i = startIndex; i < endIndex; i++) {
        currentPageInstrumentIds.push(instrumentData[i].id);
    }
    
    // 检查当前页所有仪器是否都被选中
    const allSelected = currentPageInstrumentIds.every(id => selectedInstrumentIds.includes(id));
    selectAllCheckbox.checked = allSelected;
}

// ===== 编辑弹出窗口功能 =====

// 打开编辑弹出窗口
function openEditPopup(instrumentId, field = 'expiry') {
    const instrument = instrumentData.find(item => item.id === instrumentId);
    if (!instrument) {
        showMessage('未找到指定的仪器', 'error');
        return;
    }
    
    currentEditInstrumentId = instrumentId;
    
    // 填充表单数据
    document.getElementById('editInstrumentId').value = instrument.id;
    document.getElementById('editFactoryNo').value = instrument.factoryNo || '';
    document.getElementById('editLastCalibration').value = instrument.lastCalibration || '';
    document.getElementById('editExpiryDate').value = instrument.expiry;
    document.getElementById('editNotes').value = instrument.notes || '';
    
    // 根据编辑的字段设置标题
    const title = '编辑仪器信息';
    document.getElementById('editFormPopup').querySelector('.edit-form-title').innerHTML = `
        <span class="icon icon-edit"></span>
        ${title}
    `;
    
    // 显示弹出窗口和遮罩
    document.getElementById('editFormPopup').classList.add('active');
    document.getElementById('editOverlay').classList.add('active');
    
    // 根据字段自动聚焦到对应的输入框
    setTimeout(() => {
        if (field === 'factoryNo') {
            document.getElementById('editFactoryNo').focus();
        } else if (field === 'lastCalibration') {
            document.getElementById('editLastCalibration').focus();
        } else if (field === 'expiry') {
            document.getElementById('editExpiryDate').focus();
        }
    }, 100);
}

// 关闭编辑弹出窗口
function closeEditPopup() {
    document.getElementById('editFormPopup').classList.remove('active');
    document.getElementById('editOverlay').classList.remove('active');
    currentEditInstrumentId = null;
}

// 保存编辑
function saveEdit() {
    if (!currentEditInstrumentId) {
        showMessage('未找到正在编辑的仪器', 'error');
        return;
    }
    
    const factoryNo = document.getElementById('editFactoryNo').value;
    const lastCalibration = document.getElementById('editLastCalibration').value;
    const expiryDate = document.getElementById('editExpiryDate').value;
    const notes = document.getElementById('editNotes').value;
    
    // 验证有效期是否填写
    if (!expiryDate) {
        showMessage('请填写有效期', 'error');
        return;
    }
    
    // 更新仪器数据
    const instrumentIndex = instrumentData.findIndex(item => item.id === currentEditInstrumentId);
    if (instrumentIndex !== -1) {
        instrumentData[instrumentIndex].factoryNo = factoryNo;
        instrumentData[instrumentIndex].lastCalibration = lastCalibration;
        instrumentData[instrumentIndex].expiry = expiryDate;
        instrumentData[instrumentIndex].notes = notes;
        
        // 重新计算状态
        updateInstrumentStatus(instrumentIndex);
        
        // 自动保存到本地存储
        saveDataToStorage();
        
        // 刷新表格
        initTable();
        
        // 如果当前查询的是这个仪器，更新查询结果
        if (currentInstrumentId === currentEditInstrumentId) {
            searchInstrument();
        }
        
        // 关闭弹出窗口
        closeEditPopup();
        
        showMessage(`仪器 ${currentEditInstrumentId} 的信息已更新。数据已自动保存。`, 'success');
    }
}

// 更新仪器状态
function updateInstrumentStatus(index) {
    const today = new Date();
    const expiryDate = new Date(instrumentData[index].expiry);
    const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntilExpiry < 0) {
        instrumentData[index].status = 'expired';
    } else if (daysUntilExpiry <= 90) {
        instrumentData[index].status = 'expiring';
    } else {
        instrumentData[index].status = 'valid';
    }
}

// ===== 批量编辑功能 =====

// 打开批量编辑弹出窗口
function openBatchEditPopup() {
    if (selectedInstrumentIds.length === 0) {
        showMessage('请先选择要批量编辑的仪器', 'error');
        return;
    }
    
    // 更新批量编辑计数
    document.getElementById('batchEditCount').textContent = selectedInstrumentIds.length;
    
    // 显示批量编辑弹出窗口
    document.getElementById('batchEditPopup').classList.add('active');
    document.getElementById('batchEditOverlay').classList.add('active');
    
    // 清空输入框
    document.getElementById('batchFactoryNo').value = '';
    document.getElementById('batchLastCalibration').value = '';
    document.getElementById('batchExpiryDate').value = '';
}

// 关闭批量编辑弹出窗口
function closeBatchEditPopup() {
    document.getElementById('batchEditPopup').classList.remove('active');
    document.getElementById('batchEditOverlay').classList.remove('active');
}

// 批量保存编辑
function saveBatchEdit() {
    if (selectedInstrumentIds.length === 0) {
        showMessage('请先选择要批量编辑的仪器', 'error');
        return;
    }
    
    const factoryNo = document.getElementById('batchFactoryNo').value;
    const lastCalibration = document.getElementById('batchLastCalibration').value;
    const expiryDate = document.getElementById('batchExpiryDate').value;
    
    // 检查是否至少有一个字段被填写
    if (!factoryNo && !lastCalibration && !expiryDate) {
        showMessage('请至少填写一个字段', 'error');
        return;
    }
    
    // 批量更新选中的仪器
    let updatedCount = 0;
    selectedInstrumentIds.forEach(instrumentId => {
        const instrumentIndex = instrumentData.findIndex(item => item.id === instrumentId);
        if (instrumentIndex !== -1) {
            if (factoryNo) {
                instrumentData[instrumentIndex].factoryNo = factoryNo;
            }
            if (lastCalibration) {
                instrumentData[instrumentIndex].lastCalibration = lastCalibration;
            }
            if (expiryDate) {
                instrumentData[instrumentIndex].expiry = expiryDate;
            }
            
            // 重新计算状态
            updateInstrumentStatus(instrumentIndex);
            updatedCount++;
        }
    });
    
    // 自动保存到本地存储
    saveDataToStorage();
    
    // 刷新表格
    initTable();
    
    // 关闭弹出窗口
    closeBatchEditPopup();
    
    showMessage(`成功批量更新 ${updatedCount} 台仪器的信息。数据已自动保存。`, 'success');
}

// ===== 添加新仪器功能 =====

// 显示添加仪器对话框
function showAddInstrumentDialog() {
    // 设置默认日期（有效期默认为一年后）
    const today = new Date();
    const nextYear = new Date(today);
    nextYear.setFullYear(today.getFullYear() + 1);
    
    const todayStr = today.toISOString().split('T')[0];
    const nextYearStr = nextYear.toISOString().split('T')[0];
    
    // 清空输入框
    document.getElementById('addInstrumentId').value = '';
    document.getElementById('addInstrumentName').value = '';
    document.getElementById('addInstrumentSpec').value = '';
    document.getElementById('addInstrumentFactoryNo').value = '';
    document.getElementById('addInstrumentLastCalibration').value = todayStr;
    document.getElementById('addInstrumentExpiry').value = nextYearStr;
    document.getElementById('addInstrumentNotes').value = '';
    
    // 显示对话框
    document.getElementById('addInstrumentPopup').classList.add('active');
    document.getElementById('addInstrumentOverlay').classList.add('active');
    
    // 聚焦到管理编号输入框
    setTimeout(() => {
        document.getElementById('addInstrumentId').focus();
    }, 100);
}

// 关闭添加仪器对话框
function closeAddInstrumentDialog() {
    document.getElementById('addInstrumentPopup').classList.remove('active');
    document.getElementById('addInstrumentOverlay').classList.remove('active');
}

// 保存新仪器
function saveNewInstrument() {
    // 获取输入的值
    const id = document.getElementById('addInstrumentId').value.trim();
    const name = document.getElementById('addInstrumentName').value.trim();
    const spec = document.getElementById('addInstrumentSpec').value.trim();
    const factoryNo = document.getElementById('addInstrumentFactoryNo').value.trim();
    const lastCalibration = document.getElementById('addInstrumentLastCalibration').value;
    const expiry = document.getElementById('addInstrumentExpiry').value;
    const notes = document.getElementById('addInstrumentNotes').value.trim();
    
    // 验证必填字段
    if (!id) {
        showMessage('请输入仪器管理编号', 'error');
        document.getElementById('addInstrumentId').focus();
        return;
    }
    
    if (!name) {
        showMessage('请输入仪器名称', 'error');
        document.getElementById('addInstrumentName').focus();
        return;
    }
    
    if (!spec) {
        showMessage('请输入仪器型号规格', 'error');
        document.getElementById('addInstrumentSpec').focus();
        return;
    }
    
    if (!expiry) {
        showMessage('请选择有效期', 'error');
        document.getElementById('addInstrumentExpiry').focus();
        return;
    }
    
    // 检查管理编号是否已存在
    const existingInstrument = instrumentData.find(item => item.id === id);
    if (existingInstrument) {
        showMessage(`管理编号 "${id}" 已存在，请使用不同的编号`, 'error');
        document.getElementById('addInstrumentId').focus();
        return;
    }
    
    // 创建新仪器对象
    const newInstrument = {
        id: id,
        name: name,
        spec: spec,
        factoryNo: factoryNo || '/',
        lastCalibration: lastCalibration || '',
        expiry: expiry,
        notes: notes || '/'
    };
    
    // 计算状态
    const today = new Date();
    const expiryDate = new Date(expiry);
    const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntilExpiry < 0) {
        newInstrument.status = 'expired';
    } else if (daysUntilExpiry <= 90) {
        newInstrument.status = 'expiring';
    } else {
        newInstrument.status = 'valid';
    }
    
    // 添加到仪器数据数组
    instrumentData.push(newInstrument);
    
    // 按管理编号排序（可选）
    instrumentData.sort((a, b) => a.id.localeCompare(b.id));
    
    // 保存到本地存储
    saveDataToStorage();
    
    // 重新计算总页数
    calculateTotalPages();
    
    // 刷新表格
    initTable();
    
    // 关闭对话框
    closeAddInstrumentDialog();
    
    // 显示成功消息
    showMessage(`成功添加新仪器 "${id}"`, 'success');
    
    // 自动查询新添加的仪器
    document.getElementById('searchInput').value = id;
    searchInstrument();
}

// ===== 删除仪器功能 =====

// 删除选中仪器
function deleteSelectedInstruments() {
    if (selectedInstrumentIds.length === 0) {
        showMessage('请先选择要删除的仪器', 'error');
        return;
    }
    
    // 防止重复点击
    if (deleteConfirmationActive) return;
    deleteConfirmationActive = true;
    
    // 确认删除
    const confirmText = `确定要删除选中的 ${selectedInstrumentIds.length} 台仪器吗？\n\n此操作不可撤销！`;
    
    if (confirm(confirmText)) {
        // 从仪器数据中移除选中的仪器
        const originalCount = instrumentData.length;
        instrumentData = instrumentData.filter(instrument => 
            !selectedInstrumentIds.includes(instrument.id)
        );
        
        const deletedCount = originalCount - instrumentData.length;
        
        // 清空选中列表
        selectedInstrumentIds = [];
        saveSelectedInstruments();
        
        // 更新选中计数和按钮状态
        updateSelectedCount();
        
        // 重新计算总页数
        calculateTotalPages();
        
        // 刷新表格
        initTable();
        
        // 保存到本地存储
        saveDataToStorage();
        
        // 清空查询结果
        document.getElementById('resultContent').innerHTML = '<div class="result-empty">仪器已删除，请输入仪器管理编号进行查询</div>';
        
        // 显示成功消息
        showMessage(`成功删除 ${deletedCount} 台仪器`, 'success');
    }
    
    deleteConfirmationActive = false;
}

// ===== 出库功能 =====

// 显示出库对话框
function showOutboundDialog() {
    // 检查是否选中了仪器
    if (selectedInstrumentIds.length === 0) {
        showMessage('请先选择要出库的仪器', 'error');
        return;
    }
    
    // 设置默认日期为今天
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;
    
    // 设置输入框的默认值
    document.getElementById('outboundDate').value = todayStr;
    document.getElementById('outboundReceiver').value = '';
    document.getElementById('outboundManager').value = '';
    
    // 显示对话框
    document.getElementById('outboundDialogOverlay').classList.add('active');
    
    // 聚焦到第一个输入框
    setTimeout(() => {
        document.getElementById('outboundDate').focus();
    }, 100);
}

// 关闭出库对话框
function closeOutboundDialog() {
    document.getElementById('outboundDialogOverlay').classList.remove('active');
}

// 确认出库信息并跳转到H2页面
function confirmOutboundInfo() {
    // 获取用户输入的值
    const outboundDate = document.getElementById('outboundDate').value;
    const receiver = document.getElementById('outboundReceiver').value.trim();
    const manager = document.getElementById('outboundManager').value.trim();
    
    // 验证必填字段
    if (!outboundDate) {
        showMessage('请选择设备出库日期', 'error');
        document.getElementById('outboundDate').focus();
        return;
    }
    
    if (!receiver) {
        showMessage('请输入领取人姓名', 'error');
        document.getElementById('outboundReceiver').focus();
        return;
    }
    
    // 保存出库信息
    inventoryData.outboundInfo.date = outboundDate;
    inventoryData.outboundInfo.receiver = receiver;
    inventoryData.outboundInfo.manager = manager;
    
    // 保存合同编号和项目名称
    inventoryData.contractNo = document.getElementById('contractNoPrint').value || '';
    inventoryData.projectName = document.getElementById('projectNamePrint').value || '';
    
    // 保存选中的仪器
    inventoryData.instruments = instrumentData.filter(instrument => 
        selectedInstrumentIds.includes(instrument.id)
    );
    
    // 保存生成时间
    const now = new Date();
    inventoryData.generateTime = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 ${now.getHours()}时${now.getMinutes()}分`;
    
    // 保存出入库数据到本地存储
    saveInventoryData();
    
    // 关闭对话框
    closeOutboundDialog();
    
    // 跳转到H2页面
    showInventoryPage();
}

// ===== 入库功能 =====

// 点击入库按钮直接跳转到H2页面
function showInboundPage() {
    // 显示仪器出入库页面
    const inventoryPage = document.getElementById('inventoryPage');
    inventoryPage.classList.add('active');
    
    // 隐藏主页面
    document.getElementById('mainContainer').style.display = 'none';
    
    // 清空出入库页面中的输入框
    document.getElementById('contractNoPrint').value = '';
    document.getElementById('projectNamePrint').value = '';
    
    // 生成出入库内容（如果没有数据则生成空表格）
    if (inventoryData.instruments.length > 0) {
        generateInventoryContent(inventoryData.instruments);
    } else {
        // 如果没有数据，生成空表格
        generateEmptyInventoryContent();
    }
    
    // 更新生成时间
    const now = new Date();
    const generateTimeStr = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 ${now.getHours()}时${now.getMinutes()}分`;
    document.getElementById('inventoryGenerateTime').textContent = generateTimeStr;
}

// 生成空出入库内容
function generateEmptyInventoryContent() {
    // 计算需要多少页（每页9台仪器）
    const itemsPerPage = 9;
    const totalItems = 0;
    const totalPages = 1;
    
    // 生成打印表格容器
    const tableContainer = document.getElementById('inventoryTableContainer');
    tableContainer.innerHTML = '';
    
    // 创建完整打印页面
    const printPage = document.createElement('div');
    printPage.className = 'print-full-page';
    
    // 添加页码信息（仅在打印时显示）
    const pageInfo = document.createElement('div');
    pageInfo.className = 'page-number-info no-print';
    pageInfo.textContent = `第 1 页/共 1 页`;
    printPage.appendChild(pageInfo);
    
    // 创建页面标题区域
    const pageHeader = document.createElement('div');
    pageHeader.className = 'print-page-header';
    pageHeader.innerHTML = `
        <h1 class="print-page-title">现场仪器设备出入库登记台帐</h1>
        <div class="print-contract-info">
            <div class="print-contract-left">
                <div><strong>委托/合同编号：</strong>${inventoryData.contractNo || ''}</div>
                <div><strong>项目名称：</strong>${inventoryData.projectName || ''}</div>
            </div>
            <div class="print-contract-right">
                FJYET-BG-2214A/0
            </div>
        </div>
    `;
    printPage.appendChild(pageHeader);
    
    // 创建表格容器
    const tableContainerDiv = document.createElement('div');
    tableContainerDiv.className = 'print-table-container';
    
    // 创建表格
    const table = document.createElement('table');
    table.className = 'inventory-table';
    
    // 生成表头
    table.innerHTML = `
        <thead>
            <tr>
                <th rowspan="2">序号</th>
                <th colspan="3">设备信息</th>
                <th colspan="5">设备出库</th>
                <th colspan="5">设备入库</th>
            </tr>
            <tr>
                <th>设备名称及型号规格</th>
                <th>管理编号</th>
                <th>领用数量</th>
                <th>日期</th>
                <th>状态</th>
                <th>领取人</th>
                <th>管理员</th>
                <th>备注</th>
                <th>日期</th>
                <th>状态</th>
                <th>归还人</th>
                <th>管理员</th>
                <th>备注</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    // 添加9行空数据
    for (let i = 0; i < 9; i++) {
        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td contenteditable="true" class="editable-cell"></td>
                <td contenteditable="true" class="editable-cell"></td>
                <td contenteditable="true" class="editable-cell"></td>
                <td contenteditable="true" class="editable-cell"></td>
                <td contenteditable="true" class="editable-cell"></td>
                <td contenteditable="true" class="editable-cell"></td>
                <td contenteditable="true" class="editable-cell"></td>
                <td contenteditable="true" class="editable-cell"></td>
                <td contenteditable="true" class="editable-cell"></td>
                <td contenteditable="true" class="editable-cell"></td>
                <td contenteditable="true" class="editable-cell"></td>
                <td contenteditable="true" class="editable-cell"></td>
                <td contenteditable="true" class="editable-cell"></td>
            </tr>
        `;
    }
    
    // 添加说明行
    table.innerHTML += `
        <tr class="print-instruction-row">
            <td colspan="14" class="print-instruction-cell">
                说明：本表中"状态"栏，正常时记录"正常"，不正常时应作必要的文字描述。
            </td>
        </tr>
    `;
    
    table.innerHTML += `</tbody>`;
    
    // 将表格添加到表格容器
    tableContainerDiv.appendChild(table);
    
    // 将表格容器添加到打印页
    printPage.appendChild(tableContainerDiv);
    
    // 将打印页添加到容器
    tableContainer.appendChild(printPage);
    
    // 添加表格后，为可编辑单元格添加样式
    setTimeout(() => {
        const editableCells = document.querySelectorAll('.editable-cell');
        editableCells.forEach(cell => {
            cell.addEventListener('focus', function() {
                this.style.backgroundColor = '#f0f7ff';
            });
            
            cell.addEventListener('blur', function() {
                this.style.backgroundColor = '';
            });
        });
    }, 100);
}

// ===== 入库对话框功能 =====

// 显示入库对话框
function showInboundDialog() {
    // 检查是否有出入库数据
    if (inventoryData.instruments.length === 0) {
        showMessage('请先出库仪器或导入出库数据', 'error');
        return;
    }
    
    // 设置默认日期为今天
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;
    
    // 设置输入框的默认值
    document.getElementById('inboundDate').value = todayStr;
    document.getElementById('inboundStatus').value = '正常';
    document.getElementById('inboundReturner').value = '';
    document.getElementById('inboundManager').value = '';
    
    // 显示对话框
    document.getElementById('inboundDialogOverlay').classList.add('active');
    
    // 聚焦到第一个输入框
    setTimeout(() => {
        document.getElementById('inboundDate').focus();
    }, 100);
}

// 关闭入库对话框
function closeInboundDialog() {
    document.getElementById('inboundDialogOverlay').classList.remove('active');
}

// 确认入库信息并更新表格
function confirmInboundInfo() {
    // 获取用户输入的值
    const inboundDate = document.getElementById('inboundDate').value;
    const status = document.getElementById('inboundStatus').value;
    const returner = document.getElementById('inboundReturner').value.trim();
    const manager = document.getElementById('inboundManager').value.trim();
    
    // 验证必填字段
    if (!inboundDate) {
        showMessage('请选择设备入库时间', 'error');
        document.getElementById('inboundDate').focus();
        return;
    }
    
    if (!returner) {
        showMessage('请输入归还人姓名', 'error');
        document.getElementById('inboundReturner').focus();
        return;
    }
    
    // 保存入库信息
    inventoryData.inboundInfo.date = inboundDate;
    inventoryData.inboundInfo.status = status;
    inventoryData.inboundInfo.returner = returner;
    inventoryData.inboundInfo.manager = manager;
    
    // 保存出入库数据到本地存储
    saveInventoryData();
    
    // 关闭对话框
    closeInboundDialog();
    
    // 更新表格中的入库信息
    updateInventoryTableWithInboundInfo();
    
    // 开始打印
    printInventory();
}

// 更新表格中的入库信息
function updateInventoryTableWithInboundInfo() {
    // 获取表格容器
    const tableContainer = document.getElementById('inventoryTableContainer');
    
    // 如果表格容器存在，更新入库信息
    if (tableContainer) {
        // 获取所有行
        const rows = tableContainer.querySelectorAll('tbody tr');
        
        // 格式化入库日期
        const inboundDate = new Date(inventoryData.inboundInfo.date);
        const inboundDateFormatted = `${inboundDate.getFullYear()}年${inboundDate.getMonth()+1}月${inboundDate.getDate()}日`;
        
        // 更新每一行的入库信息（跳过说明行）
        rows.forEach((row, index) => {
            // 跳过空行和说明行
            if (index >= inventoryData.instruments.length) return;
            if (row.classList.contains('print-instruction-row')) return;
            
            // 更新入库信息列（第10-14列）
            const cells = row.querySelectorAll('td');
            if (cells.length >= 14) {
                // 入库日期（第10列）
                cells[9].textContent = inboundDateFormatted;
                // 入库状态（第11列）
                cells[10].textContent = inventoryData.inboundInfo.status;
                // 归还人（第12列）
                cells[11].textContent = inventoryData.inboundInfo.returner;
                // 管理员（第13列）
                cells[12].textContent = inventoryData.inboundInfo.manager || '';
                // 备注（第14列）保持为空或可编辑
            }
        });
        
        showMessage('入库信息已更新到表格中', 'success');
    }
}

// ===== H2页面导出导入功能 =====

// 导出出入库数据
function exportInventoryData() {
    try {
        // 从本地存储获取出入库数据
        const savedInventory = localStorage.getItem(INVENTORY_DATA_KEY);
        let dataToExport;
        
        if (savedInventory) {
            // 使用本地存储的数据
            dataToExport = savedInventory;
        } else {
            // 如果没有本地存储数据，使用当前内存中的数据
            dataToExport = JSON.stringify(inventoryData, null, 2);
        }
        
        // 创建下载链接
        const blob = new Blob([dataToExport], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        
        // 生成文件名：出入库数据_当前时间.json
        const now = new Date();
        const dateStr = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日_${now.getHours()}时${now.getMinutes()}分`;
        a.download = `出入库数据_${dateStr}.json`;
        
        // 触发下载
        document.body.appendChild(a);
        a.click();
        
        // 清理
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
        
        showMessage('出入库数据导出成功！文件已开始下载。', 'success');
        
    } catch (e) {
        console.error("导出出入库数据时出错:", e);
        showMessage('导出出入库数据时出错，请重试。', 'error');
    }
}

// 导入出入库数据
function importInventoryData() {
    // 创建文件输入元素
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        // 检查文件类型
        if (!file.name.toLowerCase().endsWith('.json')) {
            showMessage('请选择JSON格式的文件', 'error');
            return;
        }
        
        // 读取文件
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const fileContent = e.target.result;
                const parsedData = JSON.parse(fileContent);
                
                // 验证数据格式
                if (!parsedData || typeof parsedData !== 'object') {
                    showMessage('文件格式不正确', 'error');
                    return;
                }
                
                // 显示确认提示
                if (!confirm('确定要导入出入库数据吗？这将覆盖当前的出入库数据。')) {
                    return;
                }
                
                // 更新出入库数据
                inventoryData = parsedData;
                
                // 保存到本地存储
                saveInventoryData();
                
                // 更新页面上的合同编号和项目名称
                document.getElementById('contractNoPrint').value = inventoryData.contractNo || '';
                document.getElementById('projectNamePrint').value = inventoryData.projectName || '';
                
                // 重新生成表格
                generateInventoryContent(inventoryData.instruments);
                
                // 显示成功消息
                showMessage('出入库数据导入成功！', 'success');
                
            } catch (e) {
                console.error("解析文件时出错:", e);
                showMessage('无法解析文件，请确保文件是有效的JSON格式', 'error');
            }
        };
        
        reader.onerror = function() {
            showMessage('读取文件时出错，请重试', 'error');
        };
        
        reader.readAsText(file);
    });
    
    // 触发文件选择
    fileInput.click();
}

// ===== 使用记录功能 =====

// 显示使用记录对话框
function showUsageRecordDialog(instrumentId) {
    currentUsageInstrumentId = instrumentId;
    
    // 获取仪器信息
    const instrument = instrumentData.find(item => item.id === instrumentId);
    if (!instrument) {
        showMessage('未找到指定的仪器', 'error');
        return;
    }
    
    // 设置对话框标题
    document.getElementById('usageRecordInstrumentId').textContent = instrumentId;
    
    // 设置默认日期为今天
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;
    
    // 清空输入框
    document.getElementById('usageRecordDate').value = todayStr;
    document.getElementById('usageRecordPreStatus').value = '';
    document.getElementById('usageRecordDuringStatus').value = '';
    document.getElementById('usageRecordPerson').value = '';
    document.getElementById('usageRecordSample').value = '';
    
    // 显示对话框
    document.getElementById('usageRecordOverlay').classList.add('active');
    
    // 聚焦到第一个输入框
    setTimeout(() => {
        document.getElementById('usageRecordPreStatus').focus();
    }, 100);
}

// 关闭使用记录对话框
function closeUsageRecordDialog() {
    document.getElementById('usageRecordOverlay').classList.remove('active');
    currentUsageInstrumentId = null;
}

// 保存使用记录
function saveUsageRecord() {
    if (!currentUsageInstrumentId) {
        showMessage('未找到正在记录的仪器', 'error');
        return;
    }
    
    // 获取输入的值
    const usageDate = document.getElementById('usageRecordDate').value;
    const preStatus = document.getElementById('usageRecordPreStatus').value.trim();
    const duringStatus = document.getElementById('usageRecordDuringStatus').value.trim();
    const person = document.getElementById('usageRecordPerson').value.trim();
    const sample = document.getElementById('usageRecordSample').value.trim();
    
    // 验证必填字段
    if (!usageDate) {
        showMessage('请选择使用日期', 'error');
        document.getElementById('usageRecordDate').focus();
        return;
    }
    
    if (!preStatus) {
        showMessage('请输入使用前工作状态', 'error');
        document.getElementById('usageRecordPreStatus').focus();
        return;
    }
    
    if (!duringStatus) {
        showMessage('请输入使用时工作状态', 'error');
        document.getElementById('usageRecordDuringStatus').focus();
        return;
    }
    
    if (!person) {
        showMessage('请输入使用人员', 'error');
        document.getElementById('usageRecordPerson').focus();
        return;
    }
    
    if (!sample) {
        showMessage('请输入样品编号/项目名称', 'error');
        document.getElementById('usageRecordSample').focus();
        return;
    }
    
    // 格式化日期
    const dateObj = new Date(usageDate);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const formattedDate = `${month}月${day}日`;
    
    // 创建使用记录对象
    const usageRecord = {
        date: usageDate,
        formattedDate: formattedDate,
        preStatus: preStatus,
        duringStatus: duringStatus,
        person: person,
        sample: sample,
        recordTime: new Date().toISOString()
    };
    
    // 添加到使用记录数组
    if (!usageRecords[currentUsageInstrumentId]) {
        usageRecords[currentUsageInstrumentId] = [];
    }
    
    usageRecords[currentUsageInstrumentId].push(usageRecord);
    
    // 保存到本地存储
    saveUsageRecords();
    
    // 关闭对话框
    closeUsageRecordDialog();
    
    // 显示成功消息
    showMessage(`已成功记录仪器 ${currentUsageInstrumentId} 的使用情况`, 'success');
    
    // 如果当前正在查看对应仪器的使用表，刷新表格
    const activeUsagePage = document.querySelector('.usage-page.active');
    if (activeUsagePage) {
        const instrumentIdFromPage = activeUsagePage.id.replace('usagePage', '');
        if (instrumentIdFromPage === currentUsageInstrumentId.replace('TE02-', '')) {
            generateUsageTable(currentUsageInstrumentId);
        }
    }
}

// ===== 使用表编辑功能 =====

// 切换使用表编辑模式
function toggleUsageEditMode(instrumentId) {
    const instrumentKey = instrumentId;
    const shortId = instrumentId.replace('TE02-', '');
    const editBtn = document.getElementById(`editUsage${shortId}Btn`);
    
    // 切换编辑模式状态
    editMode[instrumentKey] = !editMode[instrumentKey];
    
    // 更新按钮状态
    if (editMode[instrumentKey]) {
        editBtn.innerHTML = '<span class="icon icon-save"></span> 完成编辑';
        editBtn.classList.add('editing');
    } else {
        editBtn.innerHTML = '<span class="icon icon-edit"></span> 编辑使用记录';
        editBtn.classList.remove('editing');
    }
    
    // 重新生成表格，根据编辑模式状态添加删除按钮
    generateUsageTable(instrumentId);
}

// 删除使用记录
function deleteUsageRecord(instrumentId, recordIndex) {
    // 确认删除
    if (!confirm('确定要删除这条使用记录吗？')) {
        return;
    }
    
    // 从使用记录中删除
    if (usageRecords[instrumentId] && usageRecords[instrumentId][recordIndex]) {
        usageRecords[instrumentId].splice(recordIndex, 1);
        
        // 保存到本地存储
        saveUsageRecords();
        
        // 重新生成表格
        generateUsageTable(instrumentId);
        
        // 显示成功消息
        showMessage('使用记录已删除', 'success');
    }
}

// 生成使用记录表格
function generateUsageTable(instrumentId) {
    const containerId = `usageTableContainer${instrumentId.replace('TE02-', '')}`;
    const container = document.getElementById(containerId);
    const yearInputId = `year${instrumentId.replace('TE02-', '')}`;
    const year = document.getElementById(yearInputId) ? parseInt(document.getElementById(yearInputId).value) : new Date().getFullYear();
    
    if (!container) return;
    
    // 获取该仪器的使用记录
    const records = usageRecords[instrumentId] || [];
    
    // 按日期排序（最新的在前面）
    const sortedRecords = [...records].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // 检查是否处于编辑模式
    const isEditMode = editMode[instrumentId];
    
    // 创建表格
    let tableHtml = `
        <table class="usage-table">
            <thead>
                <tr>
                    <th rowspan="2">序号</th>
                    <th rowspan="2">使用日期</th>
                    <th colspan="2">工作状态</th>
                    <th rowspan="2">使用人员</th>
                    <th rowspan="2">样品编号（即项目名称）</th>
                    <th rowspan="2">备注</th>
                    ${isEditMode ? '<th rowspan="2">操作</th>' : ''}
                </tr>
                <tr>
                    <th>使用前</th>
                    <th>使用时</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    // 添加14行数据
    for (let i = 0; i < 14; i++) {
        if (i < sortedRecords.length) {
            const record = sortedRecords[i];
            tableHtml += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${record.formattedDate}</td>
                    <td>${record.preStatus}</td>
                    <td>${record.duringStatus}</td>
                    <td>${record.person}</td>
                    <td>${record.sample}</td>
                    <td></td>
                    ${isEditMode ? `<td><button class="delete-btn" onclick="deleteUsageRecord('${instrumentId}', ${i})"><span class="icon icon-delete"></span>删除</button></td>` : ''}
                </tr>
            `;
        } else {
            tableHtml += `
                <tr>
                    <td>${i + 1}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    ${isEditMode ? '<td></td>' : ''}
                </tr>
            `;
        }
    }
    
    tableHtml += `
            </tbody>
        </table>
    `;
    
    container.innerHTML = tableHtml;
    
    // 更新生成时间
    const generateTimeId = `usageGenerateTime${instrumentId.replace('TE02-', '')}`;
    const generateTimeElement = document.getElementById(generateTimeId);
    if (generateTimeElement) {
        const now = new Date();
        const generateTimeStr = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 ${now.getHours()}时${now.getMinutes()}分`;
        generateTimeElement.textContent = generateTimeStr;
    }
}

// 显示使用表页面
function showUsagePage(instrumentId) {
    // 隐藏主页面
    document.getElementById('mainContainer').style.display = 'none';
    
    // 显示对应的使用表页面
    const usagePageId = `usagePage${instrumentId.replace('TE02-', '')}`;
    const usagePage = document.getElementById(usagePageId);
    if (usagePage) {
        usagePage.classList.add('active');
        
        // 生成使用记录表格
        generateUsageTable(instrumentId);
    }
}

// 返回主页面
function backToMainPage() {
    // 隐藏所有使用表页面
    const usagePages = document.querySelectorAll('.usage-page');
    usagePages.forEach(page => {
        page.classList.remove('active');
    });
    
    // 隐藏出入库页面
    const inventoryPage = document.getElementById('inventoryPage');
    inventoryPage.classList.remove('active');
    
    // 显示主页面
    document.getElementById('mainContainer').style.display = 'block';
}

// ===== 出入库台账功能 =====

// 显示仪器出入库页面
function showInventoryPage() {
    // 获取选中的仪器
    const selectedInstruments = inventoryData.instruments.length > 0 ? 
        inventoryData.instruments : 
        instrumentData.filter(instrument => selectedInstrumentIds.includes(instrument.id));
    
    if (selectedInstruments.length === 0) {
        showMessage('请先选择要生成出入库的仪器', 'error');
        return;
    }
    
    // 显示仪器出入库页面
    const inventoryPage = document.getElementById('inventoryPage');
    inventoryPage.classList.add('active');
    
    // 隐藏主页面
    document.getElementById('mainContainer').style.display = 'none';
    
    // 更新合同编号和项目名称输入框的值
    document.getElementById('contractNoPrint').value = inventoryData.contractNo || '';
    document.getElementById('projectNamePrint').value = inventoryData.projectName || '';
    
    // 生成出入库内容
    generateInventoryContent(selectedInstruments);
    
    // 更新生成时间
    const now = new Date();
    const generateTimeStr = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 ${now.getHours()}时${now.getMinutes()}分`;
    document.getElementById('inventoryGenerateTime').textContent = generateTimeStr;
}

// 生成仪器出入库内容 - 每页9行，每页都有完整表头
function generateInventoryContent(selectedInstruments) {
    // 获取委托/合同编号和项目名称
    const contractNo = inventoryData.contractNo || '';
    const projectName = inventoryData.projectName || '';
    
    // 格式化出库日期
    let outboundDateFormatted = '';
    if (inventoryData.outboundInfo.date) {
        const outboundDate = new Date(inventoryData.outboundInfo.date);
        outboundDateFormatted = `${outboundDate.getFullYear()}年${outboundDate.getMonth()+1}月${outboundDate.getDate()}日`;
    }
    
    // 计算需要多少页（每页9台仪器）
    const itemsPerPage = 9;
    const totalItems = selectedInstruments.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    // 生成打印表格容器
    const tableContainer = document.getElementById('inventoryTableContainer');
    tableContainer.innerHTML = '';
    
    // 为每一页生成完整页面
    for (let page = 1; page <= totalPages; page++) {
        // 计算当前页的仪器范围
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
        const currentPageInstruments = selectedInstruments.slice(startIndex, endIndex);
        
        // 创建完整打印页面
        const printPage = document.createElement('div');
        printPage.className = 'print-full-page';
        
        // 添加页码信息（仅在打印时显示）
        const pageInfo = document.createElement('div');
        pageInfo.className = 'page-number-info no-print';
        pageInfo.textContent = `第 ${page} 页/共 ${totalPages} 页`;
        printPage.appendChild(pageInfo);
        
        // 创建页面标题区域
        const pageHeader = document.createElement('div');
        pageHeader.className = 'print-page-header';
        pageHeader.innerHTML = `
            <h1 class="print-page-title">现场仪器设备出入库登记台帐</h1>
            <div class="print-contract-info">
                <div class="print-contract-left">
                    <div><strong>委托/合同编号：</strong>${contractNo || ''}</div>
                    <div><strong>项目名称：</strong>${projectName || ''}</div>
                </div>
                <div class="print-contract-right">
                    FJYET-BG-2214A/0
                </div>
            </div>
        `;
        printPage.appendChild(pageHeader);
        
        // 创建表格容器
        const tableContainerDiv = document.createElement('div');
        tableContainerDiv.className = 'print-table-container';
        
        // 创建表格
        const table = document.createElement('table');
        table.className = 'inventory-table';
        
        // 生成表头
        table.innerHTML = `
            <thead>
                <tr>
                    <th rowspan="2">序号</th>
                    <th colspan="3">设备信息</th>
                    <th colspan="5">设备出库</th>
                    <th colspan="5">设备入库</th>
                </tr>
                <tr>
                    <th>设备名称及型号规格</th>
                    <th>管理编号</th>
                    <th>领用数量</th>
                    <th>日期</th>
                    <th>状态</th>
                    <th>领取人</th>
                    <th>管理员</th>
                    <th>备注</th>
                    <th>日期</th>
                    <th>状态</th>
                    <th>归还人</th>
                    <th>管理员</th>
                    <th>备注</th>
                </tr>
            </thead>
            <tbody>
        `;
        
        // 添加仪器行（当前页的9台仪器）
        currentPageInstruments.forEach((instrument, index) => {
            const rowIndex = startIndex + index + 1;
            // 将仪器名称和型号规格合并
            const equipmentInfo = `${instrument.name} ${instrument.spec}`;
            
            // 使用出库信息
            const deviceStatus = '正常';
            
            table.innerHTML += `
                <tr>
                    <td>${rowIndex}</td>
                    <td contenteditable="true" class="editable-cell">${equipmentInfo}</td>
                    <td contenteditable="true" class="editable-cell">${instrument.id}</td>
                    <td contenteditable="true" class="editable-cell">1</td>
                    <td contenteditable="true" class="editable-cell">${outboundDateFormatted}</td>
                    <td contenteditable="true" class="editable-cell">${deviceStatus}</td>
                    <td contenteditable="true" class="editable-cell">${inventoryData.outboundInfo.receiver || ''}</td>
                    <td contenteditable="true" class="editable-cell">${inventoryData.outboundInfo.manager || ''}</td>
                    <td contenteditable="true" class="editable-cell"></td>
                    <td contenteditable="true" class="editable-cell"></td>
                    <td contenteditable="true" class="editable-cell"></td>
                    <td contenteditable="true" class="editable-cell"></td>
                    <td contenteditable="true" class="editable-cell"></td>
                    <td contenteditable="true" class="editable-cell"></td>
                </tr>
            `;
        });
        
        // 如果当前页不足9行，用空行补齐
        const emptyRows = itemsPerPage - currentPageInstruments.length;
        for (let i = 0; i < emptyRows; i++) {
            table.innerHTML += `
                <tr class="empty-row">
                    <td></td>
                    <td class="editable-cell"></td>
                    <td class="editable-cell"></td>
                    <td class="editable-cell"></td>
                    <td class="editable-cell"></td>
                    <td class="editable-cell"></td>
                    <td class="editable-cell"></td>
                    <td class="editable-cell"></td>
                    <td class="editable-cell"></td>
                    <td class="editable-cell"></td>
                    <td class="editable-cell"></td>
                    <td class="editable-cell"></td>
                    <td class="editable-cell"></td>
                    <td class="editable-cell"></td>
                </tr>
            `;
        }
        
        // 添加说明行
        table.innerHTML += `
            <tr class="print-instruction-row">
                <td colspan="14" class="print-instruction-cell">
                    说明：本表中"状态"栏，正常时记录"正常"，不正常时应作必要的文字描述。
                </td>
            </tr>
        `;
        
        table.innerHTML += `</tbody>`;
        
        // 将表格添加到表格容器
        tableContainerDiv.appendChild(table);
        
        // 将表格容器添加到打印页
        printPage.appendChild(tableContainerDiv);
        
        // 将打印页添加到容器
        tableContainer.appendChild(printPage);
        
        // 如果不是最后一页，添加分页提示（仅在打印预览中可见）
        if (page < totalPages) {
            const pageBreakHint = document.createElement('div');
            pageBreakHint.className = 'page-break-hint no-print';
            pageBreakHint.style.cssText = 'text-align: center; color: #999; margin: 20px 0; font-size: 12px;';
            pageBreakHint.textContent = '--- 下一页 ---';
            tableContainer.appendChild(pageBreakHint);
        }
    }
    
    // 添加表格后，为可编辑单元格添加样式
    setTimeout(() => {
        const editableCells = document.querySelectorAll('.editable-cell');
        editableCells.forEach(cell => {
            cell.addEventListener('focus', function() {
                this.style.backgroundColor = '#f0f7ff';
            });
            
            cell.addEventListener('blur', function() {
                this.style.backgroundColor = '';
            });
        });
    }, 100);
}

// 打印仪器出入库台账 - 每页都有完整表头，使用用户设置的出库和入库信息
function printInventory() {
    // 获取选中的仪器
    const selectedInstruments = inventoryData.instruments.length > 0 ? 
        inventoryData.instruments : 
        instrumentData.filter(instrument => selectedInstrumentIds.includes(instrument.id));
    
    if (selectedInstruments.length === 0) {
        showMessage('请先选择要打印的仪器', 'error');
        return;
    }
    
    // 获取委托/合同编号和项目名称
    const contractNo = document.getElementById('contractNoPrint').value || '';
    const projectName = document.getElementById('projectNamePrint').value || '';
    
    // 格式化出库日期
    let outboundDateFormatted = '';
    if (inventoryData.outboundInfo.date) {
        const outboundDate = new Date(inventoryData.outboundInfo.date);
        outboundDateFormatted = `${outboundDate.getFullYear()}年${outboundDate.getMonth()+1}月${outboundDate.getDate()}日`;
    }
    
    // 格式化入库日期
    let inboundDateFormatted = '';
    if (inventoryData.inboundInfo.date) {
        const inboundDate = new Date(inventoryData.inboundInfo.date);
        inboundDateFormatted = `${inboundDate.getFullYear()}年${inboundDate.getMonth()+1}月${inboundDate.getDate()}日`;
    }
    
    // 计算需要多少页（每页9台仪器）
    const itemsPerPage = 9;
    const totalItems = selectedInstruments.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    // 保存原始内容
    const originalContainer = document.getElementById('inventoryTableContainer');
    const originalTitle = document.querySelector('.inventory-title-section').innerHTML;
    const originalForm = document.querySelector('.inventory-form-section').innerHTML;
    window.originalTableContent = originalContainer.innerHTML;
    window.originalTitleContent = originalTitle;
    window.originalFormContent = originalForm;
    
    // 清空容器并重新生成打印优化的完整页面
    originalContainer.innerHTML = '';
    
    // 为每一页生成完整页面
    for (let page = 1; page <= totalPages; page++) {
        // 计算当前页的仪器范围
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
        const currentPageInstruments = selectedInstruments.slice(startIndex, endIndex);
        
        // 创建完整打印页面
        const printPage = document.createElement('div');
        printPage.className = 'print-full-page';
        
        // 创建页面标题区域
        const pageHeader = document.createElement('div');
        pageHeader.className = 'print-page-header';
        pageHeader.innerHTML = `
            <h1 class="print-page-title">现场仪器设备出入库登记台帐</h1>
            <div class="print-contract-info">
                <div class="print-contract-left">
                    <div><strong>委托/合同编号：</strong>${contractNo || ''}</div>
                    <div><strong>项目名称：</strong>${projectName || ''}</div>
                </div>
                <div class="print-contract-right">
                    FJYET-BG-2214A/0
                </div>
            </div>
        `;
        printPage.appendChild(pageHeader);
        
        // 创建表格容器
        const tableContainerDiv = document.createElement('div');
        tableContainerDiv.className = 'print-table-container';
        
        // 创建表格
        const table = document.createElement('table');
        table.className = 'inventory-table';
        
        // 生成表头
        table.innerHTML = `
            <thead>
                <tr>
                    <th rowspan="2">序号</th>
                    <th colspan="3">设备信息</th>
                    <th colspan="5">设备出库</th>
                    <th colspan="5">设备入库</th>
                </tr>
                <tr>
                    <th>设备名称及型号规格</th>
                    <th>管理编号</th>
                    <th>领用数量</th>
                    <th>日期</th>
                    <th>状态</th>
                    <th>领取人</th>
                    <th>管理员</th>
                    <th>备注</th>
                    <th>日期</th>
                    <th>状态</th>
                    <th>归还人</th>
                    <th>管理员</th>
                    <th>备注</th>
                </tr>
            </thead>
            <tbody>
        `;
        
        // 添加仪器行（当前页的9台仪器）
        currentPageInstruments.forEach((instrument, index) => {
            const rowIndex = startIndex + index + 1;
            // 将仪器名称和型号规格合并
            const equipmentInfo = `${instrument.name} ${instrument.spec}`;
            
            table.innerHTML += `
                <tr>
                    <td>${rowIndex}</td>
                    <td>${equipmentInfo}</td>
                    <td>${instrument.id}</td>
                    <td>1</td>
                    <td>${outboundDateFormatted}</td>
                    <td>正常</td>
                    <td>${inventoryData.outboundInfo.receiver || ''}</td>
                    <td>${inventoryData.outboundInfo.manager || ''}</td>
                    <td></td>
                    <td>${inboundDateFormatted}</td>
                    <td>${inventoryData.inboundInfo.status || '正常'}</td>
                    <td>${inventoryData.inboundInfo.returner || ''}</td>
                    <td>${inventoryData.inboundInfo.manager || ''}</td>
                    <td></td>
                </tr>
            `;
        });
        
        // 如果当前页不足9行，用空行补齐
        const emptyRows = itemsPerPage - currentPageInstruments.length;
        for (let i = 0; i < emptyRows; i++) {
            table.innerHTML += `
                <tr class="empty-row">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            `;
        }
        
        // 添加说明行
        table.innerHTML += `
            <tr class="print-instruction-row">
                <td colspan="14" class="print-instruction-cell">
                    说明：本表中"状态"栏，正常时记录"正常"，不正常时应作必要的文字描述。
                </td>
            </tr>
        `;
        
        table.innerHTML += `</tbody>`;
        
        // 将表格添加到表格容器
        tableContainerDiv.appendChild(table);
        
        // 将表格容器添加到打印页
        printPage.appendChild(tableContainerDiv);
        
        // 将打印页添加到容器
        originalContainer.appendChild(printPage);
    }
    
    // 延迟执行打印，确保样式已应用
    setTimeout(() => {
        window.print();
        
        // 打印后恢复原始样式
        setTimeout(restoreAfterPrint, 500);
    }, 100);
}

// 打印后恢复原始样式
function restoreAfterPrint() {
    // 恢复表格内容
    if (window.originalTableContent) {
        const originalContainer = document.getElementById('inventoryTableContainer');
        originalContainer.innerHTML = window.originalTableContent;
    }
    
    // 恢复标题内容
    if (window.originalTitleContent) {
        const titleSection = document.querySelector('.inventory-title-section');
        titleSection.innerHTML = window.originalTitleContent;
    }
    
    // 恢复表单内容
    if (window.originalFormContent) {
        const formSection = document.querySelector('.inventory-form-section');
        formSection.innerHTML = window.originalFormContent;
    }
    
    // 显示打印完成消息
    showMessage('出入库台账已发送到打印机', 'success');
}

// ===== 事件监听器设置 =====

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化数据（从本地存储加载或使用默认数据）
    initData();
    
    // 初始化表格
    initTable();
    
    // 更新选中计数
    updateSelectedCount();
    
    // 显示加载状态
    console.log("仪器查询系统已加载，数据已从本地存储恢复");
    console.log("提示：支持模糊查询，不区分大小写");
    console.log("提示：表格支持分页浏览，每页显示10条数据");
    console.log("提示：现在支持查询仪器自动勾选仪器列表中的对应仪器");
    console.log("提示：管理员模式下可以编辑出厂编号、上次检定日期和有效期");
    console.log("提示：新增三个仪器使用表按钮，点击可查看使用记录");
    console.log("提示：勾选特定仪器（TE02-055、TE02-033、TE02-053）时会弹出使用记录对话框");
    console.log("优化：增加了最近更新时间显示");
    console.log("优化：查询结果中可直接勾选仪器");
    console.log("更新：删除了使用表页面的打印按钮，增加了编辑按钮");
    console.log("更新：编辑模式下可以删除使用记录");
    console.log("新增：H1页面添加了出库和入库按钮");
    console.log("新增：出库时弹出对话框输入设备出库日期、领取人、管理员");
    console.log("新增：H2页面添加了导出出库和导入出库按钮");
    console.log("新增：打印时弹出对话框输入设备入库时间、状态、归还人、管理员");
});

// 查询按钮事件
document.getElementById('searchBtn').addEventListener('click', function() {
    // 执行查询功能
    searchInstrument();
});

// 搜索框回车事件
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchInstrument();
    }
});

// 管理员登录按钮事件
document.getElementById('adminLoginBtn').addEventListener('click', function() {
    if (isAuthenticated) {
        // 如果已经登录，显示退出确认
        if (confirm('您确定要退出管理员模式吗？')) {
            logout();
        }
    } else {
        // 如果未登录，显示密码输入对话框
        showPasswordDialog();
    }
});

// 数据导出按钮事件
document.getElementById('dataExportBtn').addEventListener('click', exportData);

// 数据导入按钮事件
document.getElementById('dataImportBtn').addEventListener('click', showDataImportDialog);

// 数据导入确认按钮事件
document.getElementById('dataImportConfirmBtn').addEventListener('click', confirmDataImport);

// 数据导入取消按钮事件
document.getElementById('dataImportCancelBtn').addEventListener('click', closeDataImportDialog);

// 点击遮罩关闭数据导入对话框
document.getElementById('dataImportDialogOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        closeDataImportDialog();
    }
});

// 使用表按钮事件
document.getElementById('usageBtn055').addEventListener('click', function() {
    showUsagePage("TE02-055");
});

document.getElementById('usageBtn033').addEventListener('click', function() {
    showUsagePage("TE02-033");
});

document.getElementById('usageBtn053').addEventListener('click', function() {
    showUsagePage("TE02-053");
});

// 使用表编辑按钮事件
document.getElementById('editUsage055Btn').addEventListener('click', function() {
    toggleUsageEditMode("TE02-055");
});

document.getElementById('editUsage033Btn').addEventListener('click', function() {
    toggleUsageEditMode("TE02-033");
});

document.getElementById('editUsage053Btn').addEventListener('click', function() {
    toggleUsageEditMode("TE02-053");
});

// 使用记录年度输入框变化事件
document.getElementById('year055').addEventListener('change', function() {
    generateUsageTable("TE02-055");
});

document.getElementById('year033').addEventListener('change', function() {
    generateUsageTable("TE02-033");
});

document.getElementById('year053').addEventListener('change', function() {
    generateUsageTable("TE02-053");
});

// 返回主页面按钮事件
document.getElementById('backToMainFrom055Btn').addEventListener('click', backToMainPage);
document.getElementById('backToMainFrom033Btn').addEventListener('click', backToMainPage);
document.getElementById('backToMainFrom053Btn').addEventListener('click', backToMainPage);

// 使用记录对话框事件
document.getElementById('usageRecordSubmit').addEventListener('click', saveUsageRecord);
document.getElementById('usageRecordCancel').addEventListener('click', closeUsageRecordDialog);

// 使用记录输入框回车事件
document.getElementById('usageRecordPreStatus').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('usageRecordDuringStatus').focus();
    }
});

document.getElementById('usageRecordDuringStatus').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('usageRecordPerson').focus();
    }
});

document.getElementById('usageRecordPerson').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('usageRecordSample').focus();
    }
});

document.getElementById('usageRecordSample').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        saveUsageRecord();
    }
});

// 点击遮罩关闭使用记录对话框
document.getElementById('usageRecordOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        closeUsageRecordDialog();
    }
});

// 密码输入框键盘事件（检测Caps Lock）
document.getElementById('passwordDialogInput').addEventListener('keyup', checkCapsLock);
document.getElementById('passwordDialogInput').addEventListener('keydown', checkCapsLock);

// 密码对话框提交按钮事件
document.getElementById('passwordDialogSubmit').addEventListener('click', authenticate);

// 密码对话框取消按钮事件
document.getElementById('passwordDialogCancel').addEventListener('click', closePasswordDialog);

// 密码输入框回车事件
document.getElementById('passwordDialogInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        authenticate();
    } else if (event.key === 'Escape') {
        closePasswordDialog();
    }
});

// 退出登录按钮事件
document.getElementById('logoutBtn').addEventListener('click', logout);

// 保存有效期按钮事件
document.getElementById('saveBtn').addEventListener('click', saveExpiry);

// 取消修改按钮事件
document.getElementById('cancelBtn').addEventListener('click', cancelEdit);

// 出库按钮事件 - 修改为弹出出库对话框
document.getElementById('outboundBtn').addEventListener('click', showOutboundDialog);

// 入库按钮事件 - 直接跳转到H2页面
document.getElementById('inboundBtn').addEventListener('click', showInboundPage);

// 批量编辑按钮事件
document.getElementById('batchEditBtn').addEventListener('click', openBatchEditPopup);

// 返回主页面按钮事件
document.getElementById('backToMainBtn').addEventListener('click', backToMainPage);

// H2页面导出出库按钮事件
document.getElementById('inventoryExportBtn').addEventListener('click', exportInventoryData);

// H2页面导入出库按钮事件
document.getElementById('inventoryImportBtn').addEventListener('click', importInventoryData);

// H2页面打印按钮事件 - 改为弹出入库对话框
document.getElementById('inventoryPrintBtn').addEventListener('click', showInboundDialog);

// 出库对话框确认按钮事件
document.getElementById('outboundDialogConfirm').addEventListener('click', confirmOutboundInfo);

// 出库对话框取消按钮事件
document.getElementById('outboundDialogCancel').addEventListener('click', closeOutboundDialog);

// 出库对话框输入框回车事件
document.getElementById('outboundDate').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('outboundReceiver').focus();
    }
});

document.getElementById('outboundReceiver').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('outboundManager').focus();
    }
});

document.getElementById('outboundManager').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        confirmOutboundInfo();
    }
});

// 点击遮罩关闭出库对话框
document.getElementById('outboundDialogOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        closeOutboundDialog();
    }
});

// 入库对话框确认按钮事件
document.getElementById('inboundDialogConfirm').addEventListener('click', confirmInboundInfo);

// 入库对话框取消按钮事件
document.getElementById('inboundDialogCancel').addEventListener('click', closeInboundDialog);

// 入库对话框输入框回车事件
document.getElementById('inboundDate').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('inboundReturner').focus();
    }
});

document.getElementById('inboundReturner').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('inboundManager').focus();
    }
});

document.getElementById('inboundManager').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        confirmInboundInfo();
    }
});

// 点击遮罩关闭入库对话框
document.getElementById('inboundDialogOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        closeInboundDialog();
    }
});

// 分页按钮事件监听
document.getElementById('firstPageBtn').addEventListener('click', function() {
    goToPage(1);
});

document.getElementById('prevPageBtn').addEventListener('click', function() {
    goToPage(currentPage - 1);
});

document.getElementById('nextPageBtn').addEventListener('click', function() {
    goToPage(currentPage + 1);
});

document.getElementById('lastPageBtn').addEventListener('click', function() {
    goToPage(totalPages);
});

document.getElementById('jumpToPageBtn').addEventListener('click', function() {
    const pageInput = document.getElementById('jumpToPage');
    const page = parseInt(pageInput.value);
    if (page && page >= 1 && page <= totalPages) {
        goToPage(page);
    } else {
        showMessage(`请输入有效的页码（1-${totalPages}）`, 'error');
        pageInput.value = currentPage;
    }
});

document.getElementById('jumpToPage').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('jumpToPageBtn').click();
    }
});

// 每页显示数量选择事件
document.getElementById('pageSizeSelect').addEventListener('change', function() {
    pageSize = parseInt(this.value);
    currentPage = 1; // 重置到第一页
    calculateTotalPages();
    initTable();
    updateSelectedCount();
});

// 全选复选框事件
document.getElementById('selectAllCheckbox').addEventListener('change', selectAllCurrentPage);

// 编辑表单保存按钮事件
document.getElementById('editFormSaveBtn').addEventListener('click', saveEdit);

// 编辑表单取消按钮事件
document.getElementById('editFormCancelBtn').addEventListener('click', closeEditPopup);

// 编辑表单回车事件
document.getElementById('editExpiryDate').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        saveEdit();
    }
});

// 点击遮罩关闭编辑弹出窗口
document.getElementById('editOverlay').addEventListener('click', closeEditPopup);

// 批量编辑保存按钮事件
document.getElementById('batchEditSaveBtn').addEventListener('click', saveBatchEdit);

// 批量编辑取消按钮事件
document.getElementById('batchEditCancelBtn').addEventListener('click', closeBatchEditPopup);

// 点击遮罩关闭批量编辑弹出窗口
document.getElementById('batchEditOverlay').addEventListener('click', closeBatchEditPopup);

// 批量编辑表单回车事件
document.getElementById('batchFactoryNo').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        saveBatchEdit();
    }
});

document.getElementById('batchLastCalibration').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        saveBatchEdit();
    }
});

document.getElementById('batchExpiryDate').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        saveBatchEdit();
    }
});

// 点击遮罩关闭密码对话框
document.getElementById('passwordDialogOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        closePasswordDialog();
    }
});

// 添加仪器按钮事件
document.getElementById('addInstrumentBtn').addEventListener('click', showAddInstrumentDialog);

// 删除选中仪器按钮事件
document.getElementById('deleteSelectedBtn').addEventListener('click', deleteSelectedInstruments);

// 添加仪器保存按钮事件
document.getElementById('addInstrumentSaveBtn').addEventListener('click', saveNewInstrument);

// 添加仪器取消按钮事件
document.getElementById('addInstrumentCancelBtn').addEventListener('click', closeAddInstrumentDialog);

// 点击遮罩关闭添加仪器对话框
document.getElementById('addInstrumentOverlay').addEventListener('click', closeAddInstrumentDialog);

// 添加仪器表单回车事件
document.getElementById('addInstrumentId').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('addInstrumentName').focus();
    }
});

document.getElementById('addInstrumentName').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('addInstrumentSpec').focus();
    }
});

document.getElementById('addInstrumentSpec').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        saveNewInstrument();
    }
});