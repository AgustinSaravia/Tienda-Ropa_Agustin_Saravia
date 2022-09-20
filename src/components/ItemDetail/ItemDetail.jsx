const ItemDetail = (props) => {
    return(
        <div>
            <div className="row">
                <div className="col-6 container-fluid">
                <img src={props.imagen} alt="articulo" />
                </div>
                <div className="col-6 container-fluid">
                    <h2>{props.nombre}</h2>
                    <h3>{props.descripcion}</h3>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail; 