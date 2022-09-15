import "./App.css";
import MenuPrincipal from "./components/MenuPrincipal/MenuPrincipal";
import { Button } from 'antd';
import "./sass/menu-principal.scss";

function App() {
  return (
    <div className="App">
      <MenuPrincipal nomeAluno="Vítor Gôngora" 
        linksObject={[
          {
            "nome": "Dashboard",
            "url": "/dashboard"
          },
          {
            "nome": "Equipe",
            "url": "/equipe"
          }
        ]} />
    </div>
  );
}

export default App;
