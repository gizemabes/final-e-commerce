import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiUser } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { SlBasket } from 'react-icons/sl';
import { LuHeart } from 'react-icons/lu';
import { useSelector } from "react-redux";
import baseApi from '../../../config/baseApi'

const Header = () => {
  const { push, pathname } = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [basketCount, setBasketCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [cartItem, setCartItems] = useState<[]>([])
  const [user , setUser] = useState<any>()
  const cart = useSelector((state: any) => state.cart);


  useEffect(() => {
    // Your useEffect logic here
  }, [pathname]);

  const handleAddToCart = () => {
    setBasketCount((prevCount) => prevCount + 1);
  };

  const handleMouseEnter = () => {
    setShowAlert(true);
  };

  const handleMouseLeave = () => {
    setShowAlert(false);
  };


    useEffect(() => {
      
      const storedCart = localStorage.getItem('user-cart');
      const storedUser: any = localStorage.getItem('user');
     
      if (storedCart && storedUser) {
        try {
          const cartObj = JSON.parse(storedCart);
          const userObj = JSON.parse(storedUser);
  
          setCartItems(cartObj)
          setUser(userObj)  // user state'ini güncelliyoruz
        } catch (error) {
          console.error("Failed to parse user from localStorage", error);
        }
      }
    }, []); 

    useEffect(() => {
      // user state'i güncellendikten sonra bu useEffect çalışır
       const fetchData = async () => {
         try {
           const response = await baseApi.get('basket/a', {
             params: { id: user[0].id} 
           });
           console.log(response);
           setCartItems(response.data);
         } catch (error) {
           console.error("Error fetching cart items:", error);
         }
       };
       fetchData();
     
   }, [user]);  
  


  const handleAlertItemClick = (action: any) => {
    // Handle actions based on the clicked item
    switch (action) {
      case 'login':
        push('login');
        break;
      case 'register':
        push('register');
        break;
      case 'logout':
        push('/login');
        break;
      // Add more cases as needed
      default:
        break;
    }
    
    // Close the alert
    setShowAlert(false);
    
  };

  return (
    <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', padding: 14, justifyContent: 'space-between', position: 'relative' }}>
      <Image width={150} height={150} alt="logo" src="/images/logo.png" />
    
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div onClick={() => push('home')} style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-around', alignItems: 'center', color:'#349590',cursor: 'pointer' }}>
            Anasayfa
          </div>
        {pathname !== '/Favorite' && (
          <div onClick={() => push('Favorite')} style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-around', alignItems: 'center', cursor: 'pointer' }}>
            <LuHeart size={25} color={'#349590'} />
          </div>
        )}
        
        <div onClick={() => push('cart')}  style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
          <SlBasket size={25} color={'#349590'} />
          <span style={{ position: 'relative', top: '-15px', left: '-10px', display: 'flex', width: '22px', height: '22px', justifyContent: 'center', alignItems: 'center', borderRadius: '11px', fontSize: '14px', background: 'red', color: 'white' }}>{cartItem.length}</span>
        </div>

        <div 
        onMouseEnter={handleMouseEnter}
      
        style={{ display: 'flex', flexDirection: 'row', padding: 2, justifyContent: 'flex-start', alignItems: 'center', cursor: 'pointer' }}>
          <FiUser size={25} color={'#349590'} />
        </div>
        
     
        {showAlert && (
          <div    onMouseLeave={handleMouseLeave} style={{ position: 'absolute', top: '100%', left: 1320, width: '150px', backgroundColor: 'white', padding: '20px', border: '1px solid #ccc' }}>
            {/* Dropdown content in the alert */}
            <div style={{ color:'#349590', cursor: 'pointer' }} onClick={() => handleAlertItemClick('login')}>
              Giriş yap
            </div>
            <div style={{ color:'#349590', cursor: 'pointer' }} onClick={() => handleAlertItemClick('register')}>
              Üye ol
            </div>
            <div style={{ color:'#349590', cursor: 'pointer' }} onClick={() => handleAlertItemClick('login')}>
              Çıkış yap
            </div>
            {/* Add more options as needed */}
          </div>
        )}
         
      </div>
      
    </div>
   
    
  );
};

export default Header;
