import { Search, Bell, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="px-4 md:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4 md:gap-6">
          {/* Logo */}
          <div className="text-lg md:text-xl lg:text-2xl font-black text-[#1A2B47] tracking-tight whitespace-nowrap">
            Mathematiq
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 flex-1 ml-6 lg:ml-12">
            <a
              href="#"
              className="text-[#1A2B47] font-bold text-sm lg:text-base border-b-2 border-[#F08A4B] pb-1 hover:text-[#F08A4B] transition-colors duration-300"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-gray-400 font-medium text-sm lg:text-base hover:text-[#1A2B47] transition-colors duration-300"
            >
              Practice
            </a>
            <a
              href="#"
              className="text-gray-400 font-medium text-sm lg:text-base hover:text-[#1A2B47] transition-colors duration-300"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-gray-400 font-medium text-sm lg:text-base hover:text-[#1A2B47] transition-colors duration-300"
            >
              Pricing
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-3 lg:gap-6 ml-auto">
            {/* Search - Hidden on mobile, compact on tablet */}
            <div className="hidden sm:block relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses..."
                className="bg-[#F3F6F9] pl-10 pr-3 md:pr-4 py-2 rounded-lg text-xs md:text-sm w-40 md:w-44 lg:w-64 focus:outline-none focus:ring-2 focus:ring-[#F08A4B]/20 transition-all duration-300"
              />
            </div>

            {/* Bell Icon */}
            <button className="relative text-[#1A2B47] p-2 hover:bg-gray-50 rounded-lg transition-colors duration-300 hidden sm:block">
              <Bell className="w-5 h-5 md:w-6 md:h-6" />
              <span className="absolute top-1.5 right-1.5 block w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            {/* Sign In Button - Hidden on mobile */}
            <button className="hidden sm:block bg-[#0A1629] text-white px-4 md:px-6 lg:px-8 py-2 md:py-2.5 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 active:scale-95">
              Sign In
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#1A2B47]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1A2B47]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-100 pt-4 animate-in fade-in slide-in-from-top-2">
            <a
              href="#"
              className="block text-[#1A2B47] font-bold text-sm py-2 hover:text-[#F08A4B] transition-colors duration-300"
            >
              Courses
            </a>
            <a
              href="#"
              className="block text-gray-400 font-medium text-sm py-2 hover:text-[#1A2B47] transition-colors duration-300"
            >
              Practice
            </a>
            <a
              href="#"
              className="block text-gray-400 font-medium text-sm py-2 hover:text-[#1A2B47] transition-colors duration-300"
            >
              Resources
            </a>
            <a
              href="#"
              className="block text-gray-400 font-medium text-sm py-2 hover:text-[#1A2B47] transition-colors duration-300"
            >
              Pricing
            </a>

            {/* Mobile Search */}
            <div className="relative mt-4 pt-4 border-t border-gray-100">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full bg-[#F3F6F9] pl-10 pr-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F08A4B]/20 transition-all duration-300"
              />
            </div>

            {/* Mobile Sign In */}
            <button className="w-full bg-[#0A1629] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-opacity-90 transition-all duration-300 mt-4">
              Sign In
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
