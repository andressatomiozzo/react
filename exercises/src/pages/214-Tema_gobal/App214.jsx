import Componente from "./Componente";
import { TemaProvider } from "./temaContext";

const App214 = () => {

  return (
    <TemaProvider> //QUalquer componente aqui dentro consegue acessar as variáveis descritas no TemaProvider
      <Componente />
    </TemaProvider>
  );
}

export default App214
