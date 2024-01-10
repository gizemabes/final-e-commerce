import React, { useState } from 'react';
import Image from "next/image"
import {FiUser} from 'react-icons/Fi'
import { useRouter } from "next/router";
import { Button } from 'primereact/button';
import { SlBasket } from "react-icons/sl";
import { LuHeart } from "react-icons/lu";

const onClick = () => {
  // Sepet tıklandığında yapılacak işlemler
  console.log('Sepet tıklandı!');}

  
const Header = () => {
const {push, pathname} = useRouter()
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [basketCount] = useState(0);

return (
  <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', padding: 14, justifyContent: 'space-between' }}>
  <Image width={150} height={150} alt="logo" src='/images/logo.png' />
  <div style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-around', alignItems: 'center' }}>
    <LuHeart size={25} color={'#349590'} />
    <div onClick={onClick} style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center' , cursor: 'pointer' }}>
      <SlBasket size={25} color={'#349590'} />
      <span style={{ position: 'relative', top: '-15px', left: '-10px', display: 'flex', width: '22px', height: '22px', justifyContent: 'center', alignItems: 'center', borderRadius: '11px', fontSize: '14px', background: 'red', color: 'white' }}>{basketCount}</span>


    </div>
    <div style={{ display: 'flex', flexDirection: 'row', padding: 2, justifyContent: 'flex-start', alignItems: 'center' }}>
      <FiUser size={25} color={'#349590'} />
    </div>

{
    pathname !== '/login' && (
        <div>
            {!isLoggedIn &&(
          <Button 
            label="Giriş Yap" 
            onClick={() => push('login')} 
            style={{ backgroundColor: 'white', color: '#349590', padding: 8 }}
          />
          ) }
      
          {/* Conditionally render the user's name button */}
         { isLoggedIn && (
            <Button 
              label={hahahah} 
              onClick={() => push('')}
              style={{ backgroundColor: 'white', color: '#349590', padding: 8 }}
            />
          )}
          
        
        </div>
        
      )
      
      
}
            </div>
        </div>
    )
}



export default Header