import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "End Shop",
  description: "Your one stop shop for all your audio needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavBar />

      <main className={`main-container ${inter.className}`}>{children}</main>

      <Footer />
    </html>
  );
}
