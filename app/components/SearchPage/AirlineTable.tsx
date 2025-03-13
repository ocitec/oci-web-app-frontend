// frontend/app/components/SearchPage/AirlineTable.tsx
import Image from "next/image";

const airlines = [
  { name: "Qatar Air", logo: "/qatar.png", prices: ["N956,000", "N750,000", "N750,000"] },
  { name: "Emirates", logo: "/emirates.png", prices: ["N1,250,000", "", ""] },
  { name: "Ethiopian", logo: "/ethiopian.png", prices: ["", "", "N800,000"] },
  { name: "Egypt Air", logo: "/egypt.png", prices: ["", "N800,000", ""] },
];

const stops = ["Non-stop", "1 Stop", "1+ Stops"];

export default function AirlineTable() {
  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      
      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 px-6 text-left text-gray-900 font-semibold">Airlines</th>
              {stops.map((stop) => (
                <th key={stop} className="py-2 px-6 text-center text-gray-900 font-semibold">
                  {stop}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {airlines.map((airline, index) => (
              <tr key={airline.name} className={index % 2 === 0 ? "bg-purple-50" : "bg-white"}>
                <td className="py-2 px-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Image 
                      src={airline.logo} 
                      alt={airline.name} 
                      width={20} 
                      height={20} 
                      className="object-contain rounded-lg"
                    />
                    <span className="font-medium text-gray-900">{airline.name}</span>
                  </div>
                </td>
                {airline.prices.map((price, idx) => (
                  <td key={idx} className="py-2 px-6 text-center border-b border-gray-200">
                    <span className={`${price ? "text-gray-900" : "text-gray-400"} font-medium`}>
                      {price || "—"}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

            {/* Subtitle */}
      <p className="mt-4 text-center font-medium text-gray-700">
        Showing best prices for flights from Lagos to Dubai
      </p>
    </div>
  );
}