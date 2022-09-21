//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import logo from "./components/NavBar/logo.png";
//import Lista from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
    return (
        <div>
        <NavBar
        image={logo}/>
        
        {/*<ItemListContainer greeting="Hola mundo ItemListContainer!!!" />*/}
        
        <ItemDetailContainer/>
    </div>
    )
}

export default App;;