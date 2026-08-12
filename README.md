# Yao Zhang — Academic Homepage

张耀（Yao Zhang）的双语个人学术主页，目标地址：

**https://zhangyyy-ai-rs.github.io/**

网站支持中英文切换、深浅色模式、移动端适配，并通过 GitHub Actions 自动发布到 GitHub Pages。

## 首次发布

1. 登录 GitHub，新建一个 **Public** 仓库，名称必须为：

   `zhangyyy-ai-rs.github.io`

2. 创建仓库时不要勾选 README、`.gitignore` 或 License。

3. 解压下载的项目包，在该文件夹中打开终端，依次运行：

   ```bash
   git init
   git add .
   git commit -m "Launch academic homepage"
   git branch -M main
   git remote add origin https://github.com/zhangyyy-ai-rs/zhangyyy-ai-rs.github.io.git
   git push -u origin main
   ```

4. 打开仓库的 **Settings → Pages**，在 **Build and deployment** 的 **Source** 中选择 **GitHub Actions**。

5. 打开仓库的 **Actions** 页面。如果首次任务在启用 Pages 前已经运行失败，点击该任务右上角的 **Re-run all jobs**。

部署完成后，通过 https://zhangyyy-ai-rs.github.io/ 访问网站。首次发布通常需要几分钟。

## 后续修改与更新

主要内容位于：

- `app/page.tsx`：个人简介、研究方向、动态、论文、教育经历及学术服务
- `app/globals.css`：网站样式
- `public/assets/yao-zhang.jpg`：头像

完成修改后运行：

```bash
git add .
git commit -m "Update homepage"
git push
```

GitHub Pages 会自动重新发布。

## 本地预览（可选）

需要 Node.js 22 或更高版本，以及 pnpm 11：

```bash
pnpm install
pnpm dev
```

随后访问 http://localhost:3000/ 。

## 构建检查（可选）

```bash
pnpm run build:pages
```

生成的静态页面位于 `dist/client`。
