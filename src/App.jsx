import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import logo from "./components/NavBar/logo.png"
import ItemCount from "./components/ItemListContainer/ItemCount";



const App = () => {
    return (
    <div>
        <NavBar
        image={logo}/>
        <div>
        <ItemListContainer greeting="Hola mundo ItemListContainer!!!" />
        </div><br/>
        <ItemCount/>
    </div>
    )
}

export default App;;