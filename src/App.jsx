import "./App.css";
import Header from "./components/Header/Header";
import { HomePage } from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import PlatformPage from "./pages/PlatformPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
