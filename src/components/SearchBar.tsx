import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface Props {
  onSearch: (term: string) => void;
}

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Search Container */}
      <div 
        className={`
          relative flex items-center bg-white/90 backdrop-blur-sm rounded-2xl 
          border-2 transition-all duration-300 ease-out shadow-lg
          ${isFocused 
            ? 'border-blue-400 shadow-blue-200/50 shadow-xl scale-[1.02]' 
            : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
          }
        `}
      >
        {/* Search Icon */}
        <div className="flex items-center justify-center pl-4 pr-2">
          <Search 
            className={`
              h-5 w-5 transition-colors duration-200
              ${isFocused ? 'text-blue-500' : 'text-gray-400'}
            `} 
          />
        </div>

        {/* Input Field */}
        <input
          type="search"
          value={searchTerm}
          placeholder="Search by user or action..."
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="
            flex-1 bg-transparent py-4 px-2 text-gray-800 placeholder-gray-400
            focus:outline-none focus:placeholder-gray-300
            text-base font-medium tracking-wide
          "
        />

        {/* Clear Button */}
        {searchTerm && (
          <button
            onClick={handleClear}
            className="
              flex items-center justify-center p-2 mr-2 rounded-full
              bg-gray-100 hover:bg-gray-200 transition-all duration-200
              opacity-70 hover:opacity-100 active:scale-95
            "
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        )}
      </div>

      {/* Animated Underline */}
      <div 
        className={`
          absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r 
          from-blue-400 to-purple-500 rounded-full transition-all duration-300 ease-out
          ${isFocused ? 'w-full opacity-100' : 'w-0 opacity-0'}
        `}
      />

      {/* Glow Effect */}
      {isFocused && (
        <div className="
          absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-500/20 
          blur-xl -z-10 animate-pulse
        " />
      )}
    </div>
  );
};

