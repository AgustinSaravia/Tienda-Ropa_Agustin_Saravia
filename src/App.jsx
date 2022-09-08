import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import logo from "./components/logo.png"



const App = () => {
    return (
    <div>
        <NavBar
        image={logo}/>
        <ItemListContainer greeting="Hola mundo ItemListContainer!!!" />
    </div>
    )
}

export default App;;