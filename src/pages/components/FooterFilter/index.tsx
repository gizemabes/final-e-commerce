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

          

          

          <div>
            <Image width={200} height={200} alt="logo" src='/images/sayfatasarım.png' />
          </div>
        </div>
      </div>
    );
  };

  export default FooterFilter