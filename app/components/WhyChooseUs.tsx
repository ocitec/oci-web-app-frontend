export default function WhyChooseUs() {
    return (
      <section className="py-12 px-6 md:px-16 bg-white">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image Section */}
          <div className="relative">
            <img
              src="/images/scenic-view.jpg"
              alt="Scenic View"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute top-10 left-10 bg-white rounded-lg shadow-xl p-2">
              <img
                src="/images/tour1.jpg"
                alt="Tour Package"
                className="w-40 h-32 rounded-lg"
              />
              <div className="p-3">
                <h3 className="text-gray-800 font-semibold text-sm">
                  Culpa Est Similique
                </h3>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-gray-700 text-sm ml-1">4.2</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">$920.00 / Night</p>
              </div>
            </div>
          </div>
  
          {/* Right Text Section */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              <span className="text-red-500 font-bold">Why</span> Choose Us
            </h2>
            <p className="text-gray-500 mt-2">
              Temporibus facere doloribus et aut. Id maiores esse accusantium
              laborum...
            </p>
  
            {/* Benefits List */}
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✓</span>
                Assumenda nobis sit deserunt dolorem reprehenderit.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✓</span>
                Labore aut blanditiis id aliquid id accusamus.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✓</span>
                Dolores qui nihil occaecati ducimus fugiat aut praesentium.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✓</span>
                Necessitatibus ut culpa maiores debitis.
              </li>
            </ul>
          </div>
        </div>
  
       
      </section>
    );
  }
  