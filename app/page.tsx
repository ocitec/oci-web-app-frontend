import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendingDestinations from "./components/TrendingDestinations";
import LatestTours from "./components/LastestPackages";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <HeroSection />
      <div className="flex-1">
        <TrendingDestinations />
        <LatestTours />
        <WhyChooseUs />
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
