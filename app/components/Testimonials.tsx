 /**
 * Testimonials Component
 * 
 * A modern testimonial section showcasing customer reviews with a clean,
 * responsive design following the project's white background theme.
 * 
 * Features:
 * - Single-row horizontal scrollable layout
 * - Interactive pagination controls
 * - Star rating display
 * - Profile images with rounded corners
 * - Modern typography with responsive sizes
 * 
 * Design:
 * - Light gray background with white cards
 * - Red accent colors for emphasis
 * - Subtle shadows and hover animations
 * - Consistent spacing and padding
 * 
 * @returns {JSX.Element} The rendered Testimonials component
 */
'use client';
import { useState, useRef } from 'react';

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Testimonial data with customer reviews and ratings
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Adventure Enthusiast",
      image: "/images/testimonial1.jpg",
      content: "The best travel experience I've ever had. The attention to detail and personalized service was exceptional.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Traveler",
      image: "/images/testimonial2.jpg",
      content: "Seamless booking process and outstanding customer support. Made my business trip feel like a vacation.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Family Traveler",
      image: "/images/testimonial3.jpg",
      content: "Perfect for family trips! They thought of everything we needed before we even asked.",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Solo Explorer",
      image: "/images/testimonial4.jpg",
      content: "Incredible destinations and expert guidance. Every trip is a new adventure perfectly planned.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Martinez",
      role: "Luxury Traveler",
      image: "/images/testimonial5.jpg",
      content: "The luxury accommodations and exclusive experiences exceeded all my expectations. Truly first-class service.",
      rating: 5
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Cultural Explorer",
      image: "/images/testimonial6.jpg",
      content: "Their local guides provided incredible insights into each destination's culture and history. Unforgettable experiences!",
      rating: 5
    },
    {
      id: 7,
      name: "Sophie Anderson",
      role: "Photography Enthusiast",
      image: "/images/testimonial7.jpg",
      content: "The carefully planned itineraries took me to the most photogenic locations at the perfect times. A photographer's dream!",
      rating: 5
    },
    {
      id: 8,
      name: "Robert Kim",
      role: "Food & Wine Connoisseur",
      image: "/images/testimonial8.jpg",
      content: "Their culinary tour recommendations were outstanding. Each destination offered amazing local food experiences.",
      rating: 5
    },
    {
      id: 9,
      name: "Emily Parker",
      role: "Eco-Tourism Advocate",
      image: "/images/testimonial9.jpg",
      content: "Appreciated their commitment to sustainable travel. They helped me explore beautiful destinations responsibly.",
      rating: 5
    }
  ];

  const totalPages = Math.ceil(testimonials.length / 3);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth;
    const newPosition = direction === 'left' 
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });

    setCurrentPage(direction === 'left' 
      ? Math.max(currentPage - 1, 1)
      : Math.min(currentPage + 1, totalPages)
    );
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div className="text-center flex-grow">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              What Our <span className="text-red-500">Travelers</span> Say
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover why thousands of travelers choose us for their journeys
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-600 text-sm">{currentPage}/{totalPages}</span>
            <div className="flex gap-1">
              <button 
                onClick={() => handleScroll('left')}
                disabled={currentPage === 1}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                ←
              </button>
              <button 
                onClick={() => handleScroll('right')}
                disabled={currentPage === totalPages}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial cards container with horizontal scroll */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-hidden scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="flex gap-8" style={{ width: `${Math.ceil(testimonials.length / 3) * 100}%` }}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0"
                style={{ width: `calc((100% / ${Math.ceil(testimonials.length / 3) * 3}) - 2rem)` }}
              >
                <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 h-full">
                  {/* Customer profile section */}
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Star rating display */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>

                  {/* Testimonial content */}
                  <p className="text-gray-700 italic">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}