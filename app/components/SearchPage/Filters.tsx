'use client';

import { useState } from 'react';
import TimePicker from './TimePicker';

const Filters = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [stops, setStops] = useState<string[]>([]);
  const [airlines, setAirlines] = useState<string[]>([]);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
      
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Price Range</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB813]"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Stops</h3>
        <div className="space-y-2">
          {['Non-stop', '1 Stop', '2+ Stops'].map((stop) => (
            <label key={stop} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={stops.includes(stop)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setStops([...stops, stop]);
                  } else {
                    setStops(stops.filter((s) => s !== stop));
                  }
                }}
                className="w-4 h-4 accent-[#FDB813]"
              />
              <span className="text-gray-700">{stop}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Departure Time</h3>
        <div className="space-y-4">
          <TimePicker label="Earliest Departure" />
          <TimePicker label="Latest Departure" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Airlines</h3>
        <div className="space-y-2">
          {['Emirates', 'Qatar Airways', 'Turkish Airlines', 'Etihad', 'British Airways', 'Ethiopian Airlines'].map((airline) => (
            <label key={airline} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={airlines.includes(airline)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setAirlines([...airlines, airline]);
                  } else {
                    setAirlines(airlines.filter((a) => a !== airline));
                  }
                }}
                className="w-4 h-4 accent-[#FDB813]"
              />
              <span className="text-gray-700">{airline}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        className="w-full py-2 bg-[#9c6f03] text-white rounded-lg font-medium hover:bg-[#e5a711] transition-colors"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
