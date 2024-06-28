import { cn } from "@/lib/utils";

import { Dock } from "@/components/dock/dock";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./provider";

const beVietnam = Be_Vietnam_Pro({
  display: "swap",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Alfred Mouelle",
  description: "Mon portfolio personnel et professionnel.",
  authors: {
    name: "Alfred Mouelle",
    url: "https://alfred-mouelle.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body className={cn("h-full bg-background", beVietnam.className)}>
        <AppProvider>
          <div className="flex h-full flex-col">
            <div className="flex-1">{children}</div>
            <Dock />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
