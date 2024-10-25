import Image from "next/image";
import LandingPageNavbar from "./components/Navbar/LandingPageNavbar";
import HeroSection from "./components/LandingPage/HeroSection";
import StatsSection from "./components/LandingPage/StatsSection";

export default function Home() {
  return (
    <>
    <LandingPageNavbar/>
    <HeroSection/>
    {/* <StatsSection/> */}
    </>
  );
}
