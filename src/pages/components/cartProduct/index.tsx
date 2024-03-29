import Image from "next/image"
import { Button } from 'primereact/button';
import { CartProps } from "./CartProps";
import { InputNumber } from 'primereact/inputnumber';
import 'primeicons/primeicons.css';
import CountInput from "../CountInput";




const CartProduct = (props:CartProps) => {
    const {name, price, stock,fiyat,durum,currency ,image} = props
    return(


     
<div style={{ backgroundColor: '#f5f5f5',padding:'0px',flexDirection: 'row',flexWrap: 'wrap', justifyContent: "space-between", }}>
    <div style={{ display: "flex", margin: 20, backgroundColor: 'white', flexDirection: 'row', justifyContent: "space-around" }}>
         <Image width={200} height={100} alt="logo" src={image}/>
         <div style={{flexDirection: 'column',color:'black',position:'relative',right:'0px' , top:'50px'}}>
         <h3>{name}</h3>
         <small>{durum+' ' +stock}</small>
         </div>

        
        
         <div style={{display:"flex" , flexDirection:'row',padding:'20px', justifyContent:'center',position:'relative' , top:'50px'}}>
         <CountInput />
            <div style={{color:'black',position:'relative',left:'20px'}}>
            <small>{fiyat+' '+price + ' ' + currency}</small>
            </div>
           

      
       
        
        </div>
    
    </div>
    
    
    
</div>

)
}

export default CartProduct