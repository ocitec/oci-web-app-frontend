import { IoLocationSharp } from "react-icons/io5";

interface CheckmarkItemProps {
  text: string;
  index: number;
}

const CheckmarkItem = ({ text, index }: CheckmarkItemProps) => (
  <div className="flex items-start gap-3 group" role="listitem" aria-posinset={index + 1} aria-setsize={benefitItems.length}>
    <div className="min-w-[24px]">
      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center transition-colors duration-300 group-hover:bg-red-200" aria-hidden="true">
        <span className="text-red-600 text-sm">✓</span>
      </div>
    </div>
    <p className="text-gray-700 text-[15px] md:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-900">{text}</p>
  </div>
);

const benefitItems = [
  "Luxury accommodations with panoramic mountain views and premium amenities.",
  "24/7 concierge service with personalized travel assistance.",
  "Exclusive access to local experiences and guided tours.",
  "Flexible booking options with complimentary upgrades when available."
] as const;

export default function WhyChooseUs() {
  return (
    <section className="py-12 px-6 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
        {/* Left Image Section */}
        <div className="relative space-y-8 md:space-y-10">
          {/* Main Image Card with Overlaid Secondary Card */}
          <div className="relative w-[60%]">
            {/* Main Image Card */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group w-[120%]">
              <div className="h-[280px] md:h-[450px] relative">
                <img
                  src="/ico-image1.png"
                  alt="Mountain View Suite - Luxury accommodation with panoramic mountain views"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-[10px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/10 rounded-[10px]"></div>
              </div>
            </article>
            
            {/* Secondary Image Card - Absolutely Positioned */}
            <article className="absolute top-[5%] md:top-[10%] -right-[30%] md:-right-[40%] bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group w-[54%] md:w-[60%] z-10 transform hover:translate-x-1 hover:-translate-y-1">
              <div className="h-[100px] md:h-[110px] relative m-2">
                <img
                  src="/ico-image2.png"
                  alt="Luxury Resort - Premium resort with mountain views and amenities"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-[10px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/10 rounded-[10px]"></div>
              </div>
              <div className="p-2 md:p-3 bg-white/95 backdrop-blur-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-900 text-xs md:text-sm group-hover:text-gray-600 transition-colors duration-300">Mountain Resort</h3>
                  <div className="flex items-center bg-gray-100 px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-full" title="Rating: 4.8 out of 5">
                    <span className="text-yellow-500" aria-hidden="true">★</span>
                    <span className="text-xs md:text-sm ml-0.5 text-gray-600">4.8</span>
                  </div>
                </div>
                <p className="text-[10px] md:text-xs text-gray-600 mt-1.5 md:mt-2 leading-relaxed line-clamp-2">
                  Luxury mountain retreat with panoramic views.
                </p>
                <div className="mt-1.5 md:mt-2 border-t border-dashed border-gray-200 pt-1.5 md:pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm font-medium text-gray-900">
                      <span className="text-gray-600">$</span>499 <span className="text-[11px] md:text-xs text-gray-600 ml-0.5 md:ml-1">/Night</span>
                    </span>
                    <div className="flex items-center text-gray-600 bg-gray-100 px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-full group-hover:bg-gray-100 transition-colors duration-300" title="Location: India">
                      <IoLocationSharp className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      <span className="text-[11px] md:text-xs ml-0.5 md:ml-1">India</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Right Content Section */}
        <div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
             <span className="text-red-500">Why</span> Choose Us
          </h2>
          <p className="text-gray-600 mt-2 text-[30px] md:text-xs leading-relaxed transition-colors duration-300 hover:text-gray-700">
            Experience unparalleled luxury and personalized service in our mountain resorts. Discover why travelers choose us for their unforgettable getaways.
          </p>

          {/* Benefits List */}
          <div className="mt-8 space-y-4" role="list" aria-label="Our Benefits">
            {benefitItems.map((text, index) => (
              <CheckmarkItem key={index} text={text} index={index} />
            ))}
          </div>

          <p className="text-gray-600 mt-2 text-[15px] md:text-xs leading-relaxed transition-colors duration-300 hover:text-gray-700">
            Book your stay today and experience the perfect blend of luxury, comfort, and adventure in our mountain resorts. Our dedicated team ensures every moment of your stay exceeds expectations.
          </p>
        </div>
      </div>
    </section>
  );
}