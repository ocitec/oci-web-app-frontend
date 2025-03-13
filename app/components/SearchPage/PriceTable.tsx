import Image from "next/image";

const airlines = [
  { name: "Qatar Air", logo: "/qatar.png", prices: ["N956,000", "N750,000", "N750,000"] },
  { name: "Emirates", logo: "/emirates.png", prices: ["N1,250,000", "", ""] },
  { name: "Ethiopian", logo: "/ethiopian.png", prices: ["", "", "N800,000"] },
  { name: "Egypt Air", logo: "/egypt.png", prices: ["", "N800,000", ""] },
];

const stops = ["No Stops", "1 Stop", "1+ Stops"];

export default function FlightPriceTable() {
  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      {/* Left Arrow */}
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full shadow-md">
        {"<"}
      </button>

      {/* Table */}
      <div className="overflow-x-auto bg-gray shadow-md rounded-lg">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b">
              {airlines.map((airline, index) => (
                <th key={index} className="text-center py-3">
                  <div className="flex flex-col items-center">
                    <Image src={airline.logo} alt={airline.name} width={30} height={30} />
                    <span className="font-semibold">{airline.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {stops.map((stop, rowIndex) => (
              <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? "bg-gray-200" : "bg-white"}`}>
                {airlines.map((airline, colIndex) => (
                  <td key={colIndex} className="text-center py-3 border">
                    {rowIndex === 0 ? (
                      <span className="font-semibold">{stop}</span>
                    ) : (
                      airline.prices[rowIndex - 1] || ""
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Arrow */}
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full shadow-md">
        {">"}
      </button>

      {/* Subtitle */}
      <p className="mt-3 text-center font-semibold">Flights from Lagos to Dubai, and back</p>
    </div>
  );
}
