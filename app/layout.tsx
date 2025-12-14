import { ReactNode } from "react";
import './globals.css';
// 1. IMPORT THE FONT: Import Space Mono from next/font/google
import { Space_Mono } from 'next/font/google'; 

// 2. CONFIGURE THE FONT: Define the font variable
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you plan to use
  // We use the default CSS variable name provided by Next.js if no 'variable' key is set, 
  // but using a custom one is safer for global application:
  variable: '--font-space-mono-global', 
});

export const metadata = {
  title: "Nftblaize Portfolio",
  description: "My personal website"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // 3. APPLY FONT CLASS: Attach the variable to the <html> tag
    <html lang="en" className={`${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}