import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./paginas/home/Home";
import Sobre from "./paginas/Sobre";
import CadastroEvento from "./paginas/cadastros/CadastroEvento";

import "./styles.css";
import "./Header/header.css";
import "./Footer/footer.css";
import "./paginas/cadastros/cadastroEventos.css";

import Login from "./paginas/Login";


function App() {
  const [eventos, setEventos] = useState([]);
  const [logado, setLogado] = useState(false);

  function handleCadastrarEvento(novoEvento) {
    setEventos([...eventos, novoEvento]);
  }

  function handleLogout() {
    setLogado(false);   
  }

  return (
    <Router>
      <div className="app">
        {logado && <Header onLogout={handleLogout} />} 

        <Routes>
          <Route path="/" element={<Login setLogado={setLogado} />} />

          <Route
            path="/home"
            element={logado ? <Home eventos={eventos} /> : <Navigate to="/" />}
          />

          <Route
            path="/sobre"
            element={logado ? <Sobre /> : <Navigate to="/" />}
          />

          <Route
            path="/CadastroEvento"
            element={
              logado ? (
                <CadastroEvento onCadastrar={handleCadastrarEvento} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>

        {logado && <Footer />}
      </div>
    </Router>
  );
}

export default App;