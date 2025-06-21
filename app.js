// 食物交换表数据
const foodExchangeData = {
    grain: [
        { name: '大米', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '小米', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '精米', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '糙米', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '南粳米', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '米粥', weight: 50, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '面粉', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '米粉类', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '混合面', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '荞麦面', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '各种挂面', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '绿豆', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '红豆', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '豌豆', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '干粉条', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '干莲子', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '油条', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '苏打饼干', weight: 25, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '全面条', weight: 35, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '魔芋生面条', weight: 35, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '马铃薯', weight: 100, protein: 2, carbs: 20, fat: 0, calories: 90 },
        { name: '鲜玉米(带棒心)', weight: 200, protein: 2, carbs: 20, fat: 0, calories: 90 }
    ],
    vegetable: [
        { name: '大白菜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '油菜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '圆白菜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '菠菜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '芹菜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '茼蒿', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '南瓜菜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '蓝菜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '荸荠', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '油菜苔', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '西葫芦', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '西红柿', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '冬瓜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '苦瓜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '黄瓜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '丝瓜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '南瓜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '宽菜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '芥蓝', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '龙须菜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '绿豆芽', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '胡椒', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '水皮萝卜', weight: 500, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '菜花', weight: 400, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '白萝卜', weight: 400, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '青椒', weight: 400, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '葱', weight: 400, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '白笋', weight: 400, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '凉薯', weight: 250, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '山药', weight: 250, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '糖', weight: 250, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '茄子', weight: 100, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '百合', weight: 100, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '芋头', weight: 100, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '毛豆', weight: 70, protein: 2, carbs: 17, fat: 0, calories: 90 },
        { name: '胡萝卜', weight: 200, protein: 2, carbs: 17, fat: 0, calories: 90 }
    ],
    fruit: [
        { name: '柿子', weight: 150, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '香梨', weight: 150, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '鲜荔枝', weight: 150, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '梨', weight: 200, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '桃', weight: 200, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '苹果', weight: 200, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '橘子', weight: 200, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '橙子', weight: 200, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '柚子', weight: 200, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '猕猴桃', weight: 200, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '李子', weight: 200, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '杏', weight: 200, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '葡萄', weight: 150, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '草莓', weight: 300, protein: 1, carbs: 21, fat: 0, calories: 90 },
        { name: '西瓜', weight: 500, protein: 1, carbs: 21, fat: 0, calories: 90 }
    ],
    soy: [
        { name: '腐竹', weight: 20, protein: 9, carbs: 4, fat: 0, calories: 90 },
        { name: '大豆', weight: 25, protein: 9, carbs: 4, fat: 0, calories: 90 },
        { name: '大豆粉', weight: 25, protein: 9, carbs: 4, fat: 0, calories: 90 },
        { name: '豆腐丝', weight: 50, protein: 9, carbs: 4, fat: 0, calories: 90 },
        { name: '豆腐干', weight: 50, protein: 9, carbs: 4, fat: 0, calories: 90 },
        { name: '油豆腐', weight: 50, protein: 9, carbs: 4, fat: 0, calories: 90 },
        { name: '北豆腐', weight: 100, protein: 9, carbs: 4, fat: 0, calories: 90 },
        { name: '南豆腐', weight: 150, protein: 9, carbs: 4, fat: 0, calories: 90 },
        { name: '豆浆', weight: 400, protein: 9, carbs: 4, fat: 0, calories: 90 }
    ],
    milk: [
        { name: '奶粉', weight: 20, protein: 5, carbs: 6, fat: 5, calories: 90 },
        { name: '脱脂奶粉', weight: 25, protein: 5, carbs: 6, fat: 5, calories: 90 },
        { name: '乳酪', weight: 25, protein: 5, carbs: 6, fat: 5, calories: 90 },
        { name: '无糖酸奶', weight: 130, protein: 5, carbs: 6, fat: 5, calories: 90 },
        { name: '牛奶', weight: 160, protein: 5, carbs: 6, fat: 5, calories: 90 },
        { name: '羊奶', weight: 160, protein: 5, carbs: 6, fat: 5, calories: 90 }
    ],
    meat: [
        { name: '瘦猪肉', weight: 50, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '瘦牛肉', weight: 50, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '瘦羊肉', weight: 50, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '鸡肉', weight: 50, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '鸭肉', weight: 50, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '鹅肉', weight: 50, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '鸽子肉', weight: 50, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '熟火腿', weight: 20, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '香肠', weight: 20, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '肥瘦猪肉', weight: 25, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '畜肉', weight: 35, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '午餐肉', weight: 35, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '大肠', weight: 35, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '鸡蛋', weight: 60, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '鹌鹑蛋', weight: 60, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '带鱼', weight: 80, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '草鱼', weight: 80, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '甲鱼', weight: 80, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '比目鱼', weight: 80, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '大黄鱼', weight: 100, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '黑鲳鱼', weight: 100, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '鲤鱼', weight: 100, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '兔肉', weight: 100, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '鲢鱼', weight: 100, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '水煮虾', weight: 100, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '水煮蟹', weight: 100, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '对虾', weight: 100, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '青虾', weight: 100, protein: 9, carbs: 0, fat: 6, calories: 90 },
        { name: '蟹贝', weight: 100, protein: 9, carbs: 0, fat: 6, calories: 90 }
    ],
    nut: [
        { name: '芝麻酱', weight: 15, protein: 4, carbs: 2, fat: 7, calories: 90 },
        { name: '花生米', weight: 15, protein: 4, carbs: 2, fat: 7, calories: 90 },
        { name: '核桃粉', weight: 15, protein: 4, carbs: 2, fat: 7, calories: 90 },
        { name: '杏仁', weight: 15, protein: 4, carbs: 2, fat: 7, calories: 90 },
        { name: '葵花籽(带壳)', weight: 25, protein: 4, carbs: 2, fat: 7, calories: 90 },
        { name: '南瓜籽(带壳)', weight: 25, protein: 4, carbs: 2, fat: 7, calories: 90 },
        { name: '西瓜籽(带壳)', weight: 40, protein: 4, carbs: 2, fat: 7, calories: 90 }
    ],
    oil: [
        { name: '花生油', weight: 10, protein: 0, carbs: 0, fat: 10, calories: 90 },
        { name: '香油', weight: 10, protein: 0, carbs: 0, fat: 10, calories: 90 },
        { name: '玉米油', weight: 10, protein: 0, carbs: 0, fat: 10, calories: 90 },
        { name: '菜籽油', weight: 10, protein: 0, carbs: 0, fat: 10, calories: 90 },
        { name: '豆油', weight: 10, protein: 0, carbs: 0, fat: 10, calories: 90 },
        { name: '红花油', weight: 10, protein: 0, carbs: 0, fat: 10, calories: 90 },
        { name: '猪油', weight: 10, protein: 0, carbs: 0, fat: 10, calories: 90 },
        { name: '牛油', weight: 10, protein: 0, carbs: 0, fat: 10, calories: 90 },
        { name: '羊油', weight: 10, protein: 0, carbs: 0, fat: 10, calories: 90 },
        { name: '黄油', weight: 10, protein: 0, carbs: 0, fat: 10, calories: 90 }
    ]
};

