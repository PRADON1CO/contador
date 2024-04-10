import { useState } from "react";

const Contador = () => {
    //aqui agrego la logica del componente
    //let numero = 10;
    //aqui me creo el state
    const [numero, setNumero] = useState(0)

    const sumar =()=> {setNumero(numero +1)}


    return (
        //aqui puedo agregar un poquito de logica
        <section className="text-center">
            {/*  */}
            <h2>Contador</h2>
            <p>{numero}</p>
            <button className="btn btn-primary me-2" onClick={sumar}>+1</button>
            <button className="btn btn-danger" onClick={restar}>-1</button>
        </section>  
        
    );
};

export default Contador;