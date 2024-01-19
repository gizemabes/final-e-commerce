
import FooterFilter from "../components/FooterFilter";
import Header from "../components/Header"
import Product from "../components/Product"
import Image from "next/image"
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';

const data = [
  {
    id:1,
    name: 'Küpe',
    price: 50 ,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/1.png',
    stokc: 345
  
    
  },
  {
    id:2,
    name: 'Çanta',
    price: 250,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/2.png',
    stokc: 46
  },
  {
    id:3,
    name: 'Ayakkabı',
    price: 645,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/3.png',
    stokc: 600
  },
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
  {
    id:5,
    name: 'Gözlük',
    price: 769,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/22.png',
    stokc: 46
  },

  {
    id:6,
    name: 'Saat',
    price: 350,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/44.png',
    stokc: 46
  }
  
  ];
  
  



const Outerwear = () => {

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

        <div>
          <FooterFilter />
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

export default Outerwear