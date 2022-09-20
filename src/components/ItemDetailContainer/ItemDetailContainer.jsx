import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import produ from "../productos/productos";
import prestamo from "../promesa/Promesa";


const ItemDEtailContainer = () => {
    const [dato, setDato] = useState ({});

    useEffect(() => {
        prestamo(2000, produ)
                .then(produ => setDato(produ [1]))
                .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail props={dato}/>
    )
}

export default ItemDEtailContainer;