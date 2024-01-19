
import Header from "../components/Header/index"
import Image from "next/image"
import { Button } from 'primereact/button';
import CartProduct from "../components/cartProduct/index"
import { useSelector } from "react-redux";

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
]

const Cart = () => {
  const cart = useSelector((state: any) => state.cart);
  console.log(cart)
   
    const addToCart = () => {

    }
console.log(cart.total)
    return(

        <div>
        <div>
          <Header />
        </div>
  
        <div style={{ padding: 6, backgroundColor: "#E0F2F1" }}>
          <div
            style={{
              padding: 10,
              justifyContent: "center",
              position: "relative",
              right: "500px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image
              width={60}
              height={30}
              alt="logo"
              src="/images/cuzdanlogo.png"
            />
            <Image
              style={{ padding: 19 }}
              width={100}
              height={0}
              alt="logo"
              src="/images/Sepetim1.png"
            />
          </div>
        </div>
  
        <div
          style={{padding: 10, justifyContent: "space-around", display: "flex",flexDirection: "row",background: "#f5f5f5",}}>
          <div  style={{padding: 10, justifyContent: "center", display: "flex",flexDirection: "column",background: "#f5f5f5",}}>
             <div style={{color:'#349590',position:'relative',left:'50px'}}>
              <span>Sepetinizdeki ürünler(1)</span>
             </div> 
               <div style={{margin: 0, flexDirection: 'row', justifyContent: "center" ,backgroundColor:"#f5f5f5",width:'600px'}}>
  
                  {
                      cart?.products?.map((item:any, key:any) => {
  
                          return(
                              <CartProduct key={key} name={item.name} price={item.price} stock={item.stokc} fiyat={item.fiyat} durum={item.durum} currency={item.currency} image={item.image} onClick={addToCart} />
                          )
                      }
                      )
                  }
                   
                </div>
                <div style={{color:'#349590',position:'relative' , left:'450px'}}>
                  <span>Sepet Tutarı: {cart.total}</span>
                </div>
                <div style={{ backgroundColor: '#f5f5f5', display: 'flex', justifyContent:'flex-start',padding:195,position:'relative' , right:'780px' }}>
                  <Button 
                    label="sepeti onayla"   style={{ backgroundColor: '#80CBC4', color: '#f5f5f5',padding:10,position:'relative',left:'1050px', top:'-180px'}}/>
              </div>
                
          </div>
  
         
        
        </div>
        
      </div>

            
        
)
       
     }

export default Cart
     
    

         
