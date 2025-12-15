import { BrowserRouter, Routes, Route } from "react-router-dom";
import VegetableList from "./pages/VegetableList";
import VegetableDetail from "./pages/VegetableDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VegetableList />} />
        <Route path="/vegetable/:id" element={<VegetableDetail />} />
      </Routes>
      <footer>2025 © Vegetable Shop</footer>
    </BrowserRouter>
  );
}

export default App;
