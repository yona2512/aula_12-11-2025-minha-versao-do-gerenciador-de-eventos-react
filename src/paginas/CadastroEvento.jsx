import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroEvento.css"; // Certifique-se de que esse arquivo existe

function CadastroEvento({ onCadastrar }) {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [showModal, setShowModal] = useState(false);
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

    onCadastrar(novoEvento);
    setEventoSalvo(novoEvento);
    setShowModal(true);

    setNome("");
    setData("");
    setLocal("");
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
          <button type="button" className="btn-voltar" onClick={() => navigate("/")}>
            Voltar
          </button>
        </div>
      </form>

      {/* Modal de confirmação */}
      {showModal && eventoSalvo && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Evento cadastrado com sucesso!</h3>
            <p><strong>Nome:</strong> {eventoSalvo.nome}</p>
            <p><strong>Data:</strong> {eventoSalvo.data}</p>
            <p><strong>Local:</strong> {eventoSalvo.local}</p>
            <button className="modal-close" onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CadastroEvento;