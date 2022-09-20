import "./cart.css"
const Item = ({imagen, nombre, descripcion, detalles}) => {

    return(
    <div className="card carta">
            <img src={imagen} className="card-img-top" alt="articulo"/>
        <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <a href="#" className="btn btn-primary">{detalles}</a>
    </div>
</div>
    );
}

export default Item;