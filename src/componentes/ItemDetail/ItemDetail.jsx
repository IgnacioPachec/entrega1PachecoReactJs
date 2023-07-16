import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import CartContext from "../../context/CartContext"






const ItemDetail = ({ id, nombre, precio, category, descripcion, img, stock }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    console.log(isInCart(id))


    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState("M")

    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            id,
            nombre,
            precio,
            category,
            descripcion,
            img,
            stock,
            cantidad,
            talle
        }

        agregarAlCarrito(item)
    }


    const handleSelect = (e) => {
        setTalle(e.target.value)
    }

    const handleVolver = () => {
        navigate(-1)
    }


    return (
        <div className="container my-5">
            <h2>{nombre}</h2>

            <img src={img} alt={nombre} />
            <p>{descripcion}</p>

            <h4>Precio: ${precio}</h4>
            <br />

            <select onChange={handleSelect}>
                <option value={"S"}>Small</option>
                <option value={"M"}>Medium</option>
                <option value={"L"}>Large</option>
            </select>

            {
                isInCart (id)
                    ? <Link className="btn btn-success" to="/Carts">Terminar mi compra</Link>
                    : <ItemCount
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        handleAgregar={handleAgregar} />
            }

            <hr />
            <button onClick={handleVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default ItemDetail