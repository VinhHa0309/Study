import { GraduationCap, FileText } from "lucide-react";

const InstructorSection = () => {
  const instructors = [
    {
      name: "Dr. Sarah Chen",
      title: "PHD IN NUMBER THEORY",
      description:
        "Former MIT professor focusing on cryptographic mathematics.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Prof. Marcus Vane",
      title: "APPLIED GEOMETRY",
      description:
        "Visualization expert specializing in topological structures.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Elena Rodriguez",
      title: "DATA SCIENTIST",
      description: "Bridging the gap between pure math and machine learning.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Dr. James Wilson",
      title: "LOGIC & SET THEORY",
      description: "Pioneer in adaptive learning pathways for formal logic.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-[#F8FAFC] px-4 md:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B47] mb-2 md:mb-3 lg:mb-4 leading-tight">
          Academic{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F08A4B] to-orange-500">
            Leadership
          </span>
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2 md:px-0">
          Learn from PhDs and industry experts who bridge the gap between theory
          and application.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto">
        {instructors.map((person, index) => (
          <div
            key={index}
            className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl lg:rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Avatar */}
            <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 mb-3 md:mb-4 lg:mb-6 overflow-hidden rounded-lg md:rounded-2xl bg-gray-100 flex-shrink-0">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Name */}
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#1A2B47] mb-1 md:mb-2 line-clamp-2">
              {person.name}
            </h3>

            {/* Title */}
            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-extrabold text-[#F08A4B] tracking-[0.1em] mb-2 md:mb-3 lg:mb-4 uppercase">
              {person.title}
            </p>

            {/* Description */}
            <p className="text-gray-500 text-[11px] sm:text-xs md:text-sm lg:text-sm leading-relaxed mb-4 md:mb-6 lg:mb-8 flex-grow px-1">
              {person.description}
            </p>

            {/* Icons */}
            <div className="flex gap-3 md:gap-4 mt-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <button className="p-1.5 md:p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 hover:text-[#1A2B47] transition-colors" />
              </button>
              <button className="p-1.5 md:p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <FileText className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 hover:text-[#1A2B47] transition-colors" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstructorSection;
