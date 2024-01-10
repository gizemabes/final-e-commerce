
import Header from "../components/Header"
import Image from "next/image"
import { Button } from 'primereact/button';
import CartProduct from "../components/cartProduct"
import { InputNumber } from 'primereact/inputnumber';


const data = [
    {
        name: 'urun',
        price: 25,
        image: '/images/urun.png',
        stokc: 333
    }
]

const Cart = () => {
   
   
    const addToCart = () => {

    }

    return(

        <div>
              <div>
            <Header/>
             </div>


             <div style={{  padding: 14, backgroundColor: '#E0F2F1'}}>

                <div style={{ padding:10, justifyContent: 'center' ,position:'relative',left:'220px'}}>
                <Image width={100} height={100} alt="logo" src='/images/sepetim.png' />
                </div>
            </div>
           
            <div style={{margin: 0, flexDirection: 'column', justifyContent: "center" ,backgroundColor:"#f5f5f5"}}>

                {
                    data.map((item, key) => {

                        return(
                            <CartProduct key={key} name={item.name} price={item.price} stock={item.stokc} image={item.image} onClick={addToCart} />
                        )
                    }
                    )
                }
            
            </div>
            
            
            <div style={{ backgroundColor: '#f5f5f5', display: 'flex', justifyContent:'flex-start',padding:180 ,position:'relative' , top:'-10px' }}>
                <Button 
                  label="sepeti onayla"   style={{ backgroundColor: '#80CBC4', color: '#f5f5f5',padding:10,position:'relative',left:'1050px', top:'-180px'}}/>
            </div>
        </div>

            
        
)
       
     }

export default Cart
     
    

         
