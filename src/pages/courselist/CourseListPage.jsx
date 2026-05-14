import SidebarFilter from "../../components/course/SidebarFilter";
import CourseCard from "../../components/course/CourseCard";
import { LayoutGrid, List, ChevronLeft, ChevronRight } from "lucide-react";

// Dữ liệu giả (Mock Data) tĩnh cho danh sách khóa học
const COURSES = [
  {
    title: "Chuyên đề Hàm số bậc nhất và bậc hai nâng cao",
    lessons: 24,
    duration: 12.5,
    price: 850000,
    tag: "Bán chạy",
    category: "Đại số",
    image: "https://placehold.co/600x400/1e293b/white?text=Algebra+Lvl+10",
  },
  {
    title: "Hình học trực quan: Vector và ứng dụng thực tế",
    lessons: 18,
    duration: 9,
    price: 720000,
    tag: null,
    category: "Hình học",
    image: "https://placehold.co/600x400/0f172a/white?text=Vector+Geometry",
  },
  {
    title: "Thống kê và Xác suất: Nền tảng cho tương lai",
    lessons: 12,
    duration: 6,
    price: 490000,
    tag: "Mới",
    category: "Xác suất",
    image: "https://placehold.co/600x400/334155/white?text=Probability",
  },
  {
    title: "Bất đẳng thức và Bất phương trình một ẩn",
    lessons: 20,
    duration: 10,
    price: 920000,
    tag: null,
    category: "Đại số",
    image: "https://placehold.co/600x400/1e293b/white?text=Inequalities",
  },
  {
    title: "Lượng giác căn bản và các công thức biến đổi",
    lessons: 16,
    duration: 8,
    price: 550000,
    tag: "Hot",
    category: "Đại số",
    image: "https://placehold.co/600x400/0f172a/white?text=Trigonometry",
  },
  {
    title: "Hệ thức lượng trong tam giác và ứng dụng",
    lessons: 14,
    duration: 7,
    price: 680000,
    tag: null,
    category: "Hình học",
    image: "https://placehold.co/600x400/334155/white?text=Triangle+Geometry",
  },
];

export default function CourseListPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* ── Sidebar Bộ lọc (Bên trái) ── */}
        <SidebarFilter />

        {/* ── Khu vực nội dung chính (Bên phải) ── */}
        <div className="flex-1 space-y-6">
          {/* Thanh tiêu đề và công cụ sắp xếp */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <h2 className="text-2xl font-black text-[#1A2B47] tracking-tight">
                Khóa học Toán Lớp 10
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Khám phá 24 khóa học chuyên sâu về Đại số và Hình học lớp 10.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Nút chuyển đổi View Grid/List */}
              <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                <button className="p-2 bg-white shadow-sm rounded-lg text-[#F08A4B] transition-all">
                  <LayoutGrid size={18} />
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-600 transition-all">
                  <List size={18} />
                </button>
              </div>

              {/* Dropdown Sắp xếp */}
              <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-bold text-[#1A2B47] outline-none focus:ring-2 focus:ring-orange-500/10 transition-all cursor-pointer">
                <option>Mới nhất</option>
                <option>Giá: Thấp đến Cao</option>
                <option>Giá: Cao đến Thấp</option>
                <option>Phổ biến nhất</option>
              </select>
            </div>
          </div>

          {/* ── Danh sách Thẻ khóa học (Grid) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {COURSES.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          {/* ── Thanh Phân trang (Pagination) ── */}
          <div className="flex justify-center items-center gap-2 pt-10 border-t border-slate-50">
            <button className="p-2.5 rounded-xl border border-slate-100 text-slate-400 hover:bg-slate-50 transition-all">
              <ChevronLeft size={20} />
            </button>

            <button className="w-10 h-10 rounded-xl text-sm font-black bg-[#1A2B47] text-white shadow-lg shadow-blue-900/20">
              1
            </button>
            <button className="w-10 h-10 rounded-xl text-sm font-bold text-slate-400 hover:bg-slate-50 transition-all">
              2
            </button>
            <button className="w-10 h-10 rounded-xl text-sm font-bold text-slate-400 hover:bg-slate-50 transition-all">
              3
            </button>
            <span className="text-slate-300 px-1 font-bold">...</span>
            <button className="w-10 h-10 rounded-xl text-sm font-bold text-slate-400 hover:bg-slate-50 transition-all">
              12
            </button>

            <button className="p-2.5 rounded-xl border border-slate-100 text-slate-400 hover:bg-slate-50 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
