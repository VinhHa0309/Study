import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/home/HomePage";

function App() {
  return (
    <MainLayout>
      <Home /> {/* Hoặc các Route khác của bạn */}
    </MainLayout>
  );
}

export default App;
