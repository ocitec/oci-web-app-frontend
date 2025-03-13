'use client';

import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SearchFlightResult from '../components/SearchPage/SearchFlightResult';
import Filters from '../components/SearchPage/Filters';
import AirlineTable from '../components/SearchPage/AirlineTable';

export default function SearchResult() {
  const searchParams = useSearchParams();
  
  const searchData = {
    tripType: searchParams.get('tripType') || '',
    from: searchParams.get('from') || '',
    to: searchParams.get('to') || '',
    departureDate: searchParams.get('departureDate') || '',
    returnDate: searchParams.get('returnDate') || '',
    travellers: searchParams.get('travellers') || '',
    cabinClass: searchParams.get('cabinClass') || '',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection showSearch={false} reducedHeight={true} />
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <SearchFlightResult initialData={searchData} />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 relative z-10">
            <Filters />
          </div>
          <div className="lg:col-span-3 relative z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <AirlineTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}