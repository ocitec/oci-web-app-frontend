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
import { FaCirclePlay } from "react-icons/fa6";

export default function TrendingDestinations() {
    // Destination data with high-quality Unsplash images
    const destinations = [
      { name: 'Jakarta', image: 'https://images.unsplash.com/photo-1555043722-452d0e9abf39' },
      { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c' },
      { name: 'London', image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be' },
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section header with title and description */}
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          <span className="text-yellow-500 font-bold">Trending</span> Destinations
          </h2>
          <p className="mt-4 text-xs text-gray-600 max-w-2xl whitespace-nowrap overflow-hidden text-ellipsis">Tempora Faever Deloribus Id Aut. Es Melores Este Accusantium Laboriosam. Quos Commodi Non Assumenda Quam Illum. Id Omnis Saepe Corrupti Incidunt Qui Sed Delectus. Eaque Minas Ducimus.</p>
        </div>
  
        {/* Responsive destination cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="relative group bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 rounded-3xl"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-200 ease-in-out rounded-3xl"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-200" />
                
                {/* Destination name with enhanced styling */}
                <div className="absolute top-1/2 -translate-y-full left-0 right-0 text-center px-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-black-800 tracking-wider font-sans inline-block bg-white/90 backdrop-blur-md px-8 py-3 rounded-[20px] shadow-xl border-2 border-white/50 transition-all duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:bg-white">
                    {destination.name}
                  </h3>
                </div>

                {/* Play button overlay for Jakarta */}
                {destination.name === "Jakarta" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-200">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                        <FaCirclePlay className="w-8 h-8 text-gray-800 ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }