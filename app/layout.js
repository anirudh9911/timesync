import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "TimeSync",
  description: "Meeting Scheduling App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header></Header>
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          <footer className="bg-blue-100 py-12">
            <div className="container mx-auto px-4 text-center  text-gray-500">
              <p >Powered by Anirudh</p>
            </div>
          </footer>
          {/* Footer */}
        </body>
      </html>
    </ClerkProvider>
  );
}