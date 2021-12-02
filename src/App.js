import CartWidget from "./Componentes/CartWidget";
import ItemListContainer from "./Componentes/ItemListContainer";
import NavBar from "./Componentes/NavBar";


function App() {
  return (
    <div className="container-fluid">
      <NavBar/>
      <ItemListContainer greeting="Este es el greeting">
      
      </ItemListContainer>
      
    </div>
    
    
  );
}

export default App;
