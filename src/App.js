import CartWidget from "./Componentes/CartWidget";
import ItemListContainer from "./Componentes/ItemListContainer";
import NavBar from "./Componentes/NavBar";
import ItemCount from "./Componentes/ItemCount";


function App() {
  return (
    <div>
      <NavBar/>
      <ItemCount stock="15" initial="0"/>

      <ItemListContainer greeting="Este es el greeting">
      
      </ItemListContainer>
     
    </div>
    
    
  );
}

export default App;
