import CourseCard from "./CourseCard";
import { ArrowRight, BookOpen, Zap } from "lucide-react";

const FeaturedSection = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      {/* Header Section - Responsive */}
      <div className="mb-8 md:mb-10 lg:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B47] mb-1 md:mb-2 leading-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F08A4B] via-orange-500 to-[#F08A4B]">
              Courses
            </span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-1 md:mt-2">
            Structured pathways for every mathematical stage.
          </p>
        </div>

        {/* View Catalog Button */}
        <button className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-2.5 text-[#F08A4B] font-bold text-xs md:text-sm hover:bg-[#F08A4B]/10 rounded-lg transition-all duration-300 group whitespace-nowrap hover:gap-3">
          View Catalog
          <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Grid Layout - Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {/* Large Horizontal Card (Calculus) - col-span-2 */}
        <div className="md:col-span-2">
          <CourseCard
            variant="horizontal"
            title="The Architecture of Calculus"
            description="Master limits, derivatives, and integrals through physical visualization and proof-based reasoning."
            lessons="128"
            projects="32"
            price="199.00"
            image="https://images.unsplash.com/photo-1635070041078-e3fb4fe365c9?w=900&q=80&auto=format&fit=crop"
          />
        </div>

        {/* Small Card 1 (Linear Algebra) */}
        <div className="md:col-span-1">
          <CourseCard
            title="Linear Algebra"
            description="Vector spaces and matrix transformations for data science applications."
            price="149.00"
            icon={<Zap className="w-6 h-6" />}
          />
        </div>

        {/* Small Card 2 (Statistics) */}
        <div className="md:col-span-1">
          <CourseCard
            title="Statistical Logic"
            description="Advanced probability and statistical inference for researchers."
            price="129.00"
            icon="📊"
          />
        </div>

        {/* Banner Competitive Track - col-span-2 on tablet+ */}
        <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#0A1629] via-[#0f1d2d] to-[#051124] rounded-2xl md:rounded-3xl lg:rounded-[32px] p-6 md:p-8 lg:p-10 relative overflow-hidden group border border-white/5 hover:border-white/15 transition-all duration-500">
          {/* Background Glows */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 md:w-64 lg:w-96 h-48 md:h-64 lg:h-96 bg-amber-500/15 blur-[80px] md:blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -left-20 -top-20 w-40 h-40 bg-cyan-400/10 blur-[60px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>

          {/* Content Container */}
          <div className="relative z-10 space-y-3 md:space-y-4 lg:space-y-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Left Content */}
            <div className="space-y-3 md:space-y-4 lg:space-y-6 flex-1 max-w-sm md:max-w-md">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-amber-500/20 border border-amber-500/40 backdrop-blur-sm group-hover:border-amber-500/60 transition-all duration-300">
                <span className="text-amber-400 text-xs md:text-sm font-bold">
                  🏆
                </span>
                <span className="text-amber-300 text-xs md:text-sm font-bold uppercase tracking-wider">
                  Competitive
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                Join the Competitive Track
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs md:text-sm lg:text-base leading-relaxed">
                Preparation for AMC, AIME, and International Mathematical
                Olympiads with expert guidance.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2 md:pt-4">
                <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 active:scale-95 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/30 flex items-center justify-center gap-2">
                  <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Start Assessment
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
                  <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Details
                </button>
              </div>

              {/* Stats - Hidden on mobile, shown on tablet+ */}
              <div className="hidden md:flex gap-4 md:gap-6 pt-4 md:pt-6 border-t border-white/10">
                <div className="flex-1">
                  <p className="text-amber-400 font-bold text-sm md:text-base lg:text-lg">
                    500+
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">Problems</p>
                </div>
                <div className="flex-1">
                  <p className="text-cyan-400 font-bold text-sm md:text-base lg:text-lg">
                    12 Weeks
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">Program</p>
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold text-sm md:text-base lg:text-lg">
                    24/7
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">Support</p>
                </div>
              </div>
            </div>

            {/* Trophy Emoji - Responsive Position */}
            <div className="absolute md:relative right-4 md:right-0 top-4 md:top-1/2 md:-translate-y-1/2 md:flex-shrink-0 opacity-40 md:opacity-70 group-hover:opacity-100 transition-opacity duration-500 transform md:transform-none">
              <span className="text-5xl md:text-6xl lg:text-8xl filter drop-shadow-xl inline-block">
                🏆
              </span>
            </div>
          </div>

          {/* Border Glow Effect */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl lg:rounded-[32px] pointer-events-none border border-transparent group-hover:border-amber-500/20 transition-colors duration-500"></div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-12 md:mt-16 lg:mt-20 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#F08A4B]/5 via-transparent to-cyan-500/5 border border-[#F08A4B]/20 backdrop-blur-sm hover:border-[#F08A4B]/40 transition-all duration-300">
        <div className="text-center space-y-3 md:space-y-4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1A2B47]">
            Can't decide? Try our recommendation quiz
          </h3>
          <p className="text-gray-500 text-xs md:text-sm lg:text-base max-w-2xl mx-auto">
            Get personalized course suggestions based on your current skills and
            learning goals
          </p>
          <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F08A4B] to-orange-500 hover:from-[#F08A4B]/90 hover:to-orange-600 active:scale-95 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-sm transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30">
            Take the Quiz
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
