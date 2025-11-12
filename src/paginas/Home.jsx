import Evento from "../componentes/Evento"; /*  */

function Home() { /* cria função Home */
  return ( /* diz que Vai retornar */
    <main> {/* abre a tag para o conteúdo */}
      <h1> Bem vindo ao Gerenciador de Eventos</h1> {/* titulo */}
      <p> Aqui você fica por dentro dos eventos.</p> {/* paragrafo */}

      {/* Exibindo os eventos*/}
      <div className="eventos">
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditorio" /> {/* passa propriedades pra ele */}
      <Evento nome="Natal" data="25/12/2025" local="Casa" />
      <Evento nome="Novo capítulo" data="12/11/2025" local="Casa" />
    </div>
    </main> /* fecha main */
    
  );/* fecha return */
}/* fecha função */
export default Home; /* Exporta o componente Home (página) */
