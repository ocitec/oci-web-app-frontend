import Image from "next/image";

interface FlightCardProps {
  airline: string;
  logo: string;
  price: string;
  isCheapest?: boolean;
  isFastest?: boolean;
  departure: {
    time: string;
    from: string;
    duration: string;
    stops: string;
    arrival: string;
  };
  returnFlight: {
    time: string;
    from: string;
    duration: string;
    stops: string;
    arrival: string;
  };
}

interface FlightDetailsProps {
  title: string;
  details: {
    time: string;
    from: string;
    duration: string;
    stops: string;
    arrival: string;
  };
}

interface BadgeProps {
  text: string;
  color: "green" | "blue";
}

// Flight Details Component
function FlightDetails({ title, details }: FlightDetailsProps) {
  return (
    <div className="border p-1.5 rounded-lg bg-gray-100">
      <h3 className="font-semibold text-black text-sm">{title}</h3>
      <p className="text-xs text-gray-700">
        {details.time} - {details.from}
      </p>
      <p className="text-xs text-gray-500">
        {details.duration} | {details.stops}
      </p>
      <p className="text-xs text-gray-700">Arrive - {details.arrival}</p>
    </div>
  );
}

// Badge Component
function Badge({ text, color }: BadgeProps) {
  const bgColor = color === "green" ? "bg-green-400/80" : "bg-blue-400/80";
  return (
    <span className={`${bgColor} backdrop-blur-sm text-white px-2 py-0.5 rounded-md text-xs`}>
      {text}
    </span>
  );
}

// Flight Card Component
function FlightCard({
  airline,
  logo,
  price,
  isCheapest,
  isFastest,
  departure,
  returnFlight,
}: FlightCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-md rounded-lg p-2.5 flex flex-col gap-1.5 border w-[70%] hover:shadow-lg transition-shadow ml-2 relative z-10">
      {/* Airline Info */}
      <div className="flex items-center gap-2">
        <Image src={logo} alt={airline} width={35} height={35} />
        <h2 className="font-semibold text-base text-gray-900">{airline}</h2>
      </div>

      {/* Flight Details */}
      <div className="grid grid-cols-2 gap-3">
        <FlightDetails title="Depart" details={departure} />
        <FlightDetails title="Return" details={returnFlight} />
      </div>

      {/* Pricing & Actions */}
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-gray-900">{price}</p>

        <div className="flex items-center gap-2">
          {isCheapest && <Badge text="Cheapest" color="green" />}
          {isFastest && <Badge text="Fastest" color="blue" />}
          <button className="bg-[#9c6f03] hover:bg-[#e5a711] text-white px-3 py-1.5 rounded-md font-semibold transition-colors text-sm">
            BOOK NOW
          </button>
        </div>
      </div>

      <p className="text-blue-600 text-xs cursor-pointer">View Flight Details</p>
    </div>
  );
}

// FlightList Component
export default function FlightList() {
  const flights = [
    {
      airline: "Ethiopian Airlines",
      logo: "/ethiopian.png",
      price: "₦900,619",
      isCheapest: true,
      departure: {
        time: "13:40 PM",
        from: "LOS",
        duration: "10h 15m",
        stops: "1 Stop",
        arrival: "04:25 AM - DBX",
      },
      returnFlight: {
        time: "13:40 PM",
        from: "DBX",
        duration: "11h 00m",
        stops: "1 Stop",
        arrival: "04:25 AM - LOS",
      },
    },
    {
      airline: "Emirates Airlines",
      logo: "/emirates.png",
      price: "₦1,476,000",
      isFastest: true,
      departure: {
        time: "13:40 PM",
        from: "LOS",
        duration: "06h 25m",
        stops: "0 Stop",
        arrival: "04:25 AM - DBX",
      },
      returnFlight: {
        time: "13:40 PM",
        from: "DBX",
        duration: "07h 00m",
        stops: "0 Stop",
        arrival: "04:25 AM - LOS",
      },
    },
    {
      airline: "Qatar Air",
      logo: "/qatar.png",
      price: "₦1,145,000",
      departure: {
        time: "19:00 PM",
        from: "LOS",
        duration: "12h 20m",
        stops: "1 Stop",
        arrival: "10:20 AM - DBX",
      },
      returnFlight: {
        time: "23:25 PM",
        from: "DBX",
        duration: "11h 00m",
        stops: "1 Stop",
        arrival: "07:25 AM - LOS",
      },
    },
  ];

  return (
    <div className="space-y-2 flex flex-col items-start w-full mt-2 relative z-10">
      {flights.map((flight, index) => (
        <FlightCard key={index} {...flight} />
      ))}
    </div>
  );
}
