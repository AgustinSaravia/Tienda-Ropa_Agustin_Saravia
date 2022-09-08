const Curso = (props) => {
    return (
        <>
        <h2>{props.name}</h2>
        <p>profesor: {props.profesor}</p>
        <p>duracion: {props.duracion} semanas</p>
        <img src ={props.image} alt="" ></img>
        </>
    );
}

export default Curso;