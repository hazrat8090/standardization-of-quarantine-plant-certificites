"use client";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import "../i18next/i18n.ts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html>
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}
