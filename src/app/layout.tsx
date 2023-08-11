import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import TanStackProvider from "@/util/tanstack.providers";
import { GlobalContextProvider } from "@/context/store";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OnlineStore | Shop By Your Choice",
  description: "OnlineStore is a marketplace for ultimate products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackProvider>
          <GlobalContextProvider>
            <Navbar />
            <div className="mt-32">{children}</div>
            <Footer />
          </GlobalContextProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
