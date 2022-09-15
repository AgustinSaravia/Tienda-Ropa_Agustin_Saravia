import { useEffect, useState } from "react";
import Item from "../item/Item";
import prestamo from "../promesa/Promesa";
import produ from '../productos/productos';

const lista = () => {

    const [produ, setProdu] = useState([])


    useEffect(() =>{
        prestamo(2000, produ)
            .then(datos => setProdu(produ))
            .catch(err => console.log(err))
    },[])


    return(
        <>
            {
                produ.map(coso => (
                    <Item
                    key={coso.id}
                    imagen={coso.imagen}
                    nombre={coso.nombre}    
                    descripcion={coso.descripcion}
                    detalles={coso.detalles}
                    />
                ))
                }
                </>
    );
};

export default lista;