# birenyin的学术个人主页

面向 GitHub Pages 的静态网站。支持单个按钮切换整页中英文，并记住访客的语言选择。

## 本地预览与修改

需要 Node.js 22.13 或更新版本，推荐 Node.js 22 LTS。

```sh
npm ci
npm run dev
```

个人资料与中英文内容在 `lib/profile.ts`，页面在 `app/page.tsx`，样式在 `app/globals.css`。

## 生成 GitHub Pages 文件

```sh
npm run build
```

输出目录为 `dist/client/`。仓库已配置自动发布：向 `main` 提交修改后，GitHub Actions 会构建并发布网站。
在仓库 Settings → Pages 中，发布来源应为 **GitHub Actions**。

如果需要手动发布，也可以把 `dist/client/` 中的文件部署到任意静态网页托管服务。

目标网址：https://birenyin.github.io/

英文直达链接：https://birenyin.github.io/?lang=en

## 内容维护

- 论文仅展示已发表和已录用成果。
- 已录用论文未补写未知卷期和页码。
- 当前博士身份与历史教育经历分别列出，未编写未提供的博士导师、专业或入学月份。
- 网页不包含申请材料和简历的原件。

头像由本人提供。个人图标融合鱼的流线、书页与水纹，以留白隐喻“余”，寓意“鱼游知海，学有余地”。
