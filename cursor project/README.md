# 极简个人简历网页

## 完整网页导出（推荐使用 `public/`）

我已把最终可部署的静态站点文件放在 `public/` 目录下：

- `public/index.html`
- `public/favicon.svg`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/404.html`

## 预览方式

- **直接打开**：双击 `public/index.html` 用浏览器打开。
- **本地小服务器（推荐）**：在项目根目录运行：

```bash
python -m http.server 8000
```

然后在浏览器访问 `http://localhost:8000/public/index.html`。

## 上线（GitHub Pages / 任意静态托管）

- 直接把 `public/` 目录作为站点根目录上传/部署即可
- 部署后建议把 `public/sitemap.xml` 里的 `loc` 改成你的真实域名

## Coze 聊天气泡

`public/index.html` 已内置 Coze Web SDK，并配置了你的 `bot_id`。

- **输入方式**：首次打开页面会弹窗提示输入 PAT token，并仅保存在本机浏览器 `localStorage`（不会写进代码文件）。
- **清除 token**：在浏览器控制台执行 `localStorage.removeItem("COZE_PAT_TOKEN")` 后刷新页面即可重新输入。
- **安全提醒**：如果这是公开网页，不建议把 PAT 直接写在前端；更稳妥做法是用后端接口按需下发临时 token。

