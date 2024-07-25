import Header from "../components/Header"
import Image from "next/image"
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { use, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import baseApi from '@/config/baseApi';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const body = {
        email: email,
        password: password
      }
      const response = await baseApi.post('/auth/login', body, {
        withCredentials: true
      });

      const { user } = response.data;
      console.log(user)
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', JSON.stringify(response.data.token));
      router.push('/'); // Ana sayfaya yönlendir
    } catch (error) {
      // Hata durumunda hata mesajını konsola yazdırmak yerine kullanıcıya bildirim göster
      alert('Geçerli kullanıcı bilgileri giriniz: ' + error);
    }
  };


  



    return (
        <div style={{ backgroundColor: '#f5f5f5',display: "flex", flexDirection: 'column',justifyContent: 'space-around' }} >
            <div>
                <Header />
            </div>
            
            
           
            <div style={{ backgroundColor: '#E0F2F1', display: "flex", flexDirection: 'row', padding: 14, justifyContent: 'center' }}>

                 <div >
                   <Image width={500} height={400} alt="logo" src='/images/logintasarım.png' />
   
            </div>
                 <div 
                 style={{ display: "flex", flexDirection: 'column',padding:14, color: '#808080', justifyContent: 'center',alignItems:'center',}}>
                 <Image width={200} height={200} alt="logo" src='/images/paragrafsayfa.png' />
                 <p>mailinizi giriniz </p>
                 <input type="text" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                 <p>şifre giriniz </p>
                 <input type="text" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} />

                 <Button 
                  label="giriş yap" onClick={handleLogin}  style={{ backgroundColor: '#80CBC4', color: 'white',padding:8, }}/>
                 </div>
                 

             </div>

             <div
             style={{backgroundColor: 'white',display: "flex" , flexDirection: 'column', padding: 110, justifyContent: 'space-around' ,font:'-moz-initial',color:'black'}}>
                <div><Image width={150} height={150} alt="logo" src='/images/logo.png'/></div>
           
          


            </div>

            

        </div>


    )
}

export const getServerSideProps = async (context: any) => {
  // Kullanıcı girişi kontrolü
  if (context?.req?.headers?.cookie || context?.req?.headers?.cookie?.includes('token')) {
    // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }


  return {
    props: {  },
  };
};


export default login