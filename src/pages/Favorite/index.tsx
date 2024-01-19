
import FooterFilter from "../components/FooterFilter";
import Header from "../components/Header"
import Product from "../components/Product"
import Image from "next/image"
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';


const data = [
  {
    id:4,
    name: 'Gözlük',
    price: 670 ,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/11.png',
    stokc: 345
  },
]


const Favorite = () => {

  const cart = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();
  const addToCart = (item: any) => {

    dispatch(addProduct({ ...item, quantity: 1}));
  };

  useEffect(() => {
    console.log(cart);
  }, [cart])


    return (
    
        <div>
        <div>
          <Header />
        </div>
        <div  style={{padding: 30, justifyContent: "center", display: "flex",flexDirection: "column",background: "#E0F2F1",}}>
           <div style={{color:'#349590',position:'relative',left:'50px'}}>
            <h1>Favori Ürünleriniz</h1>
           </div> 
           </div> 

        <div style={{ backgroundColor: '#f5f5f5',padding:'80px' }}>
            <div style={{ display: "flex", margin: 20, backgroundColor: '#fff', flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around" }}>

            {
                    data.map((item, key) => (
                        <Product key={key} name={item.name} price={item.price} stock={item.stokc} fiyat={item.fiyat} durum={item.durum} currency={item.currency} image={item.image} onClick={() => addToCart(item)} />
                    ))
                }
            </div>

        </div>
  
        </div>

    )
}

export default Favorite