import Evento from "../evento/Evento";
import Imagens from "../componentes/Imagens";

function Home() {
  return (
    <div className="pagina-inicio">
      <h1> Bem vindo ao Gerenciador de Eventos</h1>
      <p> Aqui você fica por dentro dos eventos.</p>

      <div className="eventos">
        <Evento nome="Mundo Senai" data="05/11/2025" local="Auditorio" />
        <Evento nome="Natal" data="25/12/2025" local="Casa" />
        <Evento nome="Novo capítulo" data="12/11/2025" local="Casa" />
      </div>

      <Imagens /> {/* Aqui as imagens deslizantes aparecem */}
    </div>
  );
}

export default Home;