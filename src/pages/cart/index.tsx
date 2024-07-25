
import Header from "../components/Header/index"
import Image from "next/image"
import { Button } from 'primereact/button';
import CartProduct from "../components/cartProduct/index"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import baseApi from '../../config/baseApi'


const Cart = () => {
  const cart = useSelector((state: any) => state.cart);
  const [cartItems, setCartItems] = useState<any>()
  const [user , setUser] = useState<any>()
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
   
    if (storedUser) {
      try {
        const userObj = JSON.parse(storedUser);
       
        setUser(userObj);  // user state'ini güncelliyoruz
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    }
  }, []);  // Bu useEffect yalnızca component mount olduğunda çalışır

  useEffect(() => {
     // user state'i güncellendikten sonra bu useEffect çalışır
      const fetchData = async () => {
        try {
          const response = await baseApi.get('basket/a', {params: { id: user[0].id} 
          
          });
          
          console.log('cart', response.data)
          setCartItems(response.data);
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      };
      fetchData();
    
  }, [user]);  

  useEffect(() => {
    setTotal(getTotalCart());
  }, [cartItems]);


  const getTotalCart = () => {
    let sum = 0;
    if (cartItems) {
      cartItems.forEach((item: any) => {
        sum += item.quantity * item.price;
      });
    }
    return sum;
  };
   
    const handleOrder = async () => {
      const body = {
        cartItems,
        total
      }

      try{
        await baseApi.post('order', body)
        await baseApi.post('notification', {
          message: `${user[0].name} bought items`,
          customer_id: user[0].id,
          product: body,
          date: new Date().toISOString()
        });
  
        window.location.reload()
      }catch(e:any){
        alert(e.response.data.message)
      }
   
     3
    }
    const handleDelete = async (items: any) => {
   

    try {
      const response = await baseApi.delete(`/basket/${items.basket_id}`);
      console.log('Product deleted:', response);
      window.location.reload();
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };

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
          style={{padding: 20, justifyContent: "space-around", display: "flex",flexDirection: "row",background: "#f5f5f5",}}>
          <div  style={{padding: 30, justifyContent: "center", display: "flex",flexDirection: "column",background: "#f5f5f5",}}>
             <div style={{color:'#349590',position:'relative',left:'50px'}}>
              <span>Sepetinizdeki ürünler: {cartItems?.length} adet</span>
             </div> 
               <div style={{margin: 0, flexDirection: 'row', justifyContent: "center" ,backgroundColor:"#f5f5f5",width:'600px'}}>
  
                  {
                      cartItems?.map((item:any, key:any) => {
  
                          return(
                              <CartProduct key={key} name={item.name} price={item.price} stock={item.stock} image={item.file_path} onClick={() => console.log('aa')}    onDelete={() => handleDelete(item)} />
                          )
                      }
                      )
                  }
                   
                </div>
                <div style={{color:'#349590',position:'relative' , left:'450px'}}>
                <span>Sepet Tutarı: {getTotalCart()}</span>
                </div>
                <div style={{ backgroundColor: '#f5f5f5', display: 'flex', justifyContent:'flex-start',padding:195,position:'relative' , right:'780px' }}>
                  <Button 
                  onClick={() => handleOrder()}
                    label="sepeti onayla"   style={{ backgroundColor: '#80CBC4', color: '#f5f5f5',padding:10,position:'relative',left:'1050px', top:'-180px'}}/>
              </div>
                
          </div>
  
         
        
        </div>
        
      </div>

            
        
)
       
     }

export default Cart
     
    

         
