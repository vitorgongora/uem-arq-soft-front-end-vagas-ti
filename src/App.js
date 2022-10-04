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
            "url": "/rh/dashboard"
          },
          {
            "nome": "Equipe",
            "url": "/rh/equipe"
          }
        ]} />
        <MenuPrincipal nomeAluno="Henrique Favaro" 
        linksObject={[
          {
            "nome": "Recuperar Senha",
            "url": "/user/recupPassword"
          },
          {
            "nome": "Cadastro Vaga - DEV",
            "url": "/user/DeveloperApply"
          },
          {
            "nome": "Dashboard - ADMIN",
            "url": "/adm/anunciosvagas"
          }
        ]} />
    </div>
  );
}

export default App;
