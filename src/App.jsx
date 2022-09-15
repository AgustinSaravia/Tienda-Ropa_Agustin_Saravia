import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import logo from "./components/NavBar/logo.png"
import Item from "./components/item/Item";
import ItemCount from "./components/itemCount/ItemCount";



const App = () => {
    return (
    <div>
        <NavBar
        image={logo}/>
        <div>
        <ItemListContainer greeting="Hola mundo ItemListContainer!!!" />
        </div><br/>
        <Item/>
        <br/>
        <ItemCount/>
    </div>
    )
}

export default App;;