import ItemCard from "../ItemCard/ItemCard"
import "../ItemList/ItemList.css"



const ItemList = ({items}) => {

    return (
        <div>
            <h2 className="ProductosItemList">Productos</h2>
            <hr/>

            <div className='row '>
                {
                    
                    items.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                }
            </div>


        </div>
    )
}

export default ItemList