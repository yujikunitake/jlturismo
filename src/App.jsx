/**
 * Componente raiz da interface (a "árvore" principal do React).
 *
 * Em React, a tela é feita de componentes: funções que devolvem JSX
 * (parecido com HTML, mas é JavaScript). Aqui só dizemos que a tela
 * principal é a página Home.
 */
import Home from "./pages/Home";

function App() {
  return <Home />;
}

export default App;
