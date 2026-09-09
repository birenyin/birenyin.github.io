import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Jiyu Yin | Xiamen University',
  description: 'Jiyu Yin (birenyin), PhD candidate at Xiamen University. Research interests include natural language processing, knowledge graphs, and medical AI.',
  metadataBase: new URL('https://birenyin.github.io'),
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon-v2-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-v2-64.png', type: 'image/png', sizes: '64x64' },
    ],
    apple: [{ url: '/apple-touch-icon-v2.png', sizes: '180x180' }],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
