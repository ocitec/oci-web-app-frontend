 export default function Testimonials() {
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            What Our <span className="text-red-500">Travelers</span> Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover why thousands of travelers choose us for their journeys
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
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
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              <p className="text-gray-700 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}