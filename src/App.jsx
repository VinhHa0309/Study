import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
// Nhớ import file mới này nhé
import CourseListPage from "./pages/courselist/CourseListPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. Trang Login/Register: Tràn màn hình, không có Header/Footer */}
        <Route path="/login" element={<AuthPage />} />

        {/* 2. Các trang sử dụng MainLayout (Có Header/Footer) */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                {/* Trang chủ */}
                <Route path="/" element={<HomePage />} />

                {/* Trang danh sách khóa học bạn vừa tạo */}
                <Route path="/courses" element={<CourseListPage />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
