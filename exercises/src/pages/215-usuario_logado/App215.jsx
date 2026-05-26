import Componente from "./Componente";
import Form from "./Form";
import { UserProvider } from "./UserContext";

const App215 = () => {
  return (
    <div>
      <UserProvider>
        <Form />
        <Componente />
      </UserProvider>
    </div>
  );
};

export default App215;
