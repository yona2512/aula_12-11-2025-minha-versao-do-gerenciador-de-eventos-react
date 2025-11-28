import Evento from "../componentes/Evento";

function Home({ eventos }) {
  return (
    <main>
      <h1>Bem-vindo ao Gerenciador de Eventos</h1>
      <p>Aqui você fica por dentro dos eventos</p>
      <p>Eventos cadastrados:</p>

      {/* Eventos fixos */}
      <Evento nome="Mundo Senai" 
      data="05/11/2025" 
      local="Auditório" />
      <Evento nome="Passeio didático"
       data="25/10/2025" 
       local="Floresta do Chapecó" />
      <Evento nome="EFAPI"
       data="17/10/2025"
        local="EFAPI" />
      <Evento nome="Mundo SENAI" 
      data="15/11/2025"
       local="Auditório" />
      <Evento nome="Volta das férias" 
      data="02/12/2025" 
      local="EEB Tancredo de Almeida Neves" />
      <Evento nome="Publicação do Novo capítulo de TADC" 
      data="12/12/2025"
       local="YouTube" />

      {/* Eventos dinâmicos */}
      {eventos && eventos.length > 0 && (
        <>
          <h3>Eventos adicionados pelo usuário:</h3>
          {eventos.map((evento) => (
            <Evento
              key={evento.id}
              nome={evento.nome}
              data={evento.data}
              local={evento.local}
            />
          ))}
        </>
      )}
    </main>
  );
}

export default Home;