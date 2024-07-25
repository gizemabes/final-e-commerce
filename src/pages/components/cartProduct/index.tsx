import Image from "next/image"
import { Button } from 'primereact/button';
import { CartProps } from "./CartProps";
import { InputNumber } from 'primereact/inputnumber';
import 'primeicons/primeicons.css';
import CountInput from "../CountInput";




const CartProduct = (props:CartProps) => {
    const {name, price, stock ,image, onDelete} = props
    return(


     
<div style={{ backgroundColor: '#f5f5f5',padding:'0px',flexDirection: 'row',flexWrap: 'wrap', justifyContent: "space-between", }}>
    <div style={{ display: "flex", margin: 20, backgroundColor: 'white', flexDirection: 'row', justifyContent: "space-around" }}>
         <img width={200} height={100} alt="logo" src={`http://localhost:3000/${image}`}/>
         <div style={{flexDirection: 'column',color:'black',position:'relative',right:'0px' , top:'50px'}}>
         <h3>{name}</h3>
         <small>{stock}adet stokta</small>
         </div>

        
        
         <div style={{display:"flex" , flexDirection:'row',padding:'1px', justifyContent:'center',position:'relative' , top:'50px'}}>
         
            <div style={{color:'black',position:'relative',left:'20px'}}>
            <small>{price}tl</small>
            </div>
           
            <Button style={{color:'red' } } onClick={onDelete} aria-label="delete" color="secondary">
          delete
        </Button>
      
       
        
        </div>
    
    </div>
    
    
    
</div>

)
}

export default CartProduct