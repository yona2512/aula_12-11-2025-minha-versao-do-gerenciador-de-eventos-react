import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import "./styles.css";
import "./Header/header.css";
import "./Footer/footer.css";
import "./paginas/cadastroEventos.css";   // ajuste conforme o nome real


import CadastroEvento from "./paginas/CadastroEvento";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />   {/* 1 - Header */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/sobre" element={<Sobre />} /> 
          <Route path="/CadastroEvento" element={<CadastroEvento />} /> 
        </Routes>
        <Footer />   {/* 4 - Footer */}
      </div>
    </Router>
  );
}

export default App;
