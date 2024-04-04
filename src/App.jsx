import "./App.css";
import BarraNavegacion from "./components/Navbar";
import TituloPpal from "./components/TituloPpal";
import Products from "./components/Products";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <BarraNavegacion></BarraNavegacion>
      <TituloPpal></TituloPpal>
      <Products></Products>
      <Users></Users>
    </div>
  );
}

export default App;
