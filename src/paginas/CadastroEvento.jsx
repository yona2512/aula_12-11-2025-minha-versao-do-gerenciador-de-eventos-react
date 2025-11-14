import React, { useState } from "react";

function CadastroEvento({ onCadastrar }) {
    //Estados dos campos do formulário
    const [nome, setNome] = useState("");
    const [data, setData] = useState("");
    const [local, setLocal] = useState("");


    function Enviar(e) {
        e.preventDefault();

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
        <div classname="cadastroEvento-container">
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
                <button type="submit" className="btn-salvar"> Salvar Eventos</button>
               <button type="submit" className="btn-salvar"> Voltar </button>
            </form>
        </div>
    );
}
export default CadastroEvento;