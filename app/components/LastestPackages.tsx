export default function TourPackages() {
    const packages = [
      {
        id: 1,
        image: "/images/tour1.jpg",
        title: "Culpa Est Similique",
        rating: 4.2,
        location: "Malaysia",
      },
      {
        id: 2,
        image: "/images/tour2.jpg",
        title: "Culpa Est Similique",
        rating: 4.2,
        location: "Switzerland",
      },
      {
        id: 3,
        image: "/images/tour3.jpg",
        title: "Culpa Est Similique",
        rating: 4.2,
        location: "Thailand",
      },
      {
        id: 4,
        image: "/images/tour4.jpg",
        title: "Culpa Est Similique",
        rating: 4.2,
        location: "Bali, Indonesia",
      },
    ];
  
    return (
      <section className="py-12 px-6 md:px-16 bg-white">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-900">
          <span className="text-yellow-500 font-bold">Latest</span> Tour Packages
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl">
          Temporibus facere doloribus et aut. Id maiores esse accusantium
          laborum...
        </p>
  
        {/* Tour Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-500">{pkg.location}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-gray-700 text-sm ml-1">{pkg.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  