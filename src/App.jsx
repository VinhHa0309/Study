import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPageTemp";
import CourseListPage from "./pages/courselist/CourseListPage";
import PracticePage from "./pages/practice/PracticePage";
import PracticePlayerPage from "./pages/practice-player/PracticePlayerPage";
import DocumentPage from "./pages/document/DocumentPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* ── NHÓM 1: CÁC TRANG TRÀN MÀN HÌNH (Không Header/Footer) ── */}
        {/* Ưu tiên đặt các trang này lên đầu để tránh bị lọt vào Layout chung */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/practice/calculus-1" element={<PracticePlayerPage />} />

        {/* ── NHÓM 2: CÁC TRANG CÓ HEADER & FOOTER (Dùng MainLayout) ── */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                {/* Trang chủ */}
                <Route path="/" element={<HomePage />} />

                {/* Trang danh sách khóa học */}
                <Route path="/courses" element={<CourseListPage />} />

                {/* Trang đấu trường luyện tập */}
                <Route path="/practice" element={<PracticePage />} />

                {/* Trang thư viện tài liệu */}
                <Route path="/resources" element={<DocumentPage />} />
                <Route path="/document" element={<DocumentPage />} />

                {/* Bạn có thể thêm các trang như Profile, Settings... vào đây sau này */}
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
