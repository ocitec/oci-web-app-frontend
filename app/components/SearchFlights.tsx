'use client';

import { useState } from 'react';
import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

/**
 * SearchFlights Component
 * 
 * A comprehensive flight search form with modern UI and interactive features.
 * Integrated into the hero section with a white semi-transparent background.
 * 
 * Features:
 * - Round-trip/one-way toggle
 * - Origin and destination inputs
 * - Date selection with calendar interface
 * - Traveler count and cabin class selection
 * - Responsive design with Tailwind CSS
 * 
 * State Management:
 * - Manages form state for all inputs
 * - Handles form submission with data collection
 * - Dynamic return date field based on trip type
 * 
 * Styling:
 * - Semi-transparent white background (90% opacity)
 * - Backdrop blur effect for depth
 * - Yellow accent colors for primary actions
 * - Modern rounded corners and subtle shadows
 * 
 * @returns {JSX.Element} The rendered SearchFlights component
 */
const SearchFlights = () => {
  // Form state management
  const [tripType, setTripType] = useState('roundtrip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travellers, setTravellers] = useState('1');
  const [cabinClass, setCabinClass] = useState('Economy');

  /**
   * Handles form submission and collects all form data
   * @param {React.FormEvent} e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      tripType,
      from,
      to,
      departureDate,
      returnDate,
      travellers,
      cabinClass,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-[24px] shadow-lg p-3">
      {/* Top Navigation Bar - Trip type and passenger options */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#FDB813] rounded-lg">
          <svg
            className="w-3 h-3 -rotate-45"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 14.9L12.71 6.61C12.617 6.517 12.5064 6.44375 12.3846 6.39551C12.2627 6.34727 12.132 6.32481 12 6.32481C11.868 6.32481 11.7373 6.34727 11.6154 6.39551C11.4936 6.44375 11.383 6.517 11.29 6.61L3 14.9L4.4 16.3L11 9.7V21H13V9.7L19.6 16.3L21 14.9Z" />
          </svg>
          <span className="text-[10px] font-medium">Flights</span>
        </div>
        
        {/* Trip type toggle button */}
        <button
          type="button"
          className="flex items-center gap-1 px-2 py-1.5 bg-gray-100/70 rounded-lg text-[10px] text-gray-600 hover:bg-gray-100/90 transition-colors"
          onClick={() => setTripType(tripType === 'roundtrip' ? 'return' : 'roundtrip')}
        >
          {tripType === 'roundtrip' ? 'Return' : 'One Way'}
          <ChevronDownIcon className="w-2 h-2" />
        </button>
        
        {/* Cabin class selector */}
        <button
          type="button"
          className="flex items-center gap-1 px-2 py-1.5 bg-gray-100/70 rounded-lg text-[10px] text-gray-600 hover:bg-gray-100/90 transition-colors"
          onClick={() => {}}
        >
          {cabinClass}
          <ChevronDownIcon className="w-2 h-2" />
        </button>
        
        {/* Traveller count selector */}
        <button
          type="button"
          className="flex items-center gap-1 px-2 py-1.5 bg-gray-100/70 rounded-lg text-[10px] text-gray-600 hover:bg-gray-100/90 transition-colors"
          onClick={() => {}}
        >
          {travellers} Traveller{travellers !== '1' && 's'}
          <ChevronDownIcon className="w-2 h-2" />
        </button>
      </div>

      {/* Main search form with origin, destination, and dates */}
      <div className="flex items-center gap-2">
        {/* Origin input field */}
        <div className="flex-1">
          <div className="relative">
            <label className="absolute left-3 top-2 text-[10px] text-gray-500 font-medium">From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full h-[52px] pt-5 pb-1.5 px-3 bg-gray-50/70 rounded-lg focus:ring-1 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-[10px] placeholder:text-gray-400"
              placeholder="Enter city or airport"
              required
            />
          </div>
        </div>

        {/* Destination input field */}
        <div className="flex-1">
          <div className="relative">
            <label className="absolute left-3 top-2 text-[10px] text-gray-500 font-medium">To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full h-[52px] pt-5 pb-1.5 px-3 bg-gray-50/70 rounded-lg focus:ring-1 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-[10px] placeholder:text-gray-400"
              placeholder="Enter city or airport"
              required
            />
          </div>
        </div>

        {/* Departure date picker */}
        <div className="flex-1">
          <div className="relative">
            <label className="absolute left-3 top-2 text-[10px] text-gray-500 font-medium">Departure</label>
            <input
              type="text"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full h-[52px] pt-5 pb-1.5 px-3 bg-gray-50/70 rounded-lg focus:ring-1 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-[10px] placeholder:text-gray-400"
              placeholder="Add date"
              required
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => !e.target.value && (e.target.type = 'text')}
            />
            <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3" />
          </div>
        </div>

        {/* Conditional return date picker */}
        {tripType === 'roundtrip' && (
          <div className="flex-1">
            <div className="relative">
              <label className="absolute left-3 top-2 text-[10px] text-gray-500 font-medium">Return</label>
              <input
                type="text"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full h-[52px] pt-5 pb-1.5 px-3 bg-gray-50/70 rounded-lg focus:ring-1 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-[10px] placeholder:text-gray-400"
                placeholder="Add date"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
              />
              <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3" />
            </div>
          </div>
        )}

        {/* Search submit button */}
        <button
          type="submit"
          className="h-[52px] px-4 bg-[#FDB813] text-white rounded-lg text-[10px] font-medium hover:bg-[#e5a711] transition-colors whitespace-nowrap"
        >
          Search Flights
        </button>
      </div>
    </form>
  );
};

export default SearchFlights;