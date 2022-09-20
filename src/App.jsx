//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import logo from "./components/NavBar/logo.png";
import ItemCount from "./components/itemCount/ItemCount";
import Lista from "./components/ItemList/ItemList";
import ItemDEtailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
    return (
        <div>
        <NavBar
        image={logo}/>
        
        {/*<ItemListContainer greeting="Hola mundo ItemListContainer!!!" />*/}
        
        <ItemDEtailContainer/>
        <ItemCount/>
    </div>
    )
}

export default App;;