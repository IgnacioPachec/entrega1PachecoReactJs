import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"





const ItemDetail = ({ id, nombre, precio, category, descripcion, img, stock }) => {

    const { cart, setCart } = useContext(CartContext)
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
        console.log(item)
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

            <ItemCount
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />

            <hr />
            <button onClick={handleVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default ItemDetail