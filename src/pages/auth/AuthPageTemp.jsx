import { useState, useEffect } from "react";
import { Eye, EyeOff, BookOpen, ArrowLeft, Mail, Lock, User, Sparkles, Shield, Zap } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

/* ── SVG Brand Icons ── */
function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
    </svg>
  );
}

/* ── Floating Math Symbol ── */
function FloatSymbol({ symbol, style }) {
  return (
    <div
      className="absolute select-none pointer-events-none font-mono font-bold text-white/[0.06]"
      style={style}
    >
      {symbol}
    </div>
  );
}

/* ── Right Decorative Panel ── */
function RightPanel({ isLogin }) {
  const mathSymbols = [
    { symbol: "∫", style: { top: "6%", left: "8%", fontSize: "5rem" } },
    { symbol: "∑", style: { top: "12%", right: "10%", fontSize: "4rem" } },
    { symbol: "π", style: { top: "35%", left: "5%", fontSize: "6rem" } },
    { symbol: "√", style: { top: "50%", right: "8%", fontSize: "5rem" } },
    { symbol: "∞", style: { bottom: "20%", left: "12%", fontSize: "4.5rem" } },
    { symbol: "∂", style: { bottom: "8%", right: "15%", fontSize: "4rem" } },
    { symbol: "Δ", style: { top: "70%", left: "40%", fontSize: "3.5rem" } },
    { symbol: "λ", style: { top: "20%", left: "45%", fontSize: "3rem" } },
  ];

  const formulas = [
    { f: "eⁱπ + 1 = 0", label: "Euler's Identity", color: "#F08A4B" },
    { f: "∫₀^∞ e⁻ˣ² dx = √π/2", label: "Gaussian Integral", color: "#60A5FA" },
    { f: "E = mc²", label: "Mass–Energy Equivalence", color: "#34D399" },
    { f: "∇²φ = ρ/ε₀", label: "Gauss's Law", color: "#A78BFA" },
  ];

  const stats = [
    { icon: <Sparkles size={14} />, value: "2,540+", label: "Tài liệu" },
    { icon: <Zap size={14} />, value: "15k+", label: "Học viên" },
    { icon: <Shield size={14} />, value: "98%", label: "Hài lòng" },
  ];

  return (
    <div className="hidden lg:flex flex-col relative bg-[#080F1A] h-screen w-full overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #F08A4B 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }} />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating math symbols */}
      {mathSymbols.map((s, i) => <FloatSymbol key={i} symbol={s.symbol} style={s.style} />)}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-14 gap-8">

        {/* Brand Logo */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #F08A4B, #e05a1a)", boxShadow: "0 20px 60px rgba(240,138,75,0.4)" }}>
              <span className="text-4xl font-serif font-black text-white">Σ</span>
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-[#080F1A] flex items-center justify-center">
              <span className="text-[8px]">✓</span>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-white font-black text-2xl tracking-tight">Mathematiq</h2>
            <p className="text-white/40 text-xs font-medium mt-0.5">Nền tảng học toán hàng đầu Việt Nam</p>
          </div>
        </div>

        {/* Formula Cards */}
        <div className="w-full max-w-sm space-y-2.5">
          {formulas.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] px-5 py-3.5 flex items-center justify-between backdrop-blur-sm transition-all duration-300 hover:border-white/20 group"
              style={{
                background: "rgba(255,255,255,0.04)",
                opacity: 1 - i * 0.15,
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${item.color}08, transparent)` }} />
              <span className="font-mono text-sm font-bold relative z-10" style={{ color: item.color }}>
                {item.f}
              </span>
              <span className="text-[9px] text-white/25 uppercase font-bold tracking-wider relative z-10">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="w-full max-w-sm grid grid-cols-3 gap-3">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/[0.08] p-3.5 text-center"
              style={{ background: "rgba(255,255,255,0.04)" }}>
              <div className="flex items-center justify-center gap-1 text-[#F08A4B] mb-1.5">
                {s.icon}
              </div>
              <div className="text-white font-black text-lg leading-none">{s.value}</div>
              <div className="text-white/30 text-[10px] font-medium mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="w-full max-w-sm rounded-2xl border border-white/[0.08] p-5 text-center"
          style={{ background: "rgba(240,138,75,0.06)" }}>
          <div className="text-[#F08A4B] text-2xl font-serif mb-2">"</div>
          <p className="text-white/60 text-xs italic leading-relaxed font-medium">
            Mathematics is the language in which God has written the universe.
          </p>
          <p className="text-[#F08A4B] text-[10px] font-black uppercase tracking-[0.15em] mt-3">
            — Galileo Galilei
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Input Field Component ── */
function InputField({ icon: Icon, label, type = "text", placeholder, rightEl, hint }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="space-y-1.5 w-full">
      <div className="flex justify-between items-center px-0.5">
        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
          {label}
        </label>
        {hint && (
          <button className="text-[11px] font-semibold text-[#F08A4B] hover:text-[#d97030] transition-colors">
            {hint}
          </button>
        )}
      </div>
      <div className={`relative flex items-center rounded-xl border transition-all duration-200 ${
        focused
          ? "border-[#F08A4B]/70 bg-white shadow-[0_0_0_4px_rgba(240,138,75,0.08)]"
          : "border-slate-200 bg-slate-50/80 hover:border-slate-300 hover:bg-white"
      }`}>
        {Icon && (
          <div className={`absolute left-3.5 transition-colors duration-200 ${focused ? "text-[#F08A4B]" : "text-slate-350"}`}>
            <Icon size={15} />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-transparent text-sm text-slate-800 py-3.5 outline-none placeholder-slate-300 ${Icon ? "pl-10" : "pl-4"} ${rightEl ? "pr-10" : "pr-4"}`}
        />
        {rightEl && <div className="absolute right-3.5">{rightEl}</div>}
      </div>
    </div>
  );
}

/* ── Main Auth Page ── */
export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mode, setMode] = useState("login");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const isLogin = mode === "login";

  useEffect(() => {
    if (location.state?.mode) {
      setMode(location.state.mode);
    }
  }, [location.state]);

  return (
    <div className="h-screen w-full flex bg-white font-sans overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .auth-font { font-family: 'Inter', sans-serif; }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .slide-up { animation: slideUp 0.4s ease forwards; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .fade-in { animation: fadeIn 0.35s ease forwards; }
      `}</style>

      {/* ── LEFT: Form Panel ── */}
      <div className="auth-font relative w-full lg:w-[46%] xl:w-[42%] flex flex-col h-full bg-white overflow-y-auto">

        {/* Back button */}
        <div className="px-8 pt-7">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full border border-slate-150 flex items-center justify-center group-hover:border-slate-300 group-hover:bg-slate-50 transition-all">
              <ArrowLeft size={15} />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest">Quay lại</span>
          </button>
        </div>

        {/* Form area */}
        <div className="flex flex-col justify-center items-center flex-1 px-8 py-8">
          <div className="w-full max-w-[400px]">

            {/* Logo */}
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-200"
                style={{ background: "linear-gradient(135deg, #F08A4B 0%, #e05a1a 100%)" }}>
                <BookOpen size={22} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="text-center">
                <span className="text-2xl font-black text-[#0F172A] tracking-tight block">Mathematiq</span>
                <span className="text-xs text-slate-400 font-medium">Học toán thông minh hơn mỗi ngày</span>
              </div>
            </div>

            {/* Mode Toggle Tabs */}
            <div className="relative flex bg-slate-100 rounded-2xl p-1 mb-7">
              <div
                className="absolute top-1 bottom-1 w-1/2 bg-white rounded-xl shadow-sm transition-all duration-300 ease-out"
                style={{ left: isLogin ? "4px" : "calc(50% + 0px)" }}
              />
              <button
                onClick={() => setMode("login")}
                className={`relative z-10 flex-1 py-2.5 text-sm font-bold rounded-xl transition-colors duration-300 ${isLogin ? "text-[#0F172A]" : "text-slate-400 hover:text-slate-600"}`}
              >
                Đăng nhập
              </button>
              <button
                onClick={() => setMode("register")}
                className={`relative z-10 flex-1 py-2.5 text-sm font-bold rounded-xl transition-colors duration-300 ${!isLogin ? "text-[#0F172A]" : "text-slate-400 hover:text-slate-600"}`}
              >
                Đăng ký
              </button>
            </div>

            {/* Title */}
            <div className="mb-6 slide-up" key={mode}>
              <h1 className="text-[1.6rem] font-black text-[#0F172A] tracking-tight leading-tight">
                {isLogin ? "Chào mừng trở lại! 👋" : "Tạo tài khoản mới ✨"}
              </h1>
              <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">
                {isLogin
                  ? "Đăng nhập để tiếp tục hành trình chinh phục toán học của bạn."
                  : "Gia nhập cộng đồng 15.000+ học sinh đang học toán cùng Mathematiq."}
              </p>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <button className="flex items-center justify-center gap-2.5 border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 py-3 rounded-xl active:scale-[0.98] transition-all shadow-sm text-sm font-semibold text-slate-600">
                <GoogleIcon className="w-4 h-4" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2.5 border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 py-3 rounded-xl active:scale-[0.98] transition-all shadow-sm text-sm font-semibold text-slate-600">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                Facebook
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-slate-100" />
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">hoặc dùng email</span>
              <div className="flex-1 h-px bg-slate-100" />
            </div>

            {/* Fields */}
            <div className="space-y-4 fade-in" key={`fields-${mode}`}>
              {!isLogin && (
                <InputField
                  icon={User}
                  label="Họ và tên"
                  placeholder="Nguyễn Văn An"
                />
              )}
              <InputField
                icon={Mail}
                label="Email"
                type="email"
                placeholder="name@example.com"
              />
              <InputField
                icon={Lock}
                label="Mật khẩu"
                type={showPass ? "text" : "password"}
                placeholder="Tối thiểu 8 ký tự"
                hint={isLogin ? "Quên mật khẩu?" : null}
                rightEl={
                  <button
                    onClick={() => setShowPass(!showPass)}
                    className="text-slate-300 hover:text-slate-500 transition-colors"
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                }
              />
              {!isLogin && (
                <InputField
                  icon={Lock}
                  label="Xác nhận mật khẩu"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Nhập lại mật khẩu"
                  rightEl={
                    <button
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="text-slate-300 hover:text-slate-500 transition-colors"
                    >
                      {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  }
                />
              )}
            </div>

            {/* Remember me (login only) */}
            {isLogin && (
              <label className="flex items-center gap-2.5 mt-4 cursor-pointer group">
                <div className="w-4 h-4 rounded border-2 border-slate-200 group-hover:border-[#F08A4B] transition-colors flex items-center justify-center">
                </div>
                <span className="text-xs text-slate-400 font-medium">Ghi nhớ đăng nhập</span>
              </label>
            )}

            {/* CTA Button */}
            <button
              className="w-full mt-6 py-3.5 rounded-xl text-white text-sm font-black uppercase tracking-widest active:scale-[0.98] transition-all duration-200 relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #F08A4B 0%, #e0591a 100%)",
                boxShadow: "0 8px 30px rgba(240,138,75,0.4)",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #ff9d5e 0%, #e8601f 100%)" }} />
              <span className="relative z-10">
                {isLogin ? "Đăng nhập ngay →" : "Tạo tài khoản miễn phí →"}
              </span>
            </button>

            {/* Terms (register only) */}
            {!isLogin && (
              <p className="text-center text-[11px] text-slate-400 mt-4 leading-relaxed">
                Bằng cách đăng ký, bạn đồng ý với{" "}
                <button className="text-[#F08A4B] font-semibold hover:underline">Điều khoản sử dụng</button>{" "}
                và{" "}
                <button className="text-[#F08A4B] font-semibold hover:underline">Chính sách bảo mật</button>
              </p>
            )}

            {/* Switch mode */}
            <p className="text-center text-sm text-slate-400 font-medium mt-5">
              {isLogin ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
              <button
                onClick={() => setMode(isLogin ? "register" : "login")}
                className="text-[#F08A4B] font-bold hover:text-[#d97030] transition-colors"
              >
                {isLogin ? "Đăng ký ngay" : "Đăng nhập"}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-6 text-center">
          <p className="text-[10px] text-slate-300 font-medium">
            © 2024 Mathematiq · Empowering Mathematical Discovery
          </p>
        </div>
      </div>

      {/* ── RIGHT: Illustration Panel ── */}
      <div className="hidden lg:block flex-1">
        <RightPanel isLogin={isLogin} />
      </div>
    </div>
  );
}
