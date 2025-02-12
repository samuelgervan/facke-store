export const Products= ({products, buyProduct})=>{
    return<div className="row">
    {products.map((element, index)=>{
        return <div className="col-4" key={index}>
            <h1>{element.tittle}</h1>
            <img src={element.image} height={200} width={300} alt="" />
            <h3>Precio: ${element.price}</h3>
            <button onClick={()=>{buyProduct(element.id)}}>Comprar</button> 
        </div>

    })}
    </div>
}