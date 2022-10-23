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
            "nome": "Dashboard - ADMIN",
            "url": "/adm/anunciosvagas"
          }
        ]} />
        <MenuPrincipal nomeAluno="Arthur Gustavo" 
        linksObject={[
          {
            "nome": "Login",
            "url": "/user/login"
          },
          {
            "nome": "Cadastro",
            "url": "/user/cadastro"
          },
          {
            "nome": "Vagas Usuário",
            "url": "/user/vagas"
          },
          {
            "nome": "Site Personalizavel",
            "url": "/user/sitepersonalizavel"
          }
        ]} />
    </div>
  );
}

export default App;
