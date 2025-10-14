# jiangwei-heartbeat
Render 多节点防休眠心跳仪式系统
# ⚡ 江威防休眠心跳仪式

Render 免费服务会在 15 分钟无流量后自动休眠。本项目通过 Cloudflare Pages 页面，每 10 分钟自动访问 Render 后端 `/healthz` 路径，保持服务活跃。

## ✅ 功能亮点

- 自动心跳，防止 Render 休眠
- 精准判断服务是否运行
- 多节点轮询，支持 `/ws`, `/videos`, `/proxy`
- Cloudflare Pages 零成本部署

## 📁 文件结构

- `index.html`：主页面，展示心跳状态
- `jiangwei-multi.js`：轮询逻辑，每 10 分钟执行一次
- `README.md`：仪式说明与部署指南

## 🚀 快速部署

1. 创建 GitHub 仓库 `jiangwei-heartbeat`
2. 上传上述文件
3. 打开 Cloudflare Pages → 连接仓库 → 部署
4. 绑定自定义域名（如 `heartbeat.dpdns.org`）

## 🏆 仪式目标

保持 Render 后端服务永不休眠  
让每一次心跳都成为仪式的回响
