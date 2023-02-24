import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import { Inter } from "@next/font/google";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Statistics />
      <Testimonials />
    </>
  );
}
