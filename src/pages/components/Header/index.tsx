import React, { useState } from 'react';
import Image from "next/image"
import {FiUser} from 'react-icons/Fi'
import { useRouter } from "next/router";
import { Button } from 'primereact/button';


const Header = () => {
const {push, pathname} = useRouter()
const [isLoggedIn, setIsLoggedIn] = useState(false)

console.log(pathname)
return (
        <div style={{backgroundColor: 'white',display: "flex" ,flexDirection: 'row', padding: 14, justifyContent: 'space-between'}}>
            <Image width={150} height={150} alt="logo" src='/images/logo.png'/>
            <div style={{display: "flex", flexDirection: 'row', padding: 3  ,justifyContent: 'space-around', alignItems :'center'}}>
            <FiUser size={25} color={'#349590'}/>

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
              label={`hahahah`} 
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

export default Header