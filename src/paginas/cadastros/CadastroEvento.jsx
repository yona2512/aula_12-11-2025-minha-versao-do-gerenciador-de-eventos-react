import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cadastroEventos.css";

function CadastroEvento({ onCadastrar }) {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [eventoSalvo, setEventoSalvo] = useState(null);

  const navigate = useNavigate();

  function Enviar(e) {
    e.preventDefault();

    const novoEvento = {
      id: Date.now(),
      nome,
      data,
      local,
    };

    if (onCadastrar) {
      onCadastrar(novoEvento);
    }

    setEventoSalvo(novoEvento);
    setAlertVisible(true);

    setNome("");
    setData("");
    setLocal("");

    // fecha sozinho depois de 3 segundos
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  }

  return (
    <div className="cadastroEvento-container">
      <h2>Cadastrar Evento</h2>

      <form onSubmit={Enviar} className="form-evento">
        <label>Título do Evento:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label>Data:</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />

        <label>Local:</label>
        <input
          type="text"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          required
        />

        <div className="botoes">
          <button type="submit" className="btn-salvar">Salvar Evento</button>
          <button 
            type="button" 
            className="btn-voltar" 
            onClick={() => navigate("/")}
          >
            Voltar
          </button>
        </div>
      </form>

      {/* --- ALERTA PEQUENO --- */}
      {alertVisible && eventoSalvo && (
        <div className="alert-modal">
          <h3>Evento cadastrado!</h3>
          <p><strong>{eventoSalvo.nome}</strong> foi salvo com sucesso.</p>

        </div>
      )}
    </div>
  );
}

export default CadastroEvento;
