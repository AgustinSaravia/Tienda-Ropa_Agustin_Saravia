import "./estilos.css"
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
        <i class="bi bi-cart-fill"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <span className="badge bg-secondary">5</span>
    </div>
</div>
</div>
</nav>
    );
}

export default NavBar;