'use client';

import { useState } from 'react';
import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { IoAirplane } from "react-icons/io5";

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
    <form onSubmit={handleSubmit} className="w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-[24px] shadow-lg p-8 -translate-y-full relative z-20">
      {/* Top Navigation Bar - Trip type and passenger options */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#FDB813] rounded-lg">
          <IoAirplane className="w-4 h-4 -rotate-45" />
          <span className="text-sm font-medium">Flights</span>
        </div>
        
        {/* Trip type toggle button */}
        <button
          type="button"
          className="flex items-center gap-1 px-3 py-2 bg-gray-100/70 rounded-lg text-sm text-gray-600 hover:bg-gray-100/90 transition-colors"
          onClick={() => setTripType(tripType === 'roundtrip' ? 'return' : 'roundtrip')}
        >
          {tripType === 'roundtrip' ? 'Return' : 'One Way'}
          <ChevronDownIcon className="w-4 h-4" />
        </button>
        
        {/* Cabin class selector */}
        <button
          type="button"
          className="flex items-center gap-1 px-3 py-2 bg-gray-100/70 rounded-lg text-sm text-gray-600 hover:bg-gray-100/90 transition-colors"
          onClick={() => {}}
        >
          {cabinClass}
          <ChevronDownIcon className="w-4 h-4" />
        </button>
        
        {/* Traveller count selector */}
        <button
          type="button"
          className="flex items-center gap-1 px-3 py-2 bg-gray-100/70 rounded-lg text-sm text-gray-600 hover:bg-gray-100/90 transition-colors"
          onClick={() => {}}
        >
          {travellers} Traveller{travellers !== '1' && 's'}
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Main search form with origin, destination, and dates */}
      <div className="flex items-center gap-4">
        {/* Origin input field */}
        <div className="flex-1">
          <label className="block mb-1.5 text-bold text-gray-600 font-bold">From</label>
          <div className="relative">
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full h-[50px] px-4 py-2 bg-gray-50/70 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-base placeholder:text-gray-400"
              placeholder="Enter city or airport"
              required
            />
          </div>
        </div>

        {/* Destination input field */}
        <div className="flex-1">
          <label className="block mb-1.5 text-bold text-gray-600 font-bold">To</label>
          <div className="relative">
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full h-[50px] px-4 py-2 bg-gray-50/70 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-base placeholder:text-gray-400"
              placeholder="Enter city or airport"
              required
            />
          </div>
        </div>

        {/* Departure date picker */}
        <div className="flex-1">
          <label className="block mb-1.5 text-bold text-gray-600 font-bold">Departure</label>
          <div className="relative">
            <input
              type="text"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full h-[50px] px-4 py-2 bg-gray-50/70 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-base placeholder:text-gray-400"
              placeholder="Add date"
              required
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => !e.target.value && (e.target.type = 'text')}
            />
            <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Conditional return date picker */}
        {tripType === 'roundtrip' && (
          <div className="flex-1">
            <label className="block mb-1.5 text-bold text-gray-600 font-bold">Return</label>
            <div className="relative">
              <input
                type="text"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full h-[50px] px-4 py-2 bg-gray-50/70 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-base placeholder:text-gray-400"
                placeholder="Add date"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
              />
              <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        )}

        {/* Search submit button */}
        <button
          type="submit"
          className="h-[50px] px-8 bg-[#9c6f03] text-white rounded-lg text-base font-medium hover:bg-[#e5a711] transition-colors whitespace-nowrap"
        >
          Search Flights
        </button>
      </div>
    </form>
  );
};

export default SearchFlights;