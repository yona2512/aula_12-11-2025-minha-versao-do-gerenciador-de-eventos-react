import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Header from "./Header/Header"; /* importa o cabeçalho */
import Footer from "./Footer/Footer"; /* importa o rodapé */
import Home from "./paginas/Home"; /* importa os componentes da pagina */
import Sobre from "./paginas/Sobre"; /* importa os componentes da pagina */
import "./styles.css"; /* importa arquivo CSS */
import "./Header/header.css";
import "./Footer/footer.css";



function App() { /* cria função app */
  return ( /* diz que Vai retornar */
    <Router> {/* habilita o uso das rotas */}
      <div className="app"> {/* abre uma classe para o CSS */}
        <Header /> {/* renderiza o cabeçalho do app */}

        {/* Definição das rotas */}
        <Routes> {/* define o que será mostrado em cada link */}
          <Route path="/" element={<Home />} /> 
          <Route path="/sobre" element={<Sobre />} /> 
        </Routes> 

        <Footer /> {/* renderiza o rodapé */}
        
      </div> {/* fecha div */}
    </Router> /* fecha Router */
  ); /*fecha return*/
} /* fecha função */

export default App; /* exporta o componente app */



