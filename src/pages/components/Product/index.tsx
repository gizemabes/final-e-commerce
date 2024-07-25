import React, { useState,useEffect} from 'react';
import Image from "next/image"
import {BsCartFill} from 'react-icons/Bs'
import { ProductProps } from "./ProductProps";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { LuHeart } from "react-icons/lu";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const styles = {
    cardContainer: {
        display: "flex", margin: 8, backgroundColor: 'white',flexDirection: 'column',
        boxShadow:' 2px 0px 10px rgba(0, 0, 0, 0.2)'
    },
    imageContainer: {
        padding: 26
    },
    detailsContainer: {
      display: "flex",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    productInfo: {
        display: "flex" ,flexDirection: 'column',  color: '#303037'
    },
 
  };

    const Product = (props: ProductProps) => {
    const {name, price,currency,durum, stock, image, onClick, addFavorite} = props
    const {push, pathname} = useRouter()
    
    

  
    useEffect(() => {
        
    }, [pathname]);

    return(
        <div style={styles.cardContainer}>
            <div style={{display: "flex" , flexDirection: 'row',padding: 26}}>
            <img width={250} height={250} alt="logo" src={`http://localhost:3000/${image}`}/>
            { pathname !== '/Favorite'  &&  (
            <div onClick={() => addFavorite()} style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-around', alignItems: 'center', cursor: 'pointer' }}>
            <LuHeart size={25} color={'#349590'} />
            </div>
            )}
            <div style={{display: "flex" , flexDirection: 'column', padding:20, alignItems: 'center', justifyContent: 'space-around'}} >
                <div style={styles.productInfo}>
                    <h3>{name}</h3>
                    <small>{price}TL</small>
                    <small>{stock}adet stokta</small>
                
                    
                </div>
                <div>
                    <Button label="sepete ekle" onClick={onClick} style={{ border:'1px solid #303037',backgroundColor: 'white', color: '#303037',padding:3, }}/>
                   
                </div>
            </div>
            
            </div>   
        </div>
    )
}

export default Product