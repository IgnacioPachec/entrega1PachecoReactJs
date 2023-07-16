import { Link } from "react-router-dom"
import "../ItemCard/ItemCard.css"



const ItemCard = ({ id, stock, nombre, precio, descripcion, img }) => {

    return (
        <div className='col-3 m-4'>
            <div className="card" >
                <h4 className="card-title">{nombre}</h4>
                <img className="card-image" src={img} alt={nombre} />
                <div className="card-body">
                    <p className="card-description">{descripcion}</p>
                    {stock <= 10 && <p style={{fontWeight: 700, color: 'red'}}>Quedan sólo {stock} unidades!</p>}
                    <p className="card-price">Precio: ${precio}</p>
                </div>
                <Link className="btn btnAgregarCarrito"  to={`/detail/${id}`}> Agregar al Carrito </Link>
            </div>
        </div>
    )
}

export default ItemCard