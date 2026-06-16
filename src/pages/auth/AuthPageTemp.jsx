import { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  BookOpen,
  ArrowLeft, // Đổi ChevronLeft thành ArrowLeft cho hiện đại hơn
  Mail,
  Lock,
  User,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        fill="#1877F2"
      />
    </svg>
  );
}

function RightPanel() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center relative bg-[#0D1B2A] h-screen w-full overflow-hidden px-12">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
          <span className="text-3xl text-[#F08A4B] font-serif font-extrabold">
            Σ
          </span>
        </div>
      </div>
      <div className="relative z-10 space-y-3 w-full max-w-sm mb-8">
        {[
          { f: "∫₀^∞ e⁻ˣ² dx = √π / 2", label: "Gaussian Integral" },
          { f: "eⁱπ + 1 = 0", label: "Euler's Identity" },
          { f: "∇²φ = 0", label: "Laplace Equation" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 flex items-center justify-between backdrop-blur-sm shadow-xl"
            style={{ opacity: 1 - i * 0.2 }}
          >
            <span className="font-mono text-xs text-[#F08A4B] font-bold">
              {item.f}
            </span>
            <span className="text-[9px] text-white/30 uppercase font-bold tracking-tighter">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="relative z-10 bg-white/5 border border-white/10 rounded-[28px] p-6 max-w-xs text-center backdrop-blur-md">
        <p className="text-white/80 text-sm italic mb-3 font-serif leading-relaxed">
          "Mathematics is the language in which God has written the universe."
        </p>
        <p className="text-[#F08A4B] text-[10px] font-black uppercase tracking-[0.2em]">
          — Galileo Galilei
        </p>
      </div>
    </div>
  );
}

function InputField({
  icon: Icon,
  label,
  type = "text",
  placeholder,
  rightEl,
}) {
  return (
    <div className="space-y-1 w-full">
      <div className="flex justify-between items-center px-1">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          {label}
        </label>
        {label === "Mật khẩu" && (
          <button className="text-[10px] font-bold text-[#F08A4B] hover:underline">
            Quên mật khẩu?
          </button>
        )}
      </div>
      <div className="relative flex items-center">
        {Icon && (
          <Icon className="absolute left-4 w-3.5 h-3.5 text-slate-400" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full bg-slate-50 border border-slate-200 rounded-xl text-xs py-3 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:border-[#F08A4B]/50 ${Icon ? "pl-11" : "pl-4"} ${rightEl ? "pr-11" : "pr-4"}`}
        />
        {rightEl && <div className="absolute right-4">{rightEl}</div>}
      </div>
    </div>
  );
}

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mode, setMode] = useState("login");
  const [showPass, setShowPass] = useState(false);
  const isLogin = mode === "login";

  useEffect(() => {
    if (location.state?.mode) {
      setMode(location.state.mode);
    }
  }, [location.state]);

  return (
    <div className="h-screen w-full flex bg-white font-sans overflow-hidden relative">
      {/* ── NÚT QUAY LẠI TRANG CHỦ ── */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-slate-400 hover:text-[#1A2B47] transition-colors group"
      >
        <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-slate-200 group-hover:bg-slate-50 transition-all">
          <ArrowLeft size={16} />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest">
          Quay lại
        </span>
      </button>

      {/* ── LEFT: FORM PANEL ── */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-8 overflow-y-auto">
        {/* Logo */}
        <div className="mb-6 flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-[#F08A4B] flex items-center justify-center shadow-lg shadow-orange-500/20">
            <BookOpen className="w-5 h-5 text-white" strokeWidth={3} />
          </div>
          <span className="text-2xl font-black text-[#1A2B47] tracking-tighter">
            Mathematiq
          </span>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-[360px] space-y-5">
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-black text-[#1A2B47] tracking-tight">
              {isLogin ? "Chào mừng trở lại" : "Tạo tài khoản"}
            </h1>
            <p className="text-slate-400 text-xs">
              {isLogin
                ? "Vui lòng nhập thông tin để đăng nhập"
                : "Gia nhập cộng đồng toán học ngay hôm nay"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-slate-200 py-2.5 rounded-xl hover:bg-slate-50 transition-all active:scale-95 font-bold text-[10px] text-slate-600">
              <GoogleIcon className="w-4 h-4" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-slate-200 py-2.5 rounded-xl hover:bg-slate-50 transition-all active:scale-95 font-bold text-[10px] text-slate-600">
              <FacebookIcon className="w-4 h-4" /> Facebook
            </button>
          </div>

          <div className="relative flex items-center py-1">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="mx-4 text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">
              Hoặc Email
            </span>
            <div className="flex-grow border-t border-slate-100"></div>
          </div>

          <div className="space-y-3">
            {!isLogin && (
              <InputField
                icon={User}
                label="Họ và tên"
                placeholder="Nguyễn Văn A"
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
              placeholder="••••••••"
              rightEl={
                <button
                  onClick={() => setShowPass(!showPass)}
                  className="text-slate-300"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />
          </div>

          <button className="w-full bg-[#F08A4B] hover:bg-[#E07030] active:scale-[0.98] text-white font-black py-3.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all text-xs uppercase tracking-widest">
            {isLogin ? "Đăng nhập ngay" : "Đăng ký tài khoản"}
          </button>

          <p className="text-center text-xs font-medium text-slate-400">
            {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
            <button
              onClick={() => setMode(isLogin ? "register" : "login")}
              className="text-[#F08A4B] font-bold hover:underline ml-1"
            >
              {isLogin ? "Đăng ký miễn phí" : "Đăng nhập tại đây"}
            </button>
          </p>
        </div>
      </div>

      {/* ── RIGHT: ILLUSTRATION ── */}
      <RightPanel />
    </div>
  );
}
