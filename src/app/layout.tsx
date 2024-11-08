import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
export const metadata: Metadata = {
  title: "Swyftin Chat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
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
