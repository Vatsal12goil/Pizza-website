import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import SessionProviderWrapper from './components/SessionProviderWrapper'; // ⬅️ Import this

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Dashboard',
  description: 'Next.js + Google OAuth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper> {/* ⬅️ Wrap the app */}
          <Header />
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
