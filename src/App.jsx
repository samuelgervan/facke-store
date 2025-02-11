import { useEffect, useState } from react
import './App.css'
import {Products} from './components/Products'

 

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
      <Products products={products[0]} />





   
    </>
  )
}

export default App
