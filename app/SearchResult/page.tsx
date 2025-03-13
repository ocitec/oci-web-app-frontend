'use client';

import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SearchFlightResult from '../components/SearchPage/SearchFlightResult';

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
    <main className="min-h-screen">
      <Navbar />
      <HeroSection showSearch={false} reducedHeight={true} />
      <div className="container mx-auto px-4 -mt-16 relative z-30">
        <SearchFlightResult initialData={searchData} />
      </div>
    </main>
  );
}