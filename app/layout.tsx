import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Or Montserrat if you changed it
import './globals.css';
import { Sidebar } from '@/components/layout/Sidebar';
import { ThemeProvider } from './providers'; // Import the client-side provider

// You can use Inter or Montserrat based on your preference.
// The project was initially set up with Inter.
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TDI x Annotate',
  description: 'Intelligent Annotation Platform Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 'suppressHydrationWarning' is recommended for next-themes to avoid warnings
    // because the 'dark' class is added on the client after the initial server render.
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen w-full">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}