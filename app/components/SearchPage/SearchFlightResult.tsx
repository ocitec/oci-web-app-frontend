'use client';

import { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

interface SearchFlightResultProps {
  initialData: {
    tripType: string;
    from: string;
    to: string;
    departureDate: string;
    returnDate: string;
    travellers: string;
    cabinClass: string;
  };
}

const SearchFlightResult = ({ initialData }: SearchFlightResultProps) => {
  const router = useRouter();
  const [from, setFrom] = useState(initialData.from);
  const [to, setTo] = useState(initialData.to);
  const [departureDate, setDepartureDate] = useState(initialData.departureDate);
  const [returnDate, setReturnDate] = useState(initialData.returnDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({
      ...initialData,
      from,
      to,
      departureDate,
      returnDate: initialData.tripType === 'roundtrip' ? returnDate : '',
    });
    router.push(`/SearchResult?${searchParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
      {/* Origin input field */}
      <div className="flex-1">
        <label className="block mb-1.5 text-bold text-white font-bold">From</label>
        <div className="relative">
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full h-[50px] px-4 py-2 bg-white-50/70 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-base placeholder:text-gray-400"
            placeholder="Enter city or airport"
          />
        </div>
      </div>

      {/* Destination input field */}
      <div className="flex-1">
        <label className="block mb-1.5 text-bold text-white font-bold">To</label>
        <div className="relative">
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full h-[50px] px-4 py-2 bg-white-50/70 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-base placeholder:text-gray-400"
            placeholder="Enter city or airport"
          />
        </div>
      </div>

      {/* Departure date picker */}
      <div className="flex-1">
        <label className="block mb-1.5 text-bold text-white font-bold">Departure</label>
        <div className="relative">
          <input
            type="text"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="w-full h-[50px] px-4 py-2 bg-white50/70 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-base placeholder:text-black"
            placeholder="Add date"
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => !e.target.value && (e.target.type = 'text')}
          />
          <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Return date picker */}
      {initialData.tripType === 'roundtrip' && (
        <div className="flex-1">
          <label className="block mb-1.5 text-bold text-white font-bold">Return</label>
          <div className="relative">
            <input
              type="text"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full h-[50px] px-4 py-2 bg-white-50/70 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-base placeholder:text-gray-400"
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
        Edit Search
      </button>
    </form>
  );
};

export default SearchFlightResult;