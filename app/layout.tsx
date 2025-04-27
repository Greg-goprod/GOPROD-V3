import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/ui/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Go-Prod",
  description: "Gestion de production",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.className} flex h-screen bg-background text-foreground transition-colors duration-300 ease-in-out`}
      >
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 fade-in">{children}</main>
      </body>
    </html>
  );
}
