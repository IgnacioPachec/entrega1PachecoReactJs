
export const Usuarios = ({nombre, edad, curso}) => {

    return (
        <div className="div-usuario">
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
            <p>Curso: {curso}</p>
            <hr />
        </div>
    )

}

export default Usuarios