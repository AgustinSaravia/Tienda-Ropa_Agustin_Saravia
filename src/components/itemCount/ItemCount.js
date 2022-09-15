import { useState } from "react";

const ItemCount = () => {

    const [numero, setNumero] = useState(1)

    function click () {
        setNumero (numero+1)
        if (numero === 5){
            setNumero (numero)
        }
    };

    function click2 () {
        setNumero (numero-1)
        if (numero === 1){
            setNumero (numero)
        }
    }

    function añadir () {
        alert(
            "usted selecciono "+numero+" de nuestros productos" 
        )
    }

    return (
        <div className="d-flex">
        <button onClick={click}>+</button>
        <div className="m-1 "> 
            {numero} 
        </div>
        <button onClick={click2}>-</button>
        <button onClick={añadir}>añadir al carrito</button>
        </div>
    );
}

export default ItemCount;