import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from "@/pages/components/Layout/index";
import Product from '../components/Product';
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import baseApi from '../../config/baseApi';

const Home = () => {
  const cart = useSelector((state: any) => state.cart);
  const [user, setUser] = useState<any>()
  const dispatch = useDispatch();

  const addToCart = async (item: any) => {
    

    try{
      if (user[0].id) {
        const body = {
          ...item,
          product_id: item.id,
          quantity: 1,
          user_id: user[0].id
        };

        
        dispatch(addProduct(body));
        const response = await baseApi.post('basket', body);
  
        localStorage.setItem('user-cart', JSON.stringify(body));
        window.location.reload()
      
      } else {
        console.error("User not found in localStorage");
      }
    }catch(error){
      alert('Lütfen yeniden giriş yapın')
    }
  
  };


  const [product, setProduct] = useState<any[]>([]);

  useEffect(() => {

    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    }

      const fetchProduct = async () => {
      const response = await baseApi.get('product');
      setProduct(response.data);
      console.log(response.data);
    };

    fetchProduct();
  }, []);


  const addFavorite = async (item: any) => {
    

    const body = {
      product_id: item.id,
      user_id: user[0].id
    }

    try{
    
        const response = await baseApi.post('favorite', body);
  
    
        window.location.reload()
     
    }catch(error){
      alert('Lütfen yeniden giriş yapın')
    }
  
  };


  return (
    <Layout>
      <div style={{ backgroundColor: '#f5f5f5', padding: '80px' }}>
        
      
        <div>
            <img src="/images/slider123.jpg" alt="Example 1" style={{ width: '100%', height: '700px' }} />
          </div>
          <div style={{ display: "flex", margin: 20, backgroundColor: '#fff', flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around" }}>
          
        {product.map((item: any, key) => (
            <div style={{ display: "flex", margin: 20, backgroundColor: '#fff', flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around" }}>
          
              <Product
                name={item.name}
                price={item.price}
                stock={item.stock}
                durum={item.durum}
                currency={item.currency}
                image={item.file_path}
                onClick={() => addToCart(item)}
                addFavorite={() => addFavorite(item)}
              />
            </div>
          ))}
           </div>
      </div>
    </Layout>
  );
};
export const getServerSideProps = async (context: any) => {
  if (!context?.req?.headers?.cookie || !context?.req?.headers?.cookie?.includes('token')) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};



export default Home;