// 应用状态
let currentPage = 'home';
let currentMeal = 'breakfast';
let currentDate = new Date().toISOString().split('T')[0];
let currentCategory = 'all';
let selectedFoodInfo = null; // 当前选中的食物信息
let currentFoodCategory = 'grain'; // 当前选中的食物分类

// 本地存储键名
const STORAGE_KEYS = {
    FOOD_RECORDS: 'gdm_food_records',
    BLOOD_SUGAR_RECORDS: 'gdm_blood_sugar_records',
    WEIGHT_RECORDS: 'gdm_weight_records',
    FOOD_FREQUENCY: 'gdm_food_frequency' // 新增：食物频率统计
};

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    setupInfoModalEvents();
    updateCurrentDate();
    loadTodayData();
});

// 初始化应用
function initializeApp() {
    // 设置默认日期
    document.getElementById('recordDate').value = currentDate;
    
    // 初始化食物交换表
    populateFoodTable();
    
    // 显示首页
    showPage('home');
}

// 设置事件监听器
function setupEventListeners() {
    // 底部导航
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = this.dataset.page;
            showPage(page);
        });
    });

    // 餐次标签
    document.querySelectorAll('.meal-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            selectMeal(this.dataset.meal);
        });
    });

    // 分类标签
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            selectCategory(this.dataset.category);
        });
    });

    // 模态框事件
    setupModalEvents();

    // 快速记录按钮
    document.getElementById('quickRecordBtn').addEventListener('click', () => showPage('record'));
    document.getElementById('foodTableBtn').addEventListener('click', () => showPage('foodTable'));

    // 添加食物按钮
    document.getElementById('addFoodBtn').addEventListener('click', showAddFoodModal);

    // 血糖记录按钮
    document.getElementById('addBloodSugarBtn').addEventListener('click', showBloodSugarModal);

    // 体重记录按钮
    document.getElementById('addWeightBtn').addEventListener('click', showWeightModal);

    // 日期变化
    document.getElementById('recordDate').addEventListener('change', function() {
        currentDate = this.value;
        loadDateData();
    });

    // 搜索功能
    document.getElementById('foodSearch').addEventListener('input', function() {
        filterFoodTable(this.value);
    });

    // 食材选择搜索功能
    document.getElementById('foodSearchInput').addEventListener('input', function() {
        const searchTerm = this.value.trim();
        filterFoodList(searchTerm);
    });

    // 自定义食物按钮
    document.getElementById('customFoodBtn').addEventListener('click', function() {
        const customName = prompt('请输入食物名称：');
        if (customName && customName.trim()) {
            selectCustomFood(customName.trim());
        }
    });

    // 常用食物按钮
    document.getElementById('commonFoodBtn').addEventListener('click', function() {
        showCommonFoods();
    });

    // 筛选按钮
    document.getElementById('filterBtn').addEventListener('click', loadHistoryData);

    // 导出功能
    document.getElementById('exportBtn').addEventListener('click', exportToExcel);

    // 导入功能
    document.getElementById('importBtn').addEventListener('click', () => {
        document.getElementById('importFile').click();
    });
    document.getElementById('importFile').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            importData(file);
        }
        // 清空value，确保下次选择相同文件也能触发change事件
        event.target.value = '';
    });
}

// 设置模态框事件
function setupModalEvents() {
    // 添加食物模态框
    document.getElementById('closeFoodModal').addEventListener('click', hideAddFoodModal);
    document.getElementById('cancelFoodBtn').addEventListener('click', hideAddFoodModal);
    document.getElementById('confirmFoodBtn').addEventListener('click', confirmAddFood);

    // 血糖记录模态框
    document.getElementById('closeBloodSugarModal').addEventListener('click', hideBloodSugarModal);
    document.getElementById('cancelBloodSugarBtn').addEventListener('click', hideBloodSugarModal);
    document.getElementById('confirmBloodSugarBtn').addEventListener('click', confirmBloodSugar);

    // 体重记录模态框
    document.getElementById('closeWeightModal').addEventListener('click', hideWeightModal);
    document.getElementById('cancelWeightBtn').addEventListener('click', hideWeightModal);
    document.getElementById('confirmWeightBtn').addEventListener('click', confirmWeight);

    // 点击模态框背景关闭
    document.getElementById('addFoodModal').addEventListener('click', function(e) {
        if (e.target === this) hideAddFoodModal();
    });
    document.getElementById('bloodSugarModal').addEventListener('click', function(e) {
        if (e.target === this) hideBloodSugarModal();
    });
    document.getElementById('weightModal').addEventListener('click', function(e) {
        if (e.target === this) hideWeightModal();
    });
}

// 信息提示模态框事件
function setupInfoModalEvents() {
    document.getElementById('infoBtn').addEventListener('click', function() {
        document.getElementById('infoModal').classList.remove('hidden');
    });
    document.getElementById('closeInfoModal').addEventListener('click', function() {
        document.getElementById('infoModal').classList.add('hidden');
    });
    document.getElementById('infoModal').addEventListener('click', function(e) {
        if (e.target === this) document.getElementById('infoModal').classList.add('hidden');
    });
}

