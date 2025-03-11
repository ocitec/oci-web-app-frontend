export default function TrendingDestinations() {
    const destinations = [
      { name: 'Jakarta', image: 'https://images.unsplash.com/photo-1555043722-452d0e9abf39' },
      { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c' },
      { name: 'London', image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be' },
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trending Destinations
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Tempora Faever Deloribus Id Aut. Es Melores Este Accusantium Laboriosam. Quos Commodi Non
            Assumenda Quam Illum. Id Omnis Saepe Corrupti Incidunt Qui Sed Delectus. Eaque Minas Ducimus.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`${destination.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={destination.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {destination.name}
                </h3>
                <button className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors duration-200">
                  <span>Explore</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }