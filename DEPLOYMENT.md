# 部署到 Cloudflare Pages 说明

## 项目结构

```
gdm-nutrition-tracker/
├── index.html              # 主页面
├── app.js                  # 前端逻辑
├── functions/              # Cloudflare Functions
│   └── api/
│       └── query.js        # API 处理函数
├── wrangler.toml           # Cloudflare 配置
└── package.json            # 项目依赖（仅用于本地开发）
```

## 最新功能更新

### ✅ 食物交换表页面优化
- 修复了分类标签点击后滚动定位问题
- 添加了平滑滚动到对应分类位置的功能
- 优化了页面初始化和事件绑定逻辑

### ✅ 血糖和体重记录功能增强
- 在血糖记录模态框中添加了日期选择器
- 在体重记录模态框中添加了日期选择器
- 默认选择今天，但允许用户选择任意日期进行记录
- 支持补录历史数据，提高用户体验

## 部署步骤

### 1. 准备项目

确保你的项目包含以下文件：
- `index.html` - 主页面
- `app.js` - 前端逻辑
- `functions/api/query.js` - API 函数
- `wrangler.toml` - 配置文件

### 2. 安装 Wrangler CLI

```bash
npm install -g wrangler
```

### 3. 登录 Cloudflare

```bash
wrangler login
```

### 4. 设置环境变量

在 Cloudflare Dashboard 中设置环境变量：
- 变量名：`ZHIPU_API_KEY`
- 值：你的智谱AI API Key

或者通过命令行设置：
```bash
wrangler secret put ZHIPU_API_KEY
```

### 5. 部署项目

```bash
wrangler pages deploy .
```

### 6. 配置自定义域名（可选）

在 Cloudflare Dashboard 中为你的 Pages 项目配置自定义域名。

## 重要说明

### API 路由
- 前端代码中的 `/api/query` 请求会自动路由到 `functions/api/query.js`
- 无需修改前端代码中的 API 调用路径

### 环境变量
- `ZHIPU_API_KEY` 必须设置为你的智谱AI API Key
- 环境变量在 Cloudflare Dashboard 的 Pages 项目设置中配置

### CORS 配置
- API 函数已包含 CORS 头配置
- 支持跨域请求

### 本地开发
如果需要本地测试，可以使用：
```bash
wrangler pages dev .
```

## 故障排除

### 1. API Key 未配置
错误信息：`API Key is not configured on the server`
解决：确保在 Cloudflare Dashboard 中正确设置了 `ZHIPU_API_KEY` 环境变量

### 2. CORS 错误
错误信息：跨域请求被阻止
解决：检查 API 函数中的 CORS 头配置是否正确

### 3. 函数部署失败
错误信息：函数语法错误
解决：确保 `functions/api/query.js` 符合 Cloudflare Functions 的格式要求

## 性能优化

- Cloudflare Pages 会自动缓存静态资源
- Functions 会在全球边缘节点运行，提供低延迟
- 建议在生产环境中设置适当的缓存策略 