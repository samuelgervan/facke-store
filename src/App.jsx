import { Products } from './components/Products'
import { useEffect, useState } from 'react'
import './App.css'


 

function App() {
  const [products, setProducts] = useState([])
  
  const getProducts = async () =>{
    let response= await fetch ("https://fakestoreapi.com/products")
  let data = await response.json()
  setProducts(data)
  }


  useEffect (()=>{
    getProducts()
  },[])
  if (products.length ==0){
    return <>
    <h1>cargando...</h1>
    </>
  }
   return (
    <>
      <h1>Fake Store</h1>
      <p>{products[0].tittle}</p>
      <Products products={products} />






   
    </>
  )
}

export default App
