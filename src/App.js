import "./App.css";
import React from "react";
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
            "nome": "Agendamentos",
            "url": "/rh/agendamentos"
          },
          {
            "nome": "Vagas",
            "url": "/rh/vagas"
          },
          {
            "nome": "Site personalizável",
            "url": "/rh/sitepersonalizavel"
          },
          {
            "nome": "Administração",
            "url": "/rh/administracao"
          },
          {
            "nome": "Informações da conta",
            "url": "/rh/perfil"
          },
          {
            "nome": "Forma de pagamento",
            "url": "/rh/pagamento"
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
            "nome": "Anúncios de vagas",
            "url": "/adm/anunciosvagas"
          },
          {
            "nome": "Desenvolvedores",
            "url": "/adm/desenvolvedores"
          },
          {
            "nome": "Contas de empresas",
            "url": "/adm/empresas"
          }

        ]} />
        <MenuPrincipal nomeAluno="Arthur Gustavo" 
        linksObject={[
          {
            "nome": "Login",
            "url": "/user/login"
          }
        ]} />
    </div>
  );
}

export default App;
