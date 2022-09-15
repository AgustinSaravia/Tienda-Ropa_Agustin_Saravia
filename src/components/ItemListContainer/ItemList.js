import { useEffect, useState } from "react";
import Item from "../item/Item";
import prestamo from "../promesa/Promesa";


const produ = [{
    id:1,
    imagen:"reme.png",
    nombre:"Remera Negra",
    descripcion:"muy buena remera lalalsflaslfsalflsaflasflasflasflasflasflasflasflasflasflasflasflasflasldaslfaslf",
    detalles:"Detalles",
}
];

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
                produ.map(item => (
                    <Item
                    key={item.id}
                    imagen={item.imagen}
                    nombre={item.nombre}
                    descripcion={item.descripcion}
                    detalles={item.detalles}
                    />
                )
                    
                    )
            }
        </>
    )
}

export default lista;