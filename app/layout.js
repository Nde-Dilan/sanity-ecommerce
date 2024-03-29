// import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components/index";
import { ThemeProvider } from "@/components/theme-providers"

//Importing our context to share it across the whole app
import { StateContext } from "@/context/StateContext";

import { Toaster } from "react-hot-toast";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "End Shop",
  description: "Your one stop shop for all your audio needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className="">
        <StateContext>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <NavBar />
            <main className={`main-container`}>{children}</main>
            <Footer />
          </ThemeProvider>
        </StateContext>
      </body>
    </html>
  );
}
