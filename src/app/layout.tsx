import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Geist, Geist_Mono, Fraunces } from 'next/font/google';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['italic', 'normal'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.aurra.us'),
  title: {
    default: 'Aurra Docs',
    template: '%s | Aurra Docs',
  },
  description: 'Memory infrastructure for AI agents. Bi-temporal, citation-grounded, with auto-supersession.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen font-sans">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
