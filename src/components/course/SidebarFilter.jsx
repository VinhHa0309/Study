export default function SidebarFilter() {
  const grades = Array.from({ length: 12 }, (_, i) => i + 1);
  const topics = ["Đại số", "Hình học", "Giải tích", "Số học"];

  return (
    <aside className="w-full lg:w-64 space-y-8">
      <div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          Theo lớp
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {grades.map((grade) => (
            <button
              key={grade}
              className={`py-2 text-sm font-bold rounded-lg border transition-all ${grade === 10 ? "bg-[#1A2B47] text-white border-[#1A2B47]" : "bg-white text-slate-600 border-slate-100 hover:border-orange-200"}`}
            >
              {grade}
            </button>
          ))}
        </div>
      </div>
      {/* ... Phần Chuyên đề và Giá tiền giữ nguyên như code trước ... */}
      <button className="w-full py-3 bg-slate-50 text-slate-500 font-bold text-xs rounded-xl hover:bg-slate-100 transition-all">
        Xóa bộ lọc
      </button>
    </aside>
  );
}
