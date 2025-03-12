/**
 * TrendingDestinations Component
 * 
 * A modern, grid-based showcase of popular travel destinations with interactive
 * image cards and hover effects, following the project's clean design system.
 * 
 * Features:
 * - Responsive three-column grid layout
 * - Interactive image cards with hover animations
 * - Semi-transparent overlay with gradient
 * - Modern typography with responsive sizes
 * - Explore buttons with backdrop blur effect
 * 
 * Design:
 * - White background for main content
 * - Consistent text colors and spacing
 * - Modern hover effects and transitions
 * - High-quality destination images
 * 
 * @returns {JSX.Element} The rendered TrendingDestinations component
 */
export default function TrendingDestinations() {
    // Destination data with high-quality Unsplash images
    const destinations = [
      { name: 'Jakarta', image: 'https://images.unsplash.com/photo-1555043722-452d0e9abf39' },
      { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c' },
      { name: 'London', image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be' },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most sought-after destinations, each offering unique experiences and unforgettable memories
            </p>
          </div>

          {/* Responsive destination cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="relative group overflow-hidden rounded-[32px] bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Destination image with aspect ratio container */}
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* White overlay for destination name */}
                <div className="absolute top-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-full py-3 px-8 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 text-center">
                    {destination.name}
                  </h3>
                </div>
                
                {/* Play button overlay - only if needed */}
                {destination.name === "Jakarta" && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-5 shadow-lg hover:scale-105 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }