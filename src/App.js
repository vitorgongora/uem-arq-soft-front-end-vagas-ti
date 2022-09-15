import "./App.css";
import MenuPrincipal from "./components/MenuPrincipal/MenuPrincipal";

function App() {
  return (
    <div className="App">
      aaaa
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
