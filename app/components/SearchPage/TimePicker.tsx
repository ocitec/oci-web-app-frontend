import { useState } from "react";

interface TimePickerProps {
  label: string;
}

export default function TimePicker({ label }: TimePickerProps) {
  const [hour, setHour] = useState(10);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState("AM");

  return (
    <div className="bg-purple-100 p-4 rounded-lg w-64 shadow-md">
      <h3 className="text-gray-800 font-semibold">{label}</h3>
      
      <div className="flex items-center justify-between mt-2">
        {/* Hour Picker */}
        <div className="flex flex-col items-center">
          <input
            type="number"
            min="1"
            max="12"
            value={hour}
            onChange={(e) => setHour(Math.min(12, Math.max(1, parseInt(e.target.value) || 1)))}
            className="text-3xl font-bold text-purple-700 bg-white rounded-lg p-2 text-center w-16"
          />
          <span className="text-gray-500 text-xs mt-1">Hour</span>
        </div>

        {/* Colon */}
        <span className="text-3xl font-bold text-gray-700">:</span>

        {/* Minute Picker */}
        <div className="flex flex-col items-center">
          <input
            type="number"
            min="0"
            max="59"
            value={minute}
            onChange={(e) => setMinute(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))}
            className="text-3xl font-bold text-purple-700 bg-white rounded-lg p-2 text-center w-16"
          />
          <span className="text-gray-500 text-xs mt-1">Minute</span>
        </div>

        {/* AM/PM Toggle */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => setPeriod("AM")}
            className={`px-3 py-1 text-sm font-semibold rounded-md ${
              period === "AM" ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            AM
          </button>
          <button
            onClick={() => setPeriod("PM")}
            className={`px-3 py-1 text-sm font-semibold mt-1 rounded-md ${
              period === "PM" ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            PM
          </button>
        </div>
      </div>

      {/* Icons and Buttons */}
      <div className="flex justify-between items-center mt-4 text-sm text-purple-600">
        <span className="flex items-center">
          ⏰ <span className="ml-1 text-gray-500">Clock</span>
        </span>
        <div className="flex space-x-4">
          <button className="text-red-500 font-medium">Cancel</button>
          <button className="text-purple-700 font-medium">OK</button>
        </div>
      </div>
    </div>
  );
}
