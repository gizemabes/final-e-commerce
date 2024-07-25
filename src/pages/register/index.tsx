import Header from "../components/Header";
import Image from "next/image";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState, Fragment, ChangeEvent, MouseEvent, ReactNode } from 'react'
import baseApi from '@/config/baseApi'


interface State {
  username: string;
  email: string;
  password: string;
  surname:string;
  role: number;
  showPassword: boolean;
}
  const register = () => {
    // ** States
    const [values, setValues] = useState<State>({
      username: '',
      email: '',
      password: '',
      surname:'',
      role: 0,
      showPassword: false
    })
    const [message, setMessage] = useState<string | null>(null)
  
   
    const router = useRouter() // Router hook'unu kullan
  
    const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword })
    }
  
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
    }
  
    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      try {
        const response = await baseApi.post('/auth/register', {
          name: values.username,
          surname: values.surname,
          email: values.email,
          password: values.password,
          role: values.role
        })
      
        setMessage('Kayıt başarılı!')
        router.push('/login') 
      } catch (error) {
        setMessage('Kayıt sırasında bir hata oluştu.')
        console.error('Registration error:', error)
      }
    }
  

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div>
        <Header />
      </div>

      <div
        style={{
          backgroundColor: "#E0F2F1",
          display: "flex",
          flexDirection: "row",
          padding: 14,
          justifyContent: "center",
        }}
      >
        <div>
          <Image
            width={500}
            height={400}
            alt="logo"
            src="/images/FileHandler.2.png"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 14,
            color: "#808080",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "20px", color: "black",textDecoration: 'underline' }}>
            Kayıt olmak için bilgilerinizi giriniz
          </p>

          <br />
          <p>Adınızı Giriniz </p>
          <input
            type="text"
            placeholder=""
            value={values.username}
            onChange={handleChange('username')}
          />
          <p>Soyadınızı Giriniz </p>
          <input
            type="text"
            placeholder=""
            value={values.surname}
            onChange={handleChange('surname')}
          />
          <p>E mail Giriniz </p>
          <input
            type="text"
            placeholder=""
            value={values.email}
            onChange={handleChange('email')}
          />
          
          <p>Şifre Giriniz </p>
          <input
            type="text"
            placeholder=""
            value={values.password}
            onChange={handleChange('password')}
          />
          <br />
          <Button  size='large' type='submit'  onClick={handleSubmit}>
              Sign up
            </Button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          padding: 200,
          justifyContent: "space-around",
          font: "-moz-initial",
          color: "black",
        }}
      >
        <div>
          <Image width={150} height={150} alt="logo" src="/images/logo.png" />
        </div>
      </div>
    </div>
  );
};


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
export default register;