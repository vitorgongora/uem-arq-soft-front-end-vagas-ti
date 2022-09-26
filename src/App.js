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
        <MenuPrincipal nomeAluno="Henrique Favaro" 
        linksObject={[
          {
            "nome": "Recuperar Senha",
            "url": "/dashboard"
          },
          {
            "nome": "Cadastro Vaga - DEV",
            "url": "/equipe"
          },
          {
            "nome": "Dashboard - ADMIN",
            "url": "/adm/admdashboard"
          }
        ]} />
    </div>
  );
}

export default App;
