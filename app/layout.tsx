import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'DEAD MARKET — AW/25',
  description: 'Gothic minimalism engineered for presence.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-zinc-950 text-zinc-100 antialiased selection:bg-zinc-700/60'>
        {children}
      </body>
    </html>
  );
}