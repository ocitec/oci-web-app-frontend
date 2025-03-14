import { useState } from "react";

interface TimePickerProps {
  label: string;
}

export default function TimePicker({ label }: TimePickerProps) {
  const [hour, setHour] = useState(10);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState("AM");

  return (
    <div className="bg-black/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 w-64">
      <h3 className="text-white font-semibold">{label}</h3>
      
      <div className="flex items-center justify-between mt-4">
        {/* Hour Picker */}
        <div className="flex flex-col items-center">
          <input
            type="number"
            min="1"
            max="12"
            value={hour}
            onChange={(e) => setHour(Math.min(12, Math.max(1, parseInt(e.target.value) || 1)))}
            className="text-3xl font-bold text-white bg-black/40 rounded-lg p-2 text-center w-16 border-none focus:ring-2 focus:ring-[#FDB813] focus:ring-opacity-50"
          />
          <span className="text-gray-400 text-xs mt-1">Hour</span>
        </div>

        {/* Colon */}
        <span className="text-3xl font-bold text-white/70">:</span>

        {/* Minute Picker */}
        <div className="flex flex-col items-center">
          <input
            type="number"
            min="0"
            max="59"
            value={minute}
            onChange={(e) => setMinute(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))}
            className="text-3xl font-bold text-white bg-black/40 rounded-lg p-2 text-center w-16 border-none focus:ring-2 focus:ring-[#FDB813] focus:ring-opacity-50"
          />
          <span className="text-gray-400 text-xs mt-1">Minute</span>
        </div>

        {/* AM/PM Toggle */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => setPeriod("AM")}
            className={`px-3 py-1 text-sm font-semibold rounded-md ${
              period === "AM" ? "bg-gradient-to-br from-[#FDB813] to-[#FFCB47] text-white" : "bg-black/40 text-white/70 hover:bg-white/10"
            }`}
          >
            AM
          </button>
          <button
            onClick={() => setPeriod("PM")}
            className={`px-3 py-1 text-sm font-semibold mt-1 rounded-md ${
              period === "PM" ? "bg-gradient-to-br from-[#FDB813] to-[#FFCB47] text-white" : "bg-black/40 text-white/70 hover:bg-white/10"
            }`}
          >
            PM
          </button>
        </div>
      </div>

      {/* Icons and Buttons */}
      <div className="flex justify-between items-center mt-6 text-sm">
        <span className="flex items-center text-white/70">
          ⏰ <span className="ml-1 text-gray-400">Clock</span>
        </span>
        <div className="flex space-x-4">
          <button className="text-red-400 font-medium hover:text-red-300 transition-colors">Cancel</button>
          <button className="text-[#FDB813] font-medium hover:text-[#FFCB47] transition-colors">OK</button>
        </div>
      </div>
    </div>
  );
}
