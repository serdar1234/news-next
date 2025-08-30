import { ReactNode } from "react";
import "./globals.scss";
import MainHeader from "@/components/main-header";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
