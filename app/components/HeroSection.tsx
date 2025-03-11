import Image from 'next/image';
import SearchFlights from './SearchFlights';

/**
 * HeroSection Component
 * 
 * A full-width hero section featuring a background image with search functionality.
 * 
 * Features:
 * - Responsive height (600px mobile, 700px desktop)
 * - Full-width hero image with semi-transparent overlay (30% opacity)
 * - Centered content layout with heading
 * - Integrated SearchFlights component
 * - Z-index layering for proper content stacking
 * 
 * Design:
 * - Uses /public/hero.png as background
 * - Semi-transparent black overlay for better text contrast
 * - Responsive typography with modern styling
 * 
 * @returns {JSX.Element} The rendered HeroSection component
 */
const HeroSection = () => {
  return (
    <div className="relative h-[600px] lg:h-[700px]">
      {/* Hero Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Travel Hero"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Semi-transparent overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered content container with z-index positioning */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center text-white space-y-6 mb-12">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Top Flights - Hassle-Free Booking - Smooth Travels!
          </h4>
        </div>

        {/* Search Form with white background */}
        <div className="w-full max-w-6xl mx-auto">
          <SearchFlights />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;