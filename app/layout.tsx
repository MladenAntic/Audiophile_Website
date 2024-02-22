import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Audiophile Website",
  description: "Created by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
