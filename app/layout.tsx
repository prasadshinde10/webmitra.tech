import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import GlobalCanvas from "@/components/3d/GlobalCanvas";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://webmitra.tech"),
  title: "WebMitra.Tech | Next-Gen Software Solutions & Technology Partner",
  description: "WebMitra builds custom enterprise software, AI/ML solutions, and automated workflows. Focus on your business while we handle the technology.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/logo-icon.png",
  },
  keywords: [
    "WebMitra",
    "WebMitra.Tech",
    "Next-Gen Software Solutions",
    "Custom Software",
    "Process Automation",
    "AI Machine Learning",
    "Custom ERP",
    "Chhatrapati Sambhajinagar",
    "Maharashtra"
  ],
  authors: [{ name: "Prasad Shinde", url: "https://webmitra.tech" }],
  openGraph: {
    title: "WebMitra.Tech | Next-Gen Software Solutions",
    description: "Architecting custom software, intelligent AI systems, and automated workflows.",
    url: "https://webmitra.tech",
    siteName: "WebMitra.Tech",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo-full.png", width: 537, height: 259, alt: "WebMitra.Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebMitra.Tech | Next-Gen Software Solutions",
    description: "Architecting custom software, intelligent AI systems, and automated workflows.",
    images: ["/logo-full.png"],
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-rose-500 selection:text-white min-h-screen transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <GlobalCanvas />
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
