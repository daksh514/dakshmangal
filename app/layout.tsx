import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dakshmangal.vercel.app"),
  title: "Daksh Mangal - Portfolio",
  description: "Hi, this is the portfolio of a teen web developer, Daksh Mangal",
  keywords: "daksh mangal, daksh mangal portfolio, daksh mangal web developer, daksh mangal web developer portfolio, daksh mangal portfolio website, daksh mangal web developer portfolio website, daksh mangal portfolio website design, daksh mangal portfolio website design, daksh mangal portfolio design, daksh mangal portfolio design, daksh",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
