function Evento({ nome, data, local }) {
  return (
    <div className="evento">
      <h3>{nome}</h3>
      {/* Exibe o nome do evento a partir dos dados recebidos via props */}
      <p>Data: {data}</p>
      {/* Mostra a data a partir dos dados recebidos via props */}
      <p>Local: {local}</p>
      {/* Mostra o local a partir dos dados recebidos via props */}
    </div>
  );
}

export default Evento;