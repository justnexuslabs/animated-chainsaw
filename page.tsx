import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/src/components/Header";
import { MobileBottomNav } from "@/src/components/MobileBottomNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "DonLien.xyz | Project DONLIEN",
  description:
    "The official home of Project DONLIEN, the LIENIVERSE, Genesis, and the LIENITY."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <MobileBottomNav />
      </body>
    </html>
  );
}
