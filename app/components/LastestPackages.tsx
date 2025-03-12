import Image from "next/image";

interface TourPackage {
  id: number;
  image: string;
  title: string;
  rating: number;
  location: string;
}

const packages: TourPackage[] = [
  {
    id: 1,
    image: "/ico-image1.png",
    title: "Tropical Paradise Escape",
    rating: 4.92,
    location: "Bali, Indonesia",
  },
  {
    id: 2,
    image: "/ico-image2.png",
    title: "Mountain Adventure",
    rating: 4.88,
    location: "Swiss Alps, Switzerland",
  },
  {
    id: 3,
    image: "/ico-image3.png",
    title: "Cultural Heritage Tour",
    rating: 4.95,
    location: "Kyoto, Japan",
  },
  {
    id: 4,
    image: "/ico-image4.png",
    title: "Coastal Paradise",
    rating: 4.90,
    location: "Amalfi Coast, Italy",
  },
];

export default function TourPackages() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest <span className="text-yellow-500">Tour Packages</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl md:max-w-3xl">
            Discover our handpicked selection of premium travel experiences designed for the modern explorer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-10">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-[#283841]/10 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group"
            >
              <div className="p-4 md:p-5">
                <div className="relative">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={400}
                    height={300}
                    className="w-full h-48 md:h-52 object-cover rounded-lg transform transition-transform group-hover:scale-[1.03]"
                    priority
                  />
                </div>
                <div className="mt-4 md:mt-5 space-y-2 md:space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base md:text-lg font-bold text-gray-600 tracking-wide line-clamp-1 group-hover:text-blue-200 transition-colors">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-yellow-500 text-base md:text-lg">★</span>
                      <span className="text-gray-600 font-semibold ml-1 text-sm md:text-base">{pkg.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {pkg.location} - Experience the beauty of nature with our exclusive tour package.
                  </p>
                  <div className="w-full border-t-2 border-dashed border-gray-400/40 my-3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
