import { BookOpen, User, FileText } from "lucide-react";

const instructors = [
  {
    name: "TS. Sarah Chen",
    title: "Tiến sĩ Lý Thuyết Số",
    specialty: "Lý thuyết số",
    courses: 12,
    description:
      "Cựu giáo sư MIT, chuyên sâu về toán học mật mã học và bảo mật số.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "GS. Marcus Vane",
    title: "Hình Học Ứng Dụng",
    specialty: "Hình học",
    courses: 9,
    description:
      "Chuyên gia trực quan hoá cấu trúc tô pô và hình học không gian.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    title: "Nhà Khoa Học Dữ Liệu",
    specialty: "Khoa học dữ liệu",
    courses: 15,
    description:
      "Kết nối toán học thuần tuý với học máy và trí tuệ nhân tạo hiện đại.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "TS. James Wilson",
    title: "Logic & Lý Thuyết Tập Hợp",
    specialty: "Logic học",
    courses: 11,
    description:
      "Tiên phong trong phát triển lộ trình học logic hình thức thích ứng.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

function InstructorCard({
  name,
  title,
  specialty,
  courses,
  description,
  image,
}) {
  return (
    <div className="group bg-white border border-[#F0EBE3] rounded-2xl overflow-hidden flex flex-col hover:border-[#FAD7BC] hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#F5F0EA]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-500"
        />
        {/* Specialty tag */}
        <span className="absolute bottom-2.5 left-2.5 bg-[#1A2B47] text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
          {specialty}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3
          className="text-base font-bold text-[#1A2B47] leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {name}
        </h3>
        <p className="text-[10px] font-semibold text-[#F08A4B] tracking-widest uppercase">
          {title}
        </p>
        <p className="text-xs text-[#7A8A9C] leading-relaxed flex-1">
          {description}
        </p>

        <div className="border-t border-[#F2EDE6] my-1" />

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <span className="flex items-center gap-1.5 text-xs font-medium text-[#6B7A90]">
            <BookOpen className="w-3.5 h-3.5 text-[#F08A4B]" />
            {courses} khoá học
          </span>
          <div className="flex items-center gap-1">
            <button
              className="p-1.5 rounded-lg hover:bg-[#FDF2E9] transition-colors"
              title="Hồ sơ"
            >
              <User className="w-4 h-4 text-[#C0C8D4] group-hover:text-[#F08A4B] transition-colors" />
            </button>
            <button
              className="p-1.5 rounded-lg hover:bg-[#FDF2E9] transition-colors"
              title="Bài viết"
            >
              <FileText className="w-4 h-4 text-[#C0C8D4] group-hover:text-[#F08A4B] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InstructorSection() {
  return (
    <section className="bg-[#F8FAFC] py-14 px-6 sm:px-10">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');`}</style>

      {/* Header */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#F08A4B] mb-3">
          Đội ngũ giảng viên
        </p>
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-[#1A2B47] leading-tight mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ban lãnh đạo <span className="text-[#F08A4B]">học thuật</span>
        </h2>
        <p className="text-sm text-[#8A9BB0] leading-relaxed">
          Học từ các Tiến sĩ và chuyên gia ngành — những người kết nối lý thuyết
          và ứng dụng thực tiễn.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {instructors.map((person) => (
          <InstructorCard key={person.name} {...person} />
        ))}
      </div>
    </section>
  );
}
