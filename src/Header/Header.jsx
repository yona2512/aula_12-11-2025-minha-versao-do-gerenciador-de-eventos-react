import { Link, useNavigate } from "react-router-dom";

function Header({ onLogout }) {
  const navigate = useNavigate();

  function handleClick() {
    onLogout();      
    navigate("/");   // volta para o Login
  }

  return (
    <header>
      <h2>Gerenciador de Eventos SENAI</h2>
      <nav>
        <Link to="/home">Início</Link> | 
        <Link to="/sobre">Sobre</Link> | 
        <Link to="/CadastroEvento">Cadastrar Evento</Link> |
        <button onClick={handleClick} style={{ marginLeft: "10px" }}>
          Sair
        </button>
      </nav>
    </header>
  );
}

export default Header;