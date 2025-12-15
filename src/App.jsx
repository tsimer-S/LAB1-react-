import { BrowserRouter, Routes, Route } from "react-router-dom";
import VegetableList from "./pages/VegetableList";
import VegetableDetail from "./pages/VegetableDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VegetableList />} />
        <Route path="/vegetable/:id" element={<VegetableDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
