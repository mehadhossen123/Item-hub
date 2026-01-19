import { Geist, Geist_Mono } from "next/font/google";
import NextAuthProvider from "../provider/NextAuthProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard - ItemHub",
  description: "Dashboard layout",
};

export default function DashboardLayout({ children }) {
  return (
    <NextAuthProvider>
      {/* Dashboard-specific wrapper */}
      <main
        className={`${geistSans.variable} ${geistMono.variable} `}
      >
        {children}
      </main>
    </NextAuthProvider>
  );
}
