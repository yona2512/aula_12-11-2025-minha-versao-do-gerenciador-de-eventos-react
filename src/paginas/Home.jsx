import Carrosel from "../componentes/Carrosel";
import Evento from "../evento/Evento";
import "./home.css";

function Home({ eventos }) {
  return (
    <main className="home-container">
      <h1>Bem-vindo ao Gerenciador de Eventos</h1>
      <h2>Aqui você fica por dentro dos eventos</h2>
      <h2>Eventos cadastrados:</h2>

      {/* Container horizontal para os eventos */}
      <div className="eventos-container">
        <Evento nome="Aniversario" data="25/12/2025" local="casa" />
        <Evento nome="Mundo SENAI" data="15/11/2025" local="Auditório" />
        <Evento nome="Férias" data="12/12/2025" local="casa" />
      </div>

      {/* Eventos dinâmicos */}
      {eventos && eventos.length > 0 && (
        <>
          <h3>Eventos adicionados pelo usuário:</h3>
          <div className="eventos-container">
            {eventos.map((evento) => (
              <Evento
                key={evento.id}
                nome={evento.nome}
                data={evento.data}
                local={evento.local}
              />
            ))}
          </div>
        </>
      )}

      {/* Carrossel vem depois dos eventos */}
      <Carrosel />
    </main>
  );
}

export default Home;
