

export function Cards() {
    const products = [
        { id: 1,  name: 'Producto 1', price: 10 },
        { id: 2, name: 'Producto 2', price: 20 },
        { id: 3, name: 'Producto 3', price: 30 },
    ];

        return (
            <div className="cards-container">
                {products.map((product) => (
                    <div className="card" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Precio: ${product.price}</p>
                        <button onClick={() => handleAddToCart(product.id)}>Añadir al carrito</button>
                    </div>
                ))}
            </div>
        );
    }

    export default Cards;