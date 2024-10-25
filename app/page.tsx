import Image from "next/image";
import LandingPageNavbar from "./components/Navbar/LandingPageNavbar";
import HeroSection from "./components/LandingPage/HeroSection";
import StatsSection from "./components/LandingPage/StatsSection";
import ExploreSection from "./components/LandingPage/ExploreSection";
import AskUniversity from "./components/LandingPage/AskUniversity";

export default function Home() {
  return (
    <>
    <LandingPageNavbar/>
    <HeroSection/>
    <StatsSection/>
    <ExploreSection/>
    <AskUniversity/>
    </>
  );
}
