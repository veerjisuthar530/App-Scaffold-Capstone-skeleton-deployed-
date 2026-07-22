import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "App Scaffold",
  description: "Foundations scaffold — routes, layout, and design tokens.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="page-shell py-8 sm:py-10">{children}</main>
        <footer className="page-shell py-8 text-sm text-muted border-t border-border mt-12">
          Built with Next.js + Tailwind · Foundations phase
        </footer>
      </body>
    </html>
  );
}
