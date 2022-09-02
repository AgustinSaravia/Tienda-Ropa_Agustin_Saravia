import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/Navbar"
const App = () => {
    return (
    <div>
        <NavBar/>
        <ItemListContainer greeting="Hola mundo ItemListContainer!!!" />
    </div>
    )
}

export default App;;