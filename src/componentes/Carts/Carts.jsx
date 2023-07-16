import { useContext } from "react"
import { FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"

const Carts = () => {
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)


    return (
        <div className="container my-5">

            {
                cart.length === 0
                    ? <>
                        <h2>Tu carrito esta vacio</h2>
                        <hr />
                        <Link className="btn btn-primary" to="/">Ir a la tienda</Link>
                    </>
                    : <>
                        <h2>Tu compra</h2>
                        <hr />

                        {
                            cart.map((prod) => (
                                <div>
                                    <h4>{prod.id}</h4>
                                    <img src={prod.img} alt={prod.nombre} />
                                    <p>Precio: ${prod.precio}</p>
                                    <p>Cantidad: {prod.cantidad}</p>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() => eliminarDelCarrito(prod.id)}
                                    >
                                        <FaTrash />
                                    </button>

                                    <hr />
                                </div>
                            ))
                        }

                        <div>
                            <h5>Total: ${totalCompra()}</h5>
                            <hr />
                            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
                        </div>
                    </>
            }
        </div>
    )
}

export default Carts