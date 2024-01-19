import FooterFilter from "../components/FooterFilter";
import Header from "../components/Header"
import Product from "../components/Product"
import Image from "next/image"

import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';

const data = [
  { id:1,
    name: 'Pantolon',
    price: 300,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/ic2.png',
    stokc: 345
  },
  {
    id:2,
    name: 'Erkek T-shirt',
    price: 500,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/iç3.png',
    stokc: 46
  },
  {
    id:3,
    name: 'Etek',
    price: 350,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/iç4.png',
    stokc: 600
  },
  
  { id:4,
    name: 'Elbise',
    price: 250,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/33.png',
    stokc: 600
  },
  {
    id:5,
    name: 'Elbise',
    price: 360,
    currency:'₺',
    durum:'Stok ',
    fiyat:'Fiyat',
    image: '/images/iç5.png',
    stokc: 46
  },
  {
    id:6,
    name: 'Kadın T-shirt',
    price: 250,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/55.png',
    stokc: 600
  },
  
  ];
  
  



const Underwear = () => {

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
                        <Product key={key} name={item.name} price={item.price}fiyat={item.fiyat} durum={item.durum} currency={item.currency}stock={item.stokc} image={item.image}  onClick={() => addToCart(item)} />
                    ))
                }

            </div>

        </div>
  
        </div>

    )
}

export default Underwear