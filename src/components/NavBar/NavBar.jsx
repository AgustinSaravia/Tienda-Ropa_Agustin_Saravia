import "./estilos.css"
import CartWidget from "./CartWidget.jsx"

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-warning">
    <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">
        <img src={props.image} alt="logo" className="logo rounded-pill"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
    <ul className="navbar-nav justify-content-center me-auto nav ">
        <li className="nav-item h5">
            <a className="nav-link" href="javascript:void(0)">REMERAS</a>
        </li>
        <li className="nav-item h5">
            <a className="nav-link" href="javascript:void(0)">BUZOS</a>
        </li>
        <li className="nav-item h5">
            <a className="nav-link" href="javascript:void(0)">PANTALONES</a>
        </li>
    </ul>
    <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Busqueda..."></input>
        <button className="btn btn-primary" type="button">BUSCAR</button>
    </form>
    <div className="carro d-flex">
        <CartWidget/>
    </div>
</div>
</div>
</nav>
    );
}

export default NavBar;