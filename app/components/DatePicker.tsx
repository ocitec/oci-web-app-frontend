'use client';

import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { FC, useState, useEffect, useMemo } from 'react';

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  minDate?: string;
  className?: string;
}

interface CalendarDate {
  date: number;
  month: number;
  year: number;
  price: string | null;
  isDisabled?: boolean;
}

interface DateCellProps {
  date: number;
  price: string | null;
  isSelected: boolean;
  isDisabled?: boolean;
  onClick: (date: number, month: number, year: number) => void;
  month: number;
  year: number;
}

const DateCell: FC<DateCellProps> = ({ date, price, isSelected, isDisabled, onClick, month, year }) => (
  <div
    className={`relative p-2.5 text-center cursor-pointer transition-all duration-200 ${
      isDisabled 
        ? "opacity-50 cursor-not-allowed bg-white/5"
        : isSelected 
          ? "bg-gradient-to-br from-[#FDB813] to-[#FFCB47] text-white rounded-xl shadow-lg ring-2 ring-[#FDB813]/20" 
          : "hover:bg-white/10 text-white/90 hover:shadow-md hover:rounded-xl hover:scale-105"
    }`}
    onClick={() => !isDisabled && onClick(date, month, year)}
  >
    <p className={`text-base font-semibold ${isSelected ? 'text-white' : 'text-white/90'}`}>{date}</p>
    {price && (
      <p className={`text-xs font-medium ${
        isSelected ? 'text-white/90' : 'text-[#FDB813]'
      }`}>
        {price}
      </p>
    )}
    {isSelected && (
      <div className="absolute inset-0 rounded-xl bg-white/10 pointer-events-none" />
    )}
  </div>
);

const DatePicker: FC<DatePickerProps> = ({ 
  value, 
  onChange, 
  placeholder = 'Add date', 
  required = false, 
  minDate,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<{ date: number; month: number; year: number } | null>(null);
  
  const today = useMemo(() => new Date(2025, 2, 13), []); // Using the provided current date
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = useMemo(() => [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ], []);

  const calendar: CalendarDate[] = useMemo(() => [
    { date: 26, month: 1, year: 2025, price: "₦850,000", isDisabled: new Date(2025, 1, 26) < today },
    { date: 27, month: 1, year: 2025, price: "₦760,000", isDisabled: new Date(2025, 1, 27) < today },
    { date: 28, month: 1, year: 2025, price: "₦649,000", isDisabled: new Date(2025, 1, 28) < today },
    { date: 29, month: 1, year: 2025, price: "₦890,983", isDisabled: new Date(2025, 1, 29) < today },
    { date: 30, month: 1, year: 2025, price: "₦1,200,00", isDisabled: new Date(2025, 1, 30) < today },
    { date: 1, month: 2, year: 2025, price: null },
    { date: 2, month: 2, year: 2025, price: null },
    { date: 3, month: 2, year: 2025, price: null },
    { date: 4, month: 2, year: 2025, price: null },
    { date: 5, month: 2, year: 2025, price: null },
    { date: 6, month: 2, year: 2025, price: null },
    { date: 7, month: 2, year: 2025, price: null },
    { date: 8, month: 2, year: 2025, price: null },
    { date: 9, month: 2, year: 2025, price: null },
    { date: 10, month: 2, year: 2025, price: null },
    { date: 11, month: 2, year: 2025, price: null },
    { date: 12, month: 2, year: 2025, price: null },
    { date: 13, month: 2, year: 2025, price: null },
    { date: 14, month: 2, year: 2025, price: null },
    { date: 15, month: 2, year: 2025, price: null },
    { date: 16, month: 2, year: 2025, price: null },
    { date: 17, month: 2, year: 2025, price: null },
    { date: 18, month: 2, year: 2025, price: null },
    { date: 19, month: 2, year: 2025, price: null },
    { date: 20, month: 2, year: 2025, price: "₦450,768" },
    { date: 21, month: 2, year: 2025, price: "₦679,980" },
    { date: 22, month: 2, year: 2025, price: "₦450,567" },
  ], [today]);

  const handleSelectDate = (date: number, month: number, year: number) => {
    setSelectedDate({ date, month, year });
    const formattedDate = new Date(year, month, date).toISOString().split('T')[0];
    onChange(formattedDate);
    setIsOpen(false);
  };

  const formatDisplayDate = (date: { date: number; month: number; year: number }) => {
    return new Date(date.year, date.month, date.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const baseClasses = "w-full h-[50px] px-4 py-2 bg-black/40 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:ring-opacity-50 border-none text-base placeholder:text-gray-400 text-white pr-12";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.datepicker-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative datepicker-container">
      <input
        type="text"
        value={selectedDate ? formatDisplayDate(selectedDate) : value}
        className={`${baseClasses} ${className}`}
        placeholder={placeholder}
        required={required}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        readOnly
        aria-label={placeholder}
      />
      <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 w-5 h-5 pointer-events-none" />
      
      {isOpen && (
        <div className="absolute z-50 mt-2 p-6 bg-black/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 w-[340px] transform transition-all duration-200 ease-out scale-100">
          <div className="grid grid-cols-7 gap-1.5">
            <div className="col-span-7 mb-4 flex items-center justify-between">
              <button 
                onClick={handlePrevMonth}
                className="p-2 rounded-xl bg-black/40 hover:bg-white/10 transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeftIcon className="w-5 h-5 text-white/70" />
              </button>
              <span className="font-bold text-white text-lg">
                {monthNames[currentMonth]} {currentYear}
              </span>
              <button 
                onClick={handleNextMonth}
                className="p-2 rounded-xl bg-black/40 hover:bg-white/10 transition-colors"
                aria-label="Next month"
              >
                <ChevronRightIcon className="w-5 h-5 text-white/70" />
              </button>
            </div>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-400 p-2.5 mb-1">
                {day}
              </div>
            ))}
            {calendar.map((day, index) => (
              <DateCell
                key={index}
                date={day.date}
                month={day.month}
                year={day.year}
                price={day.price}
                isSelected={selectedDate?.date === day.date && 
                           selectedDate?.month === day.month && 
                           selectedDate?.year === day.year}
                isDisabled={day.isDisabled}
                onClick={handleSelectDate}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
