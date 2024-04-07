import "./App.css";
import BarraNavegacion from "./components/Navbar";
import TituloPpal from "./components/TituloPpal";
import Index from "./components/Index";
import Products from "./components/Products";
import Users from "./components/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrearProducto from "./components/CrearProducto";

function App() {
  return (
    <div>
      <BrowserRouter>
        <BarraNavegacion />
        <TituloPpal />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/crearproducto" element={<CrearProducto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
