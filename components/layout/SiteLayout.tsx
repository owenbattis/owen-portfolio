import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
