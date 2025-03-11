import Image from 'next/image';
import SearchFlights from './SearchFlights';

const HeroSection = () => {
  return (
    <div className="relative h-[600px] lg:h-[700px]">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Travel Hero"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center text-white space-y-6 mb-12">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Top Flights - Hassle-Free Booking - Smooth Travels!
          </h4>
          
        </div>

        {/* Search Form */}
        <div className="w-full max-w-6xl mx-auto">
          <SearchFlights />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;