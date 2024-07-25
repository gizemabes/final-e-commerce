import Image from "next/image"
import { Button } from 'primereact/button';

import { InputNumber } from 'primereact/inputnumber';
import 'primeicons/primeicons.css';
import CountInput from "../CountInput";
import { FavoriteProps } from "./FavoriteProps";




const CardFavorite = (props:FavoriteProps) => {
    const {name, price, stock ,image, onClick} = props
    return(


     
<div style={{
      backgroundColor: '#f5f5f5',
      padding: '0px',
      margin: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}>
        <img width={200} height={100} alt="logo" src={`http://localhost:3000/${image}`} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          color: 'black',
          marginLeft: '20px',
        }}>
          <h3 >{name}</h3>
          <small>{stock} adet stokta</small>
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      
        <div style={{ color: 'black', marginLeft: '20px' }}>
          <small>{price} TL</small>
        </div>
        <Button
          onClick={onClick}
       
          style={{ color:'#349590', cursor: 'pointer',marginLeft: '20px' }}
         
        >
          Sepete Ekle
        </Button>
      </div>
    </div>

)
}

export default CardFavorite