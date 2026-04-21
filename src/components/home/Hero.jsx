import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-8 sm:py-12 md:py-16 gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-0">
      {/* CỘT TRÁI */}
      <div className="flex-1 space-y-6 sm:space-y-8 w-full">
        <div className="inline-flex items-center bg-[#FDF2E9] border border-[#FAD7BC] px-3 py-1 rounded-full text-center flex-wrap">
          <span className="w-2 h-2 bg-[#F08A4B] rounded-full mr-2 flex-shrink-0"></span>
          <span className="text-xs sm:text-sm font-semibold text-[#8A4D26]">
            New: Multivariable Calculus Series
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A2B47] leading-tight">
          Master the Language of the <br />
          <span className="text-[#F08A4B]">Universe</span>
        </h1>

        <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-medium max-w-lg">
          Experience mathematical rigor through immersive 3D visualizations and
          interactive problem sets designed for academic excellence.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full">
          <div className="relative flex-1 min-w-0 sm:max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 flex-shrink-0" />
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="w-full bg-white border border-gray-200 pl-12 pr-4 py-3 sm:py-4 rounded-lg shadow-sm focus:outline-none text-sm sm:text-base"
            />
          </div>
          <button className="bg-[#FFA24E] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg shadow-orange-200 whitespace-nowrap text-sm sm:text-base hover:bg-[#FF8F33] transition">
            Explore
          </button>
        </div>

        <div className="flex flex-col xs:flex-row gap-8 sm:gap-12 pt-2 sm:pt-4">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#1A2B47]">
              15k+
            </p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
              Active Students
            </p>
          </div>
          <div className="border-l border-gray-200 pl-8 sm:pl-12">
            <p className="text-2xl sm:text-3xl font-bold text-[#1A2B47]">
              200+
            </p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
              Modules
            </p>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI */}
      <div className="flex-1 relative w-full min-h-80 sm:min-h-96">
        <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[40px] overflow-hidden shadow-2xl bg-[#0A1629] w-full h-80 sm:h-96 md:h-[400px]">
          <img
            src="https://framerusercontent.com/images/3D_Math_Illustration.jpg"
            alt="Math 3D"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Lớp phủ công thức LaTeX */}
          <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-lg sm:rounded-2xl">
            <p className="text-white text-xs sm:text-sm font-mono text-center break-words">
              {"$$\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$"}
            </p>
          </div>
        </div>

        {/* Card Mastery Rate */}
        <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-4">
          <div className="bg-[#FFF4ED] p-2 rounded-lg flex-shrink-0">
            <span className="text-[#F08A4B] text-base sm:text-xl">📈</span>
          </div>
          <div className="min-w-0">
            <p className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase whitespace-nowrap">
              Mastery Rate
            </p>
            <p className="text-lg sm:text-xl font-black text-[#1A2B47]">+84%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
