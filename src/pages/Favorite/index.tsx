import FooterFilter from "../components/FooterFilter";
import Header from "../components/Header"
import Product from "../components/Product"
import Image from "next/image"
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect,useState} from 'react';
import baseApi from '../../config/baseApi'
import CardFavorite from "../components/cartFavorite";



const Favorite = () => {
  
  const [user, setUser] = useState<any>()
  const [token, setToken] = useState<any>('')
  const [favorites, setFavorites] = useState<any>([])
  
  const [product, setProduct] = useState<any[]>([]);

  const cart = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cart);
  }, [cart])

  

  const addToCart = async (item: any) => {

 

    try{
      if (user[0].id) {
        const body = {
          ...item,
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


  useEffect(() => {

    const storedUser = localStorage.getItem('user');
    const token: any = localStorage.getItem('token');

    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        const fetchProduct = async () => {
          
          const response = await baseApi.get('favorite', {
            headers: {
              Authorization: JSON.parse(token)
            }
          });
          console.log(response.data);

          setFavorites(response.data);
          console.log(response.data);
        };
    
        fetchProduct();

      } catch (error) {
        alert(error)
        console.error("Failed to parse user from localStorage", error);
      }
    }

    
  }, []);


    return (
    
      <div>
      <div>
        <Header />
      </div>
      <div style={{
        padding: 50,
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        background: "#E0F2F1",
      }}>
        <div style={{ color: '#349590', position: 'relative', left: '50px' }}>
          <h1>Favori Ürünleriniz</h1>
        </div>
      </div>
      <div style={{ backgroundColor: '#f5f5f5', padding: '140px' }}>
        <div style={{
          display: "flex",
          margin: 10,
          backgroundColor: '#fff',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: "space-around"
        }}>
          <div style={{ display: "flex", margin: 10, backgroundColor: '#fff', padding:'20px',flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around" }}>
          
          {
            favorites.map((item: any, key: number) => (
              <CardFavorite
                key={key}
                name={item.product_name}
                price={item.price}
                stock={item.stock}
                image={item.file_path}
                onClick={() => addToCart(item)}
              />
            ))
          }
        </div>
      </div>
      </div>
    </div>

    )
}

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
export default Favorite