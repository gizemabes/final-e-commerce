import Image from "next/image"
import { useState,useEffect } from 'react';
import {FiUser} from 'react-icons/Fi'
import InputSearch from "../icon";
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';

const onClick = () => {
}

const FooterFilter = () => {
   
    const { push, pathname } = useRouter();
  
    useEffect(() => {
      
    }, [pathname]);
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ backgroundColor: '#303037', display: 'flex', flexDirection: 'row', padding: '60px', justifyContent: 'space-around', alignItems: 'center' }}>
  
          <div style={{ padding: 40, color: '#808080' }}>
            <InputSearch />
          </div>
  
          { pathname !== '/Underwear'  && pathname !== '/Outerwear' && (
            <div style={{ backgroundColor: '#303037', display: 'flex', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gridGap: '40px', flexDirection: 'row', padding: '8px', justifyContent: 'space-center' }}>
              <Button
                label="İç Giyim"
                onClick={() => push('Underwear')} 
                style={{ backgroundColor: '#bdbdc6', color: '#303037', padding: 8, width: '150px', maxHeight: '50px', borderRadius: '5px' }}
              />
              <Button
                label="Dış Giyim"
                onClick={() => push('Outerwear')} 
                style={{ backgroundColor: '#bdbdc6', color: '#303037', padding: 8, width: '150px', maxHeight: '50px', borderRadius: '5px' }}
              />
            </div>
          )}
  
          <div>
            <Image width={200} height={200} alt="logo" src='/images/sayfatasarım.png' />
          </div>
        </div>
      </div>
    );
  };

  export default FooterFilter