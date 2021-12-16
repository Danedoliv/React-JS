import CartWidget from "./Componentes/CartWidget";
import ItemListContainer from "./Componentes/ItemListContainer";
import NavBar from "./Componentes/NavBar";
import ItemCount from "./Componentes/ItemCount";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import Rutas from "../src/Routes/Rutas"

function App() {
  return (
    <div>
      <NavBar/>
      <Rutas/>
      

      <ItemListContainer/> 
      
      
      <ItemDetailContainer/>
    </div>
    
    
  );
}

export default App;
