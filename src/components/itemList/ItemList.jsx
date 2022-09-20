import { useEffect, useState } from "react";
import Item from "../item/Item";
import prestamo from "../promesa/Promesa";
import produ from "../productos/productos";

    const Lista = () => {


            const [prode, setProde] = useState([]);


            useEffect(() => {
                prestamo(2000, produ)
                .then(produ => setProde(produ))
                .catch(err => console.log(err))
            }, []);


            return (
                <>
                    {
                    prode.map(coso => (
                        <Item
                            key={coso.id}
                            imagen={coso.imagen}
                            nombre={coso.nombre}
                            descripcion={coso.descripcion}
                            detalles={coso.detalles} />
                    ))}
                </>
            );
        }

export default Lista;