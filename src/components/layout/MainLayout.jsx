import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Header - Fixed at top */}
      <Header />

      {/* Main Content - Flexible and responsive */}
      <main className="flex-1 w-full">
        <div className="w-full">{children}</div>
      </main>

      {/* Optional Footer */}
      <footer className="w-full border-t border-gray-100 bg-white mt-12 md:mt-16 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-10">
            {/* Company Info */}
            <div className="space-y-3">
              <h4 className="font-bold text-[#1A2B47] text-sm md:text-base">
                Mathematiq
              </h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Master mathematics through immersive learning experiences.
              </p>
            </div>

            {/* Product Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-[#1A2B47] text-xs md:text-sm uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 text-xs md:text-sm hover:text-[#1A2B47] transition-colors"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 text-xs md:text-sm hover:text-[#1A2B47] transition-colors"
                  >
                    Practice
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 text-xs md:text-sm hover:text-[#1A2B47] transition-colors"
                  >
                    Premium
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-[#1A2B47] text-xs md:text-sm uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 text-xs md:text-sm hover:text-[#1A2B47] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 text-xs md:text-sm hover:text-[#1A2B47] transition-colors"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 text-xs md:text-sm hover:text-[#1A2B47] transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-[#1A2B47] text-xs md:text-sm uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 text-xs md:text-sm hover:text-[#1A2B47] transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 text-xs md:text-sm hover:text-[#1A2B47] transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 text-xs md:text-sm hover:text-[#1A2B47] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="border-t border-gray-100 pt-6 md:pt-8">
            <p className="text-gray-400 text-xs md:text-sm text-center">
              © 2024 Mathematiq. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
