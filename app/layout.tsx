import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'birenyin | 厦门大学 · 个人主页',
  description: 'birenyin（Jiyu Yin），厦门大学博士研究生。研究兴趣包括自然语言处理、知识图谱与医学人工智能。',
  metadataBase: new URL('https://birenyin.github.io'),
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon-64.png', type: 'image/png', sizes: '64x64' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
