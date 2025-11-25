# 合同商务部知识库系统

一个专为公司内部使用的静态网站，提供合同风险管理知识库、典型案例学习和常见问题解答。

## 技术栈

- **框架**: Vite + React 18 + TypeScript
- **样式**: Tailwind CSS v3.4+
- **路由**: React Router v6.26+ (createBrowserRouter)
- **图标**: Lucide React
- **Markdown**: React Markdown
- **响应式**: 完全移动端适配
- **深色模式**: 自动跟随系统设置

## 功能特性

### 1. 首页 (/)
- 部门欢迎横幅
- 部门简介和核心职责展示
- 团队成员卡片展示
- 快速入口导航（规则库、案例库、FAQ）

### 2. 部门介绍 (/about)
- SVG 组织架构图（树形结构）
- 各部门职责详细说明
- 联系方式（邮箱、企微、钉钉）

### 3. 风险规则库 (/rules)
- 左侧可折叠目录树导航
- 右侧 Markdown 内容渲染
- 实时搜索功能
- 内置 15 条合同风险规则：
  - 付款条款（3条）
  - 违约责任（2条）
  - 保密条款（2条）
  - 知识产权（2条）
  - 争议解决（2条）
  - 合同期限（1条）
  - 不可抗力（2条）
  - 其他（1条）

### 4. 风险案例库 (/cases)
- 卡片列表展示案例
- Modal 弹窗查看完整案例详情
- 按风险类型筛选（付款、违约、知识产权、保密、争议解决、质量）
- 内置 10 个真实案例，包含：
  - 案号、风险类型、损失金额
  - 案件背景、问题条款、后果、教训、改进措施

### 5. 常见问题 FAQ (/faq)
- 手风琴式折叠面板
- 按分类组织（合同审核、风险管理、流程制度、法律咨询）
- 内置 12 个常见问题及详细解答

## 开发指南

### 安装依赖

\`\`\`bash
cd contract-knowledge-base
npm install
\`\`\`

### 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

访问 http://localhost:5173

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

### 预览生产构建

\`\`\`bash
npm run preview
\`\`\`

## 项目结构

\`\`\`
contract-knowledge-base/
├── src/
│   ├── components/
│   │   └── Layout.tsx          # 布局组件（导航栏+页脚）
│   ├── pages/
│   │   ├── Home.tsx            # 首页
│   │   ├── About.tsx           # 部门介绍
│   │   ├── Rules.tsx           # 风险规则库
│   │   ├── Cases.tsx           # 风险案例库
│   │   └── FAQ.tsx             # 常见问题
│   ├── data/
│   │   ├── rules.ts            # 规则数据
│   │   └── cases.ts            # 案例数据
│   ├── App.tsx                 # 路由配置
│   ├── main.tsx                # 应用入口
│   └── index.css               # 全局样式
├── tailwind.config.js          # Tailwind 配置
├── postcss.config.js           # PostCSS 配置
├── vite.config.ts              # Vite 配置
└── package.json
\`\`\`

## 响应式设计

- **移动端** (< 768px): 汉堡菜单，单列布局
- **平板** (768px - 1024px): 双列布局
- **桌面端** (> 1024px): 三列布局

## 深色模式

系统自动检测用户系统偏好设置：
- 使用 Tailwind 的 `dark:` 前缀
- 配置: `darkMode: 'media'` in tailwind.config.js

## 自定义内容

### 添加新规则

编辑 `src/data/rules.ts`，在 `rules` 数组中添加新规则对象：

\`\`\`typescript
{
  id: 'rule-016',
  title: '新规则标题',
  category: 'payment', // 分类ID
  content: \`# Markdown 格式的规则内容\`
}
\`\`\`

### 添加新案例

编辑 `src/data/cases.ts`，在 `cases` 数组中添加新案例对象。

### 修改团队成员

编辑 `src/pages/Home.tsx` 中的 `teamMembers` 数组。

## 部署说明

### 静态部署

构建后将 `dist` 目录部署到任何静态托管服务：
- Nginx
- Apache
- 公司内网服务器

### 注意事项

1. 使用 `createBrowserRouter`，需要服务器配置 URL 重写
2. 确保所有路由都指向 `index.html`

#### Nginx 配置示例

\`\`\`nginx
location / {
    try_files $uri $uri/ /index.html;
}
\`\`\`

## 浏览器兼容性

- Chrome/Edge (最新版本)
- Firefox (最新版本)
- Safari (最新版本)

## License

内部使用，未开源

## 维护

如需更新内容，请联系：
- 邮箱: contract@company.com
- 内线: 8888
