import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import produ from "../productos/productos";
import prestamo from "../promesa/Promesa";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});

    useEffect(() => {
        prestamo(2000, produ[1])
                .then(produ => setDato(produ))
                .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail iten={dato}/>
    )
}

export default ItemDetailContainer;