import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import GlobalCanvas from "@/components/3d/GlobalCanvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebMitra Tech Solutions | 3D Immersive",
  description: "Innovative software solutions visualized in 3D.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased overflow-x-hidden selection:bg-primary selection:text-primary-foreground`}>
        <GlobalCanvas />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