// 显示页面
function showPage(page) {
    // 隐藏所有页面
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    
    // 显示目标页面
    document.getElementById(page + 'Page').classList.remove('hidden');
    
    // 更新导航状态
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active', 'text-emerald-500');
        btn.classList.add('text-gray-400');
    });
    
    document.querySelector(`[data-page="${page}"]`).classList.add('active', 'text-emerald-500');
    document.querySelector(`[data-page="${page}"]`).classList.remove('text-gray-400');
    
    currentPage = page;
    
    // 页面特定初始化
    if (page === 'history') {
        loadHistoryData();
    }
}

// 选择餐次
function selectMeal(meal) {
    document.querySelectorAll('.meal-tab').forEach(tab => {
        tab.classList.remove('active', 'bg-emerald-500', 'text-white');
        tab.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    document.querySelector(`[data-meal="${meal}"]`).classList.add('active', 'bg-emerald-500', 'text-white');
    document.querySelector(`[data-meal="${meal}"]`).classList.remove('bg-gray-200', 'text-gray-700');
    
    currentMeal = meal;
    loadMealData();
}

// 选择分类
function selectCategory(category) {
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active', 'bg-emerald-500', 'text-white');
        tab.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    document.querySelector(`[data-category="${category}"]`).classList.add('active', 'bg-emerald-500', 'text-white');
    document.querySelector(`[data-category="${category}"]`).classList.remove('bg-gray-200', 'text-gray-700');
    
    currentCategory = category;
    populateFoodTable();
}

// 更新当前日期显示
function updateCurrentDate() {
    const today = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    document.getElementById('currentDate').textContent = today.toLocaleDateString('zh-CN', options);
}

// 加载今日数据
function loadTodayData() {
    const today = new Date().toISOString().split('T')[0];
    
    // 加载今日热量
    const todayRecords = getFoodRecords(today);
    const totalCalories = calculateTotalCalories(todayRecords);
    document.getElementById('todayCalories').textContent = totalCalories;
    
    // 更新热量进度条
    const progress = Math.min((totalCalories / 1890) * 100, 100);
    document.getElementById('calorieProgress').style.width = progress + '%';
    
    // 加载血糖记录数
    const bloodSugarRecords = getBloodSugarRecords(today);
    document.getElementById('bloodSugarCount').textContent = bloodSugarRecords.length;
    
    // 加载最近体重
    const weightRecords = getWeightRecords();
    if (weightRecords.length > 0) {
        const lastWeight = weightRecords[weightRecords.length - 1];
        document.getElementById('lastWeight').textContent = lastWeight.weight + 'kg (' + lastWeight.date + ')';
    }
}

// 加载日期数据
function loadDateData() {
    loadMealData();
}

// 加载餐次数据
function loadMealData() {
    const records = getFoodRecords(currentDate, currentMeal);
    displayFoodList(records);
    updateMealNutrition(records);
}

// 显示食物列表
function displayFoodList(records) {
    const foodList = document.getElementById('foodList');
    
    if (records.length === 0) {
        foodList.innerHTML = '<div class="text-gray-500 text-center py-4">暂无记录</div>';
        return;
    }
    
    foodList.innerHTML = records.map(record => `
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
                <div class="font-medium text-gray-800">${record.foodName}</div>
                <div class="text-sm text-gray-600">${record.weight}g - ${record.calories}kcal</div>
            </div>
            <button onclick="removeFoodRecord('${record.id}')" class="text-red-500 hover:text-red-700">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// 更新餐次营养信息
function updateMealNutrition(records) {
    const nutrition = calculateNutrition(records);
    
    document.getElementById('mealCalories').textContent = nutrition.calories;
    document.getElementById('mealProtein').textContent = nutrition.protein.toFixed(1);
    document.getElementById('mealCarbs').textContent = nutrition.carbs.toFixed(1);
    document.getElementById('mealFat').textContent = nutrition.fat.toFixed(1);
}

// 计算营养信息
function calculateNutrition(records) {
    return records.reduce((total, record) => {
        return {
            calories: total.calories + record.calories,
            protein: total.protein + record.protein,
            carbs: total.carbs + record.carbs,
            fat: total.fat + record.fat
        };
    }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

// 计算总热量
function calculateTotalCalories(records) {
    return records.reduce((total, record) => total + record.calories, 0);
}

// 填充食物表
function populateFoodTable() {
    const foodTableList = document.getElementById('foodTableList');
    let html = '';
    
    if (currentCategory === 'all') {
        Object.keys(foodExchangeData).forEach(category => {
            const categoryName = getCategoryName(category);
            html += `<h3 class="text-lg font-semibold text-gray-800 mt-4 mb-2">${categoryName}</h3>`;
            
            foodExchangeData[category].forEach(food => {
                html += `
                    <div class="card-shadow bg-white rounded-lg p-3 mb-2">
                        <div class="flex items-center justify-between">
                            <div>
                                <h4 class="font-medium text-gray-800">${food.name}</h4>
                                <p class="text-sm text-gray-600">${food.weight}g/份 • ${food.calories}kcal</p>
                            </div>
                            <div class="text-xs text-gray-500 text-right">
                                <div>蛋白质: ${food.protein}g</div>
                                <div>碳水: ${food.carbs}g</div>
                                <div>脂肪: ${food.fat}g</div>
                            </div>
                        </div>
                    </div>
                `;
            });
        });
    } else {
        const categoryName = getCategoryName(currentCategory);
        html += `<h3 class="text-lg font-semibold text-gray-800 mb-2">${categoryName}</h3>`;
    
        foodExchangeData[currentCategory].forEach(food => {
            html += `
                <div class="card-shadow bg-white rounded-lg p-3 mb-2">
            <div class="flex items-center justify-between">
                <div>
                            <h4 class="font-medium text-gray-800">${food.name}</h4>
                            <p class="text-sm text-gray-600">${food.weight}g/份 • ${food.calories}kcal</p>
                </div>
                        <div class="text-xs text-gray-500 text-right">
                            <div>蛋白质: ${food.protein}g</div>
                            <div>碳水: ${food.carbs}g</div>
                            <div>脂肪: ${food.fat}g</div>
                </div>
            </div>
            </div>
            `;
        });
    }
    
    foodTableList.innerHTML = html;
}

// 获取分类名称
function getCategoryName(category) {
    const names = {
        grain: '谷薯类',
        vegetable: '蔬菜类',
        fruit: '水果类',
        soy: '大豆类',
        milk: '奶类',
        meat: '肉蛋类',
        nut: '坚果类',
        oil: '油类'
    };
    return names[category] || category;
}

// 过滤食物表
function filterFoodTable(searchTerm) {
    const foodTableList = document.getElementById('foodTableList');
    const items = foodTableList.querySelectorAll('.card-shadow');
    
    items.forEach(item => {
        const foodName = item.querySelector('h4').textContent;
        if (foodName.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// 显示添加食物模态框
function showAddFoodModal() {
    document.getElementById('addFoodModal').classList.remove('hidden');
    
    // 重置所有输入框
    document.getElementById('foodSearchInput').value = '';
    document.getElementById('foodWeight').value = '';
    
    // 重置状态
    selectedFoodInfo = null;
    currentFoodCategory = 'grain';
    clearFoodPreview();
    
    // 初始化界面
    initializeFoodModal();
}

// 隐藏添加食物模态框
function hideAddFoodModal() {
    document.getElementById('addFoodModal').classList.add('hidden');
}

// 确认添加食物
function confirmAddFood() {
    const weightInput = document.getElementById('foodWeight');
    
    if (!selectedFoodInfo || !weightInput.value) {
        alert('请选择食物并输入重量');
        return;
    }
    
    const weight = parseFloat(weightInput.value);
    let record;
    
    if (selectedFoodInfo.isCustom) {
        // 自定义食物 - 使用默认营养值（每100g）
        const ratio = weight / 100;
        record = {
        id: Date.now().toString(),
        date: currentDate,
        meal: currentMeal,
            foodName: selectedFoodInfo.name,
        weight: weight,
            calories: Math.round(selectedFoodInfo.calories * ratio),
            protein: Math.round(selectedFoodInfo.protein * ratio * 10) / 10,
            carbs: Math.round(selectedFoodInfo.carbs * ratio * 10) / 10,
            fat: Math.round(selectedFoodInfo.fat * ratio * 10) / 10,
        timestamp: new Date().toISOString()
    };
    } else {
        // 预设食物 - 使用食物交换表的标准营养值
        const ratio = weight / selectedFoodInfo.weight;
        record = {
            id: Date.now().toString(),
            date: currentDate,
            meal: currentMeal,
            foodName: selectedFoodInfo.name,
            weight: weight,
            calories: Math.round(selectedFoodInfo.calories * ratio),
            protein: Math.round(selectedFoodInfo.protein * ratio * 10) / 10,
            carbs: Math.round(selectedFoodInfo.carbs * ratio * 10) / 10,
            fat: Math.round(selectedFoodInfo.fat * ratio * 10) / 10,
            timestamp: new Date().toISOString()
        };
    }
    
    // 保存记录
    saveFoodRecord(record);
    
    // 刷新显示
    loadMealData();
    loadTodayData();
    
    // 关闭模态框
    hideAddFoodModal();
    
    // 显示成功消息
    showMessage('食物记录已添加');
}

// 显示血糖记录模态框
function showBloodSugarModal() {
    document.getElementById('bloodSugarModal').classList.remove('hidden');
    document.getElementById('bloodSugarTime').value = 'fasting';
    document.getElementById('bloodSugarValue').value = '';
}

// 隐藏血糖记录模态框
function hideBloodSugarModal() {
    document.getElementById('bloodSugarModal').classList.add('hidden');
}

// 确认血糖记录
function confirmBloodSugar() {
    const timeSelect = document.getElementById('bloodSugarTime');
    const valueInput = document.getElementById('bloodSugarValue');
    
    if (!valueInput.value) {
        alert('请输入血糖值');
        return;
    }
    
    const record = {
        id: Date.now().toString(),
        date: currentDate,
        time: timeSelect.value,
        value: parseFloat(valueInput.value),
        timestamp: new Date().toISOString()
    };
    
    saveBloodSugarRecord(record);
    loadTodayData();
    hideBloodSugarModal();
    showMessage('血糖记录已添加');
}

// 显示体重记录模态框
function showWeightModal() {
    document.getElementById('weightModal').classList.remove('hidden');
    document.getElementById('weightValue').value = '';
}

// 隐藏体重记录模态框
function hideWeightModal() {
    document.getElementById('weightModal').classList.add('hidden');
}

// 确认体重记录
function confirmWeight() {
    const valueInput = document.getElementById('weightValue');
    
    if (!valueInput.value) {
        alert('请输入体重');
        return;
    }
    
    const record = {
        id: Date.now().toString(),
        date: currentDate,
        weight: parseFloat(valueInput.value),
        timestamp: new Date().toISOString()
    };
    
    saveWeightRecord(record);
    loadTodayData();
    hideWeightModal();
    showMessage('体重记录已添加');
}

// 删除食物记录
function removeFoodRecord(recordId) {
    if (confirm('确定要删除这条记录吗？')) {
        const records = JSON.parse(localStorage.getItem(STORAGE_KEYS.FOOD_RECORDS) || '[]');
        const filteredRecords = records.filter(r => r.id !== recordId);
        localStorage.setItem(STORAGE_KEYS.FOOD_RECORDS, JSON.stringify(filteredRecords));
        
        loadMealData();
        loadTodayData();
        showMessage('记录已删除');
    }
}

// 保存食物记录
function saveFoodRecord(record) {
    const records = JSON.parse(localStorage.getItem(STORAGE_KEYS.FOOD_RECORDS) || '[]');
    records.push(record);
    localStorage.setItem(STORAGE_KEYS.FOOD_RECORDS, JSON.stringify(records));

    // 更新食物使用频率
    if (!record.isCustom) {
        const frequency = JSON.parse(localStorage.getItem(STORAGE_KEYS.FOOD_FREQUENCY) || '{}');
        frequency[record.foodName] = (frequency[record.foodName] || 0) + 1;
        localStorage.setItem(STORAGE_KEYS.FOOD_FREQUENCY, JSON.stringify(frequency));
    }
}

// 保存血糖记录
function saveBloodSugarRecord(record) {
    const records = JSON.parse(localStorage.getItem(STORAGE_KEYS.BLOOD_SUGAR_RECORDS) || '[]');
    records.push(record);
    localStorage.setItem(STORAGE_KEYS.BLOOD_SUGAR_RECORDS, JSON.stringify(records));
}

// 保存体重记录
function saveWeightRecord(record) {
    const records = JSON.parse(localStorage.getItem(STORAGE_KEYS.WEIGHT_RECORDS) || '[]');
    records.push(record);
    localStorage.setItem(STORAGE_KEYS.WEIGHT_RECORDS, JSON.stringify(records));
}

// 获取食物记录
function getFoodRecords(date, meal = null) {
    const records = JSON.parse(localStorage.getItem(STORAGE_KEYS.FOOD_RECORDS) || '[]');
    return records.filter(r => {
        if (meal) {
            return r.date === date && r.meal === meal;
        }
        return r.date === date;
    });
}

// 获取血糖记录
function getBloodSugarRecords(date = null) {
    const records = JSON.parse(localStorage.getItem(STORAGE_KEYS.BLOOD_SUGAR_RECORDS) || '[]');
    if (date) {
        return records.filter(r => r.date === date);
    }
    return records;
}

// 获取体重记录
function getWeightRecords() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.WEIGHT_RECORDS) || '[]');
}

// 加载历史记录
function loadHistoryData() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    const foodRecords = JSON.parse(localStorage.getItem(STORAGE_KEYS.FOOD_RECORDS) || '[]');
    const bloodSugarRecords = JSON.parse(localStorage.getItem(STORAGE_KEYS.BLOOD_SUGAR_RECORDS) || '[]');
    const weightRecords = JSON.parse(localStorage.getItem(STORAGE_KEYS.WEIGHT_RECORDS) || '[]');

    let allRecords = [...foodRecords, ...bloodSugarRecords, ...weightRecords];
    
    if (startDate || endDate) {
        allRecords = allRecords.filter(r => {
            const recordDate = r.date;
            if (startDate && recordDate < startDate) return false;
            if (endDate && recordDate > endDate) return false;
            return true;
        });
    }
    
    displayHistoryRecords(allRecords);
}

// 显示历史记录
function displayHistoryRecords(records) {
    const historyList = document.getElementById('historyList');
    if (records.length === 0) {
        historyList.innerHTML = '<div class="text-gray-500 text-center py-8">暂无历史记录</div>';
        return;
    }
    
    const groupedByDate = records.reduce((acc, record) => {
        const date = record.date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(record);
        return acc;
    }, {});
    
    const mealOrder = ['breakfast', 'morning-snack', 'lunch', 'afternoon-snack', 'dinner', 'evening-snack'];
    const bloodSugarOrder = ['fasting', 'breakfast-2h', 'lunch-2h', 'dinner-2h'];

    let historyHtml = '';
    Object.keys(groupedByDate).sort().reverse().forEach(date => {
        const dayRecords = groupedByDate[date];
        dayRecords.sort((a, b) => {
            const getOrder = (record) => {
                if (record.meal) return mealOrder.indexOf(record.meal);
                if (record.time) return bloodSugarOrder.indexOf(record.time) + mealOrder.length;
                if (record.weight) return mealOrder.length + bloodSugarOrder.length;
                return Infinity;
            };
            return getOrder(a) - getOrder(b);
        });

        const totalCalories = calculateTotalCalories(dayRecords.filter(r => r.foodName));
        const foodRecordsCount = dayRecords.filter(r => r.foodName).length;
        
        // 计算平均血糖值
        const bloodSugarRecords = dayRecords.filter(r => r.value && r.time);
        const averageBloodSugar = bloodSugarRecords.length > 0 
            ? (bloodSugarRecords.reduce((sum, record) => sum + record.value, 0) / bloodSugarRecords.length).toFixed(1)
            : '--';

        historyHtml += `
            <div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div class="bg-blue-500 text-white p-4">
                    <div class="flex justify-between items-start">
                        <div class="flex flex-col">
                            <h3 class="text-2xl font-bold">${date}</h3>
                            <p class="text-sm text-blue-200 mt-2">共 ${foodRecordsCount} 条餐饮记录</p>
                        </div>
                        <div class="text-right">
                            <div class="mb-1">
                                <span class="text-sm text-blue-200">总热量</span>
                                <span class="text-2xl font-bold ml-2">${totalCalories}</span>
                                <span class="text-sm text-blue-200 ml-1">kcal</span>
                            </div>
                            <div>
                                <span class="text-sm text-blue-200">平均血糖</span>
                                <span class="text-lg font-semibold ml-2">${averageBloodSugar}</span>
                                <span class="text-sm text-blue-200 ml-1">${averageBloodSugar !== '--' ? 'mmol/L' : ''}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        `;

        const groupedByMeal = dayRecords.filter(r => r.foodName).reduce((acc, record) => {
            if (!acc[record.meal]) {
                acc[record.meal] = [];
            }
            acc[record.meal].push(record);
            return acc;
        }, {});

        mealOrder.forEach(meal => {
            if (groupedByMeal[meal]) {
                historyHtml += `
                    <div>
                        <h4 class="text-md font-semibold text-gray-700 mb-3 flex items-center">
                            <i class="${getMealIcon(meal)} mr-2"></i>
                            <span>${getMealName(meal)}</span>
                        </h4>
                        <div class="flex flex-wrap gap-2">
                `;
                groupedByMeal[meal].forEach(food => {
                    historyHtml += createFoodTag(food);
                });
                historyHtml += `
                        </div>
                    </div>
                `;
            }
        });

        historyHtml += `
                    </div>
                </div>
            </div>
        `;
    });

    historyList.innerHTML = historyHtml;
}

function createFoodTag(food) {
    const categoryInfo = getCategoryVisuals(getFoodCategory(food.foodName));
    return `
        <div class="flex items-center py-1 px-2 rounded-md border" style="background-color: ${categoryInfo.bgColor}; border-color: ${categoryInfo.borderColor};">
            <i class="${categoryInfo.icon} mr-1.5" style="color: ${categoryInfo.iconColor};"></i>
            <div>
                <div class="text-xs font-medium text-gray-800">${food.foodName}</div>
                <div class="text-xs text-gray-500">${food.weight}g</div>
            </div>
        </div>
    `;
}

function getMealIcon(meal) {
    const icons = {
        breakfast: 'fas fa-sun text-yellow-500',
        'morning-snack': 'fas fa-coffee text-amber-600',
        lunch: 'fas fa-utensils text-blue-500',
        'afternoon-snack': 'fas fa-cookie-bite text-orange-500',
        dinner: 'fas fa-moon text-indigo-500',
        'evening-snack': 'fas fa-glass-martini-alt text-purple-500'
    };
    return icons[meal] || 'fas fa-question-circle';
}

function getCategoryVisuals(category) {
    const visuals = {
        grain: { icon: 'fas fa-bread-slice', bgColor: '#FEFCE8', borderColor: '#FDE68A', iconColor: '#CA8A04' },
        vegetable: { icon: 'fas fa-leaf', bgColor: '#F0FDF4', borderColor: '#BBF7D0', iconColor: '#22C55E' },
        fruit: { icon: 'fas fa-apple-alt', bgColor: '#FFFBEB', borderColor: '#FCD34D', iconColor: '#F59E0B' },
        soy: { icon: 'fas fa-seedling', bgColor: '#F0FDF4', borderColor: '#BBF7D0', iconColor: '#16A34A' },
        milk: { icon: 'fas fa-glass-whiskey', bgColor: '#EFF6FF', borderColor: '#BFDBFE', iconColor: '#3B82F6' },
        meat: { icon: 'fas fa-drumstick-bite', bgColor: '#FEF2F2', borderColor: '#FECACA', iconColor: '#EF4444' },
        nut: { icon: 'fas fa-dot-circle', bgColor: '#FDF4F4', borderColor: '#FBCFE8', iconColor: '#E11D48' },
        oil: { icon: 'fas fa-tint', bgColor: '#F7FAFC', borderColor: '#E2E8F0', iconColor: '#4A5568' },
        custom: { icon: 'fas fa-utensil-spoon', bgColor: '#F1F5F9', borderColor: '#CBD5E1', iconColor: '#475569' }
    };
    return visuals[category] || visuals['custom']; // Default to custom visuals
}

// 获取食物分类
function getFoodCategory(foodName) {
    for (const category in foodExchangeData) {
        if (foodExchangeData[category].find(f => f.name === foodName)) {
            return category;
        }
    }
    return 'custom';
}

// 选择预设食物
function selectPresetFood(foodData) {
    selectedFoodInfo = {
        name: foodData.name,
        weight: parseInt(foodData.weight),
        calories: parseInt(foodData.calories),
        protein: parseFloat(foodData.protein),
        carbs: parseFloat(foodData.carbs),
        fat: parseFloat(foodData.fat),
        isCustom: false
    };
    
    showFoodPreview(selectedFoodInfo);
}

async function fetchNutritionData(foodName, weight) {
    try {
        const response = await fetch('/api/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ foodName, weight })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `API request failed with status ${response.status}`);
        }

        const data = await response.json();
        const content = data.choices[0].message.content;
        
        // 解析返回的JSON字符串
        const nutritionData = JSON.parse(content);
        
        return {
            calories: nutritionData['热量'] || 0,
            protein: nutritionData['蛋白质'] || 0,
            carbs: nutritionData['碳水'] || 0,
            fat: nutritionData['脂肪'] || 0,
        };

    } catch (error) {
        console.error('Error fetching nutrition data:', error);
        alert(`查询营养数据失败: ${error.message}`);
        return null;
    }
}

// 选择自定义食物
async function selectCustomFood(foodName) {
    // 立即显示加载状态
    showFoodPreview({
        name: foodName,
        calories: '查询中...', protein: '...', carbs: '...', fat: '...',
        isCustom: true
    });
    document.getElementById('foodWeight').value = '50';

    const nutritionData = await fetchNutritionData(foodName, 50);

    if (nutritionData) {
        selectedFoodInfo = {
            name: foodName,
            weight: 50, // 标准重量为50g
            calories: nutritionData.calories,
            protein: nutritionData.protein,
            carbs: nutritionData.carbs,
            fat: nutritionData.fat,
            isCustom: true
        };
        showFoodPreview(selectedFoodInfo);
    } else {
        // 查询失败，重置预览
        clearFoodPreview();
    }
}

// 显示食物预览
function showFoodPreview(foodInfo) {
    const preview = document.getElementById('foodPreview');
    const selectedFoodName = document.getElementById('selectedFoodName');
    
    selectedFoodName.textContent = foodInfo.name;
    document.getElementById('previewCalories').textContent = foodInfo.calories;
    document.getElementById('previewProtein').textContent = foodInfo.protein;
    document.getElementById('previewCarbs').textContent = foodInfo.carbs;
    document.getElementById('previewFat').textContent = foodInfo.fat;

    const isCustom = foodInfo.isCustom || false;
    const unitSuffix = isCustom ? ' / 50g' : '/份';

    document.getElementById('calorieUnit').textContent = ' kcal' + unitSuffix;
    document.getElementById('proteinUnit').textContent = ' g' + unitSuffix;
    document.getElementById('carbsUnit').textContent = ' g' + unitSuffix;
    document.getElementById('fatUnit').textContent = ' g' + unitSuffix;

    preview.classList.remove('hidden');
}

// 清除食物预览
function clearFoodPreview() {
    document.getElementById('foodPreview').classList.add('hidden');
    selectedFoodInfo = null;
}

// 初始化食物选择模态框
function initializeFoodModal() {
    // 设置标签页事件
    document.querySelectorAll('.food-category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            selectFoodCategory(this.dataset.category);
        });
    });
    
    // 默认显示"全部"
    selectFoodCategory('all');
}

// 选择食物分类
function selectFoodCategory(category) {
    currentFoodCategory = category;
    updateActiveTab(category);
    
    if (category === 'all') {
        populateFoodList({ type: 'all' });
    } else {
        populateFoodList({ type: 'category', category: category });
    }
    
    document.getElementById('foodSearchInput').value = '';
}

// 填充食物列表
function populateFoodList(data) {
    const foodList = document.getElementById('modalFoodList');
    let html = '';

    if (data.type === 'common') {
        const foods = data.items || [];
        if (foods.length === 0) {
            html = '<div class="text-gray-500 text-center py-4">暂无常用食物记录，多记录几次就会出现哦！</div>';
        } else {
            html = foods.map(food => createFoodItem(food)).join('');
        }
    } else if (data.type === 'all') {
        Object.keys(foodExchangeData).forEach(cat => {
            const categoryName = getCategoryName(cat);
            html += `<div class="mb-4"><div class="text-sm font-semibold text-gray-700 mb-2">${categoryName}</div>`;
            foodExchangeData[cat].forEach(food => {
                html += createFoodItem({ ...food, category: cat });
            });
            html += `</div>`;
        });
    } else if (data.type === 'category') {
        const foods = foodExchangeData[data.category] || [];
        html = foods.map(food => createFoodItem({ ...food, category: data.category })).join('');
    }
    
    foodList.innerHTML = html;
    
    // 重新绑定点击事件
    foodList.querySelectorAll('.food-item').forEach(item => {
        item.addEventListener('click', function() {
            foodList.querySelectorAll('.food-item').forEach(i => i.classList.remove('bg-emerald-100', 'border-emerald-300'));
            this.classList.add('bg-emerald-100', 'border-emerald-300');
            selectPresetFood(this.dataset);
        });
    });
}

// 创建食物项目HTML
function createFoodItem(food) {
    return `
        <div class="food-item p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors border border-transparent" 
             data-category="${food.category}" 
             data-name="${food.name}"
             data-weight="${food.weight}"
             data-calories="${food.calories}"
             data-protein="${food.protein}"
             data-carbs="${food.carbs}"
             data-fat="${food.fat}">
            <div class="flex items-center justify-between">
                <div>
                    <div class="font-medium text-gray-800">${food.name}</div>
                    <div class="text-xs text-gray-500">${food.weight}g/份 • ${food.calories}kcal</div>
                </div>
                <div class="text-xs text-gray-400">
                    <div>蛋白质: ${food.protein}g</div>
                    <div>碳水: ${food.carbs}g</div>
                </div>
            </div>
        </div>
    `;
}

// 过滤食物列表
function filterFoodList(searchTerm) {
    const foodList = document.getElementById('modalFoodList');
    const foodItems = foodList.querySelectorAll('.food-item');
    
    if (!searchTerm) {
        // 显示所有食物
        foodItems.forEach(item => {
            item.style.display = 'block';
        });
        return;
    }
    
    const searchLower = searchTerm.toLowerCase();
    
    foodItems.forEach(item => {
        const foodName = item.querySelector('.font-medium').textContent.toLowerCase();
        if (foodName.includes(searchLower)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// 显示常用食物
function showCommonFoods() {
    currentFoodCategory = 'common';
    updateActiveTab(null); // 不激活任何分类标签

    const frequency = JSON.parse(localStorage.getItem(STORAGE_KEYS.FOOD_FREQUENCY) || '{}');
    const sortedFoods = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);
    
    let commonFoodsList = [];
    sortedFoods.slice(0, 8).forEach(foodName => {
        for (const category in foodExchangeData) {
            const foundFood = foodExchangeData[category].find(f => f.name === foodName);
            if (foundFood) {
                commonFoodsList.push({ ...foundFood, category });
                break;
            }
        }
    });

    populateFoodList({ type: 'common', items: commonFoodsList });
}

// 更新激活的标签页
function updateActiveTab(category) {
    document.querySelectorAll('.food-category-tab').forEach(tab => {
        if (tab.dataset.category === category) {
            tab.classList.add('active', 'bg-emerald-500', 'text-white');
            tab.classList.remove('bg-gray-200', 'text-gray-700');
        } else {
            tab.classList.remove('active', 'bg-emerald-500', 'text-white');
            tab.classList.add('bg-gray-200', 'text-gray-700');
        }
    });
}

// 导出Excel
function exportToExcel() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    let foodRecords = JSON.parse(localStorage.getItem(STORAGE_KEYS.FOOD_RECORDS) || '[]');
    let bloodSugarRecords = JSON.parse(localStorage.getItem(STORAGE_KEYS.BLOOD_SUGAR_RECORDS) || '[]');
    let weightRecords = JSON.parse(localStorage.getItem(STORAGE_KEYS.WEIGHT_RECORDS) || '[]');

    let allRecords = [...foodRecords, ...bloodSugarRecords, ...weightRecords];
    
    if (startDate || endDate) {
        allRecords = allRecords.filter(r => {
            const recordDate = r.date;
            if (startDate && recordDate < startDate) return false;
            if (endDate && recordDate > endDate) return false;
            return true;
        });
    }
    
    // 生成CSV内容
    let csvContent = "ID,类型,日期,时间,食物,重量(g),热量(kcal),蛋白质(g),碳水(g),脂肪(g),血糖值(mmol/L),体重(kg)\n";
    
    allRecords.forEach(record => {
        if (record.foodName) {
            csvContent += `${record.id},食物,${record.date},${getMealName(record.meal)},"${record.foodName.replace(/"/g, '""')}",${record.weight},${record.calories},${record.protein.toFixed(1)},${record.carbs.toFixed(1)},${record.fat.toFixed(1)},,\n`;
        } else if (record.value) {
            csvContent += `${record.id},血糖,${record.date},${getBloodSugarTimeName(record.time)},,,,,,,${record.value},\n`;
        } else if (record.weight) {
            csvContent += `${record.id},体重,${record.date},,,,,,,,,${record.weight}\n`;
        }
    });
    
    // 添加BOM头，解决Excel乱码问题
    const bom = '\uFEFF';
    const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // 下载文件
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `孕妇控糖记录_${startDate || '全部'}_${endDate || '全部'}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showMessage('数据导出成功');
}

// 获取血糖测量时间名称
function getBloodSugarTimeName(time) {
    const names = {
        fasting: '空腹',
        'breakfast-2h': '早餐后2小时',
        'lunch-2h': '中餐后2小时',
        'dinner-2h': '晚餐后2小时'
    };
    return names[time] || time;
}

// 显示消息
function showMessage(message) {
    // 创建消息元素
    const messageEl = document.createElement('div');
    messageEl.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    messageEl.textContent = message;
    
    document.body.appendChild(messageEl);
    
    // 3秒后自动消失
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.parentNode.removeChild(messageEl);
        }
    }, 3000);
}

// 切换注意事项章节
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const isHidden = section.style.display === 'none';
    
    section.style.display = isHidden ? 'block' : 'none';
    
    // 更新箭头图标
    const icon = section.previousElementSibling.querySelector('.fa-chevron-down');
    if (isHidden) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

function getMealName(mealKey) {
    const names = {
        breakfast: '早餐',
        'morning-snack': '上午加餐',
        lunch: '午餐',
        'afternoon-snack': '下午加餐',
        dinner: '晚餐',
        'evening-snack': '晚上加餐'
    };
    return names[mealKey] || mealKey;
}

function importData(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        
        // 1. 获取所有现有记录的ID
        const existingFoodIds = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.FOOD_RECORDS) || '[]').map(r => r.id));
        const existingBloodIds = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.BLOOD_SUGAR_RECORDS) || '[]').map(r => r.id));
        const existingWeightIds = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.WEIGHT_RECORDS) || '[]').map(r => r.id));

        // 2. 解析CSV
        const rows = text.split('\n').filter(row => row.trim() !== '');
        const header = rows.shift().trim();
        const expectedHeader = "ID,类型,日期,时间,食物,重量(g),热量(kcal),蛋白质(g),碳水(g),脂肪(g),血糖值(mmol/L),体重(kg)";

        if (header !== expectedHeader) {
            alert('文件格式不正确，请选择由本应用导出的CSV文件。');
            return;
        }

        let newRecordsCount = 0;
        const newFoodRecords = [];
        const newBloodRecords = [];
        const newWeightRecords = [];

        rows.forEach(row => {
            const columns = row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g).map(col => col.replace(/"/g, ''));
            const id = columns[0];
            const type = columns[1];
            const date = columns[2];
            
            if (type === '食物' && !existingFoodIds.has(id)) {
                newFoodRecords.push({
                    id: id,
                    date: date,
                    meal: columns[3] ? getMealKeyByName(columns[3]) : '',
                    foodName: columns[4],
                    weight: parseFloat(columns[5]),
                    calories: parseInt(columns[6]),
                    protein: parseFloat(columns[7]),
                    carbs: parseFloat(columns[8]),
                    fat: parseFloat(columns[9]),
                    timestamp: new Date(id).toISOString() // 从ID推断时间戳
                });
                newRecordsCount++;
            } else if (type === '血糖' && !existingBloodIds.has(id)) {
                newBloodRecords.push({
                    id: id,
                    date: date,
                    time: columns[3] ? getBloodSugarTimeKeyByName(columns[3]) : '',
                    value: parseFloat(columns[10]),
                    timestamp: new Date(id).toISOString()
                });
                newRecordsCount++;
            } else if (type === '体重' && !existingWeightIds.has(id)) {
                newWeightRecords.push({
                    id: id,
                    date: date,
                    weight: parseFloat(columns[11]),
                    timestamp: new Date(id).toISOString()
                });
                newRecordsCount++;
            }
        });

        // 3. 合并并保存数据
        if (newRecordsCount > 0) {
            const allFood = [...JSON.parse(localStorage.getItem(STORAGE_KEYS.FOOD_RECORDS) || '[]'), ...newFoodRecords];
            const allBlood = [...JSON.parse(localStorage.getItem(STORAGE_KEYS.BLOOD_SUGAR_RECORDS) || '[]'), ...newBloodRecords];
            const allWeight = [...JSON.parse(localStorage.getItem(STORAGE_KEYS.WEIGHT_RECORDS) || '[]'), ...newWeightRecords];

            localStorage.setItem(STORAGE_KEYS.FOOD_RECORDS, JSON.stringify(allFood));
            localStorage.setItem(STORAGE_KEYS.BLOOD_SUGAR_RECORDS, JSON.stringify(allBlood));
            localStorage.setItem(STORAGE_KEYS.WEIGHT_RECORDS, JSON.stringify(allWeight));

            showMessage(`成功导入 ${newRecordsCount} 条新记录！`);
            loadHistoryData(); // 刷新页面
        } else {
            showMessage('没有发现可导入的新记录。');
        }
    };
    reader.onerror = () => {
        alert('读取文件时发生错误。');
    };
    reader.readAsText(file, 'UTF-8');
}

function getMealKeyByName(name) {
    const names = {
        '早餐': 'breakfast',
        '上午加餐': 'morning-snack',
        '午餐': 'lunch',
        '下午加餐': 'afternoon-snack',
        '晚餐': 'dinner',
        '晚上加餐': 'evening-snack'
    };
    return names[name] || '';
}

function getBloodSugarTimeKeyByName(name) {
    const names = {
        '空腹': 'fasting',
        '早餐后2小时': 'breakfast-2h',
        '中餐后2小时': 'lunch-2h',
        '晚餐后2小时': 'dinner-2h'
    };
    return names[name] || '';
}

