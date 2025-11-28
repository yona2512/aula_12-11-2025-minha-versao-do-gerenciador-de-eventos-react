import React, { useState } from "react";
import "./cadastroEventos.css";
import{useNavigate} from "react-router-dom";//adicionado
import Modal from "../componentes/Modal"; // importe o modal

function CadastroEvento({ onCadastrar }) {
    //Estados dos campos do formulário
    const [nome, setNome] = useState("");
    const [data, setData] = useState("");
    const [local, setLocal] = useState("");
    const navigate = useNavigate(); //adicionado


    function Enviar(e) {
        e.preventDefault(); //metodo do react

        //Objeto com dados do evento
        const novoEvento = {
            id: Date.now(),
            nome,
            data,
            local,
        };

        //Evia o evento para o componente pai
        onCadastrar(novoEvento);

        //Limpa os campos após cadastrar
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
                <button type="submit" className="btn-salvar"> Salvar Evento</button>

               <button type="button" className="btn-voltar" onClick={() => navigate("/")}> Voltar </button>
                </div>

            </form>
        </div>
    );
}
export default CadastroEvento;