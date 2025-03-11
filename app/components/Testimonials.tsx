 /**
 * Testimonials Component
 * 
 * A modern testimonial section showcasing customer reviews with a clean,
 * responsive design following the project's white background theme.
 * 
 * Features:
 * - Three-column responsive grid layout
 * - Interactive hover effects on cards
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
export default function Testimonials() {
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
    }
  ];

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header with title and description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            What Our <span className="text-red-500">Travelers</span> Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover why thousands of travelers choose us for their journeys
          </p>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}