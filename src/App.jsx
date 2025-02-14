import { Products } from './components/Products'
import { useEffect, useState } from 'react'
import { Carrito } from './components/carrito'
import './App.css'


 function App() {
  const [products, setProducts] = useState([])
  const [shop,setShop]=useState([])
  const [shopPage, setShopPage]=useState([])

  const getProducts = async () =>{
    let response= await fetch ("https://fakestoreapi.com/products")
  let data = await response.json()
  setProducts(data)
  }


  useEffect (()=>{
    getProducts()
  },[])
  const buyProduct =(idProduct) =>{
    setShop([...shop,idProduct])

  }
  if (products.length ==0){
    return <>
    <h1>cargando...</h1>
    </>
  }
  if (shopPage == false){

   return (
    <>
      <h1>Fake Store</h1>
      <button disabled={shop.length == 0} onClick={()=>{setShopPage(true)}}>Carrito: {shop.length}</button>
      <Products products={products} buyProduct={buyProduct}/>
       </>
  )
} else{
return<>
<Carrito shop={shop} setShopPage ={setShopPage} setShop= {setShop} />
</>
}}

export default App
