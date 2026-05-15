import { Flag, ArrowRight, CornerDownLeft } from "lucide-react";

export default function ActionBar({
  canSkip,
  canSubmit,
  onReport,
  onSkip,
  onSubmit,
}) {
  return (
    <footer className="flex items-center justify-between gap-4 pt-10 md:pt-12 mt-12 border-t border-slate-100">
      <div className="flex items-center gap-2 md:gap-3">
        {/* Nút Báo cáo */}
        <button
          onClick={onReport}
          className="flex items-center gap-2 px-4 md:px-5 py-3 rounded-xl border border-slate-100 text-slate-400 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 transition-all active:scale-95 text-[10px] md:text-xs font-bold uppercase tracking-wider"
        >
          <Flag size={16} /> Báo cáo
        </button>

        {/* Nút Bỏ qua */}
        {canSkip && (
          <button
            onClick={onSkip}
            className="px-4 md:px-5 py-3 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all active:scale-95 text-[10px] md:text-xs font-bold uppercase tracking-wider"
          >
            Bỏ qua
          </button>
        )}
      </div>

      {/* Nút Kiểm tra / Nộp bài - Thay đổi style dựa trên canSubmit */}
      <button
        onClick={onSubmit}
        disabled={!canSubmit}
        className={`
          flex items-center gap-3 px-8 md:px-10 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest transition-all active:scale-[0.98]
          ${
            canSubmit
              ? "bg-[#1A2B47] text-white hover:bg-slate-800 shadow-xl shadow-blue-900/10"
              : "bg-slate-100 text-slate-300 cursor-not-allowed"
          }
        `}
      >
        Kiểm tra kết quả
        {
          canSubmit ? (
            <CornerDownLeft size={18} className="text-white/60" /> // Icon enter khi có thể nộp
          ) : (
            <ArrowRight size={18} />
          ) // Icon arrow khi chưa có thể nộp
        }
      </button>
    </footer>
  );
}
