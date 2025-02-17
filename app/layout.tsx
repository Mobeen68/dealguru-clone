import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./custom.css";
import SideNav from "./ui/sidenav/SideNav";
import Footer from "./ui/footer/Footer";
import { Provider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | DealGuru.se",
    default:
      "DealGuru.se - All deals, discounts and offers in one place | DealGuru.se",
  },
  description: "Created by Mobeen Ejaz Ahmad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          background: "#f4f4f5",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="flex h-screen min-h-screen flex-col">
          <header className="w-full h-16 bg-white">
            <Provider>
              <SideNav />
            </Provider>
          </header>
          <main className="relative flex-grow main">
            <Provider>{children}</Provider>
          </main>
          <footer
            className="border-b-4 border-heading 3xl:mt-20 pt-2.5 lg:pt-0 2xl:pt-2 bg-white lg:px-10 px-2"
            style={{
              paddingTop: "30px",
            }}
          >
            <Provider>
              <Footer />
            </Provider>
          </footer>
        </div>
      </body>
    </html>
  );
}
