export default function WhyChooseUs() {
  return (
    <section className="py-12 px-6 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
        {/* Left Image Section */}
        <div className="relative space-y-8 md:space-y-10">
          {/* Main Image Card with Overlaid Secondary Card */}
          <div className="relative">
            {/* Main Image Card */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-[280px] md:h-[450px] relative">
                <img
                  src="/ico-image1.png"
                  alt="Mountain View Suite - Luxury accommodation with panoramic mountain views"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/10"></div>
              </div>
            </article>
            
            {/* Secondary Image Card - Absolutely Positioned */}
            <article className="absolute top-[5%] md:top-[10%] -right-[10%] md:-right-[20%] bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group w-[45%] md:w-[50%] z-10 transform hover:translate-x-1 hover:-translate-y-1">
              <div className="h-[140px] md:h-[154px] relative">
                <img
                  src="/ico-image2.png"
                  alt="Luxury Resort - Premium resort with mountain views and amenities"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/10"></div>
              </div>
              <div className="p-3 md:p-4 bg-white/95 backdrop-blur-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-900 text-sm md:text-base group-hover:text-blue-600 transition-colors duration-300">Luxury Resort</h3>
                  <div className="flex items-center bg-blue-50 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full" title="Rating: 4.8 out of 5">
                    <span className="text-blue-500" aria-hidden="true">★</span>
                    <span className="text-xs md:text-sm ml-1 text-blue-700">4.8</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-2.5 leading-relaxed">
                  Experience luxury living with breathtaking mountain views and world-class amenities.
                </p>
                <div className="mt-2 md:mt-3 border-t border-dashed border-gray-200 pt-2 md:pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base font-medium text-gray-900">
                      <span className="text-blue-500">$</span>499
                    </span>
                    <div className="flex items-center text-blue-600 bg-blue-50 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full group-hover:bg-blue-100 transition-colors duration-300" title="Location: India">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-xs md:text-sm ml-1 md:ml-1.5">India</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Right Content Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="text-blue-500">Why</span> Choose Us
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
            Tempore Facere Doloribus Et Aut. Id Maiores Esse Accusantium Laborum Ipsum. Quis Quaerunt Non Assumenda Quam Totam.
          </p>

          {/* Benefits List */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="min-w-[24px]">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 text-sm" aria-hidden="true">✓</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">Assumenda Nobis Sit Deserunt Dolorem Reprehenderit Occaecati Quibusdam.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="min-w-[24px]">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 text-sm" aria-hidden="true">✓</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">Beatae Aut Beatae Sed Aliquid Ut Accusamus Vel.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="min-w-[24px]">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 text-sm" aria-hidden="true">✓</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">Dolores Qui Nihil Occaecati Ducimus Fugit Aut Praesentium.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="min-w-[24px]">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 text-sm" aria-hidden="true">✓</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">Necessitatibus Ut Culpa Maiores Debitis Maiores Earum Maiores Eum Sed Vel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}