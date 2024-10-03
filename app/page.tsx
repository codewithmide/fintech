import HeroSection from "./components/Hero";
import Features from "./components/Features";
import ProductSection from "./components/Product";
import JoinSection from "./components/Join";
import StartSection from "./components/Started";
import FooterSection from "./components/Footer";

export default function Home() {
  return (
    <main className="center flex-col w-screen">
      <HeroSection /> 
      <Features />
      <ProductSection />
      <JoinSection />
      <StartSection />
      <FooterSection />
    </main>
  );
}
