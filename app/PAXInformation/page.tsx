'use client';

import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProgressStepper from '../components/PAXInfo/ProgressStepper';

/**
 * PAX Information Page
 * 
 * Passenger information collection page in the flight booking flow.
 * Displays flight summary and collects passenger details.
 * 
 * Features:
 * - Flight summary display
 * - Contact information collection
 * - Passenger details form
 * - White background with consistent styling
 */
const PAXInformation = () => {
  const searchParams = useSearchParams();
  const flightData = searchParams.get('flight');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection showSearch={false} reducedHeight={true} />
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
        {/* Progress Stepper */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
          <ProgressStepper currentStep={2} />
        </div>        
      </div>
    </main>
  );
};

export default PAXInformation;