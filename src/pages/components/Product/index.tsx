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
    const {name, price,currency,fiyat,durum, stock, image, onClick} = props
    const {push, pathname} = useRouter()
    
    

  
    useEffect(() => {
        
    }, [pathname]);

    return(
        <div style={styles.cardContainer}>
            <div style={{display: "flex" , flexDirection: 'row',padding: 26}}>
            <Image width={250} height={250} alt="logo" src={image}/>
            { pathname !== '/Favorite'  &&  (
            <div onClick={() => push('Favorite')} style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-around', alignItems: 'center', cursor: 'pointer' }}>
            <LuHeart size={25} color={'#349590'} />
            </div>
            )}
            <div style={{display: "flex" , flexDirection: 'column', padding:20, alignItems: 'center', justifyContent: 'space-around'}} >
                <div style={styles.productInfo}>
                    <h3>{name}</h3>
                    <small>{fiyat+' '+price + ' ' + currency}</small>
                    <small>{durum+' ' +stock}</small>
                    
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