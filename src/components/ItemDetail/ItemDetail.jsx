import ItemCount from "../itemCount/ItemCount";

const ItemDetail = (iten) => {
    return(
        <div>
            <div className="row">
                <div className="col-4 container-fluid">
                <img src={iten.imagen} alt="articulo" />
                </div>
                <div className="col-4 container-fluid">
                    <h2>{iten.nombre}</h2>
                    <h3>{iten.descripcion}</h3>
                </div>
                <div className="col-4 container-fluid">
                    <ItemCount/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail; 