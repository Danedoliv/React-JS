import CartWidget from "./Componentes/CartWidget";
import ItemListContainer from "./Componentes/ItemListContainer";
import NavBar from "./Componentes/NavBar";
import ItemCount from "./Componentes/ItemCount";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemCount stock="15" initial="0"/>

      <ItemListContainer greeting="Este es el greeting">
      
      </ItemListContainer>
      <ItemDetailContainer/>
    </div>
    
    
  );
}

export default App;
