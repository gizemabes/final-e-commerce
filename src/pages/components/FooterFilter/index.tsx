import Image from "next/image"
import { useState } from 'react';
import {FiUser} from 'react-icons/Fi'
import InputSearch from "../icon";
import HeaderFilter from "../headerFilter";
import { Button } from 'primereact/button';



 const FooterFilter = () => {
   

    return (
        <div style={{  display: "flex", flexDirection: 'column' }}>
        <div style={{ backgroundColor: '#E0F2F1', display: "flex", flexDirection: 'row', padding:'60px', justifyContent: 'space-around', alignItems:'center'}}>

            <div style={{ padding:40, color: '#808080',  }}>

                <InputSearch />
            </div>
            <div style={{ backgroundColor: '#E0F2F1',display: 'flex', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gridGap: '20px', flexDirection: 'row',padding:'8px', justifyContent: 'space-center' }}>
                <Button 
                  label="teknoloji"   style={{ backgroundColor: '#80CBC4', color: '#349590',padding:8,width:'80px',maxHeight:'50px', borderRadius:'5px' }}/>
                  <Button 
                  label="giyim"   style={{ backgroundColor: '#80CBC4', color: '#349590',padding:8,width:'80px',maxHeight:'50px', borderRadius:'5px' }}/>
                  <Button 
                  label="kozmetik"   style={{ backgroundColor: '#80CBC4', color: '#349590',padding:8,width:'80px',maxHeight:'50px', borderRadius:'5px' }}/>
                  <Button 
                  label="mobilya"   style={{ backgroundColor: '#80CBC4', color: '#349590',padding:8,width:'80px',maxHeight:'50px', borderRadius:'5px' }}/>
                  <Button 
                  label="aksesuar"   style={{ backgroundColor: '#80CBC4', color: '#349590',padding:8,width:'80px',maxHeight:'50px', borderRadius:'5px' }}/>
            </div>
            <div>
                <Image width={200} height={200} alt="logo" src='/images/sayfatasarım.png' />

            </div>
        
          
        
          
        </div>

         
         </div>
    )
}

export default FooterFilter