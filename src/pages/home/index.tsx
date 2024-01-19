import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from "@/pages/components/Layout/index";
import Product from '../components/Product';
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const data = [
  {
    id:4,
    name: 'Gözlük',
    price: 670 ,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/11.png',
    stokc: 345
  },
  {
    id:5,
    name: 'Gözlük',
    price: 769,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/22.png',
    stokc: 46
  },

  {
    id:6,
    name: 'Saat',
    price: 350,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/44.png',
    stokc: 46
  },

  {
    id:2,
    name: 'Erkek T-shirt',
    price: 500,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/iç3.png',
    stokc: 46
  },
  {
    id:3,
    name: 'Etek',
    price: 350,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/iç4.png',
    stokc: 600
  },

  {
    id:4,
      name: 'Elbise',
      price: 250,
      currency:'₺',
      durum:'Stok',
      fiyat:'Fiyat',
      image: '/images/33.png',
      stokc: 600
  },

  {
    id:6,
    name: 'Kadın T-shirt',
    price: 250,
    currency:'₺',
    durum:'Stok',
    fiyat:'Fiyat',
    image: '/images/55.png',
    stokc: 600
  },
];

const Home = () => {
  const cart = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();
  const addToCart = (item: any) => {

    dispatch(addProduct({ ...item, quantity: 1}));
  };

  useEffect(() => {
    console.log(cart);
  }, [cart])



  const mainSliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      
    ],

    variableWidth: true,
    variableHeight:false,
  };

  const secondarySliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <Layout>
      <div style={{ backgroundColor: '#f5f5f5', padding:'80px' }}>
      <Slider {...secondarySliderSettings} className="second-slider">
                <div>
                  <img src="/images/slider123.jpg" alt="Example 1" style={{ width: '100%', height: '700px' }} />
                </div>
                <div>
                  <img src="/images/slider5.jpeg" alt="Example 2" style={{ width: '100%', height: '800px' }} />
                </div>
              </Slider>
        <Slider {...mainSliderSettings}>
          {data.map((item, key) => (
            <div key={key} style={{ margin: 20, backgroundColor: '#fff', position: 'relative'}}>
              <Product

                name={item.name}
                price={item.price}
                stock={item.stokc}
                fiyat={item.fiyat}
                durum={item.durum}
                currency={item.currency}
                image={item.image}
                onClick={() => addToCart(item)}
              />
              
              
            </div>
          ))}
        </Slider>
       
      </div>
    </Layout>
  );
};

export default Home;
