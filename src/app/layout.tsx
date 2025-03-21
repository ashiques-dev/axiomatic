import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axiomatic",
  description: "Created by asqe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={(dmSans.className, twMerge("antialiased bg-[#EAEEFE] "))}
      >
        {children}
      </body>
    </html>
  );
}
