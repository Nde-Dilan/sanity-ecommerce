// import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "End Shop",
  description: "Your one stop shop for all your audio needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className={`main-container`}>{children}</main>
      <Footer />
      </body>

    </html>
  );
}
