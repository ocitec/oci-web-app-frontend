import Image from "next/image";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

// Types
interface Flight {
  title: string;
  departureTime: string;
  duration: string;
  stops: string;
  from: string;
  to: string;
  fromFull: string;
  toFull: string;
  airline: string;
  layover?: string;
}

interface FlightSegmentProps {
  title: string;
  flight: Flight;
}

interface TabButtonProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  position?: 'left' | 'right';
}

interface FareRule {
  title: string;
  content: string;
}

// Tab Button Component
const TabButton: FC<TabButtonProps> = ({ active, children, onClick, position }) => (
  <button 
    onClick={onClick}
    className={`flex-1 py-1.5 text-center transition-colors focus:ring-2 focus:ring-inset ${
      active 
        ? "font-semibold bg-[#9c6f03] text-white hover:bg-[#e5a711] focus:ring-yellow-500" 
        : "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300"
    } ${position === 'left' ? 'rounded-tl-lg' : position === 'right' ? 'rounded-tr-lg' : ''}`}
  >
    {children}
  </button>
);

// Flight Segment Component
const FlightSegment: FC<FlightSegmentProps> = ({ title, flight }) => (
  <div className="bg-white/90 backdrop-blur-sm shadow-md border p-2 rounded-lg flex flex-col gap-1.5 hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-yellow-500">
    <h3 className="text-base font-semibold text-gray-900">{title}</h3>
    <div className="flex items-center gap-2">
      <Image src="/qatar.png" alt="Qatar Airways" width={20} height={20} className="object-contain" />
      <p className="text-sm font-semibold text-gray-800">Qatar Airways</p>
    </div>
    <div className="flex flex-col gap-1">
      <p className="text-base font-bold text-gray-900">
        {flight.departureTime} <span className="text-gray-600">- {flight.duration}</span> <span className="text-[#9c6f03] font-semibold">{flight.stops}</span>
      </p>
      <p className="text-gray-700 text-sm">{flight.from} → {flight.to}</p>
      <p className="text-gray-500 text-xs">{flight.fromFull} → {flight.toFull}</p>
    </div>
    <div className="text-xs text-gray-700 space-y-0.5">
      <p><strong>Baggage:</strong> 2 x 23kg</p>
      <p><strong>Airline:</strong> {flight.airline}</p>
    </div>
    {flight.layover && <p className="text-xs text-[#9c6f03] font-semibold">{flight.layover}</p>}
  </div>
);

// Flight Details Component
const FlightDetails: FC = () => {
  const [activeTab, setActiveTab] = React.useState<'details' | 'rules'>('details');
  const router = useRouter();

  const handleBookNow = () => {
    const flightData = {
      outbound: flights[0],
      inbound: flights[3],
      totalPrice: 2450,
      currency: 'USD'
    };
    
    router.push(`/PAXInformation?flight=${encodeURIComponent(JSON.stringify(flightData))}`);
  };

  const flights: Flight[] = [
    {
      title: "Lagos to Doha, 22 Mar.",
      departureTime: "19:00",
      duration: "7h 0m",
      stops: "Non stop",
      from: "Lagos",
      to: "Doha",
      fromFull: "Lagos, Murtala Muhammed International Airport (LOS)",
      toFull: "Doha (DOH)",
      airline: "Qatar Airways - 1406 Economy - Class T",
      layover: "Change of planes 4h 0m Layover in Doha",
    },
    {
      title: "Dubai to Doha, 27 Apr.",
      departureTime: "23:25",
      duration: "1h 15m",
      stops: "Non stop",
      from: "Dubai",
      to: "Doha",
      fromFull: "Dubai International Airport (DXB)",
      toFull: "Doha (DOH)",
      airline: "Qatar Airways - 1019 Economy - Class T",
      layover: "Change of planes 1h 45m Layover in Doha",
    },
    {
      title: "Doha to Dubai, 23 Mar.",
      departureTime: "08:00",
      duration: "1h 20m",
      stops: "Non stop",
      from: "Doha",
      to: "Dubai",
      fromFull: "Doha (DOH)",
      toFull: "Dubai",
      airline: "Qatar Airways - 1406 Economy - Class T",
    },
    {
      title: "Doha to Lagos, 28 Apr.",
      departureTime: "01:35",
      duration: "7h 50m",
      stops: "Non stop",
      from: "Doha",
      to: "Lagos",
      fromFull: "Doha (DOH)",
      toFull: "Lagos, Murtala Muhammed International Airport (LOS)",
      airline: "Qatar Airways - 1407 Economy - Class T",
    },
  ];

  const fareRules: FareRule[] = [
    {
      title: "Cancellation Policy",
      content: "Cancellation fee of $100 applies before departure. Non-refundable after departure."
    },
    {
      title: "Baggage Rules",
      content: "2 pieces of checked baggage (23kg each) included. Excess baggage fees apply."
    }
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg relative z-10 border">
      {/* Tabs */}
      <div className="flex border-b">
        <TabButton 
          active={activeTab === 'details'} 
          onClick={() => setActiveTab('details')}
          position="left"
        >
          Flight Details
        </TabButton>
        <TabButton 
          active={activeTab === 'rules'} 
          onClick={() => setActiveTab('rules')}
          position="right"
        >
          Fare Rules
        </TabButton>
      </div>

      {/* Flight Cards */}
      <div className="grid grid-cols-2 gap-2 p-2">
        {activeTab === 'details' ? (
          flights.map((flight, index) => (
            <FlightSegment key={index} title={flight.title} flight={flight} />
          ))
        ) : (
          <div className="col-span-2 text-sm text-gray-700 space-y-2">
            {fareRules.map((rule, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm shadow-md border p-2 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">{rule.title}</h3>
                <p>{rule.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Book Now Button */}
      <div className="p-2 flex justify-center border-t">
        <button 
          onClick={handleBookNow}
          className="bg-[#9c6f03] hover:bg-[#e5a711] text-white px-4 py-1.5 font-semibold rounded-md shadow-md transition-colors text-sm focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default FlightDetails;
