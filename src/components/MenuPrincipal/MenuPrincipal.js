import React from "react";
import { Link } from "react-router-dom";

const MenuPrincipal = ({nomeAluno, linksObject}) => {

    const renderLinks = () => {
        return linksObject.map(e => <Link to={e.url}>{e.nome}</Link>)
    }
  return (
    <div className="menu-principal">
      <div className="nome-aluno">{nomeAluno}</div>
      {linksObject.map(e => <Link to={e.url}>{e.nome}</Link>)}
    </div>
  );
};

export default MenuPrincipal;
