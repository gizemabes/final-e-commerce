import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from "@/pages/components/Layout/index";
import Product from './components/Product/index';

const data = [
  {
    name: 'urun',
    price: 25,
    image: '/images/1.png',
    stokc: 333
  },
  {
    name: 'urun2',
    price: 25,
    image: '/images/2.png',
    stokc: 46
  },
  {
    name: 'urun3',
    price: 25,
    image: '/images/3.png',
    stokc: 600
  },
  {
    name: 'urun',
    price: 25,
    image: '/images/11.png',
    stokc: 333
  },
  {
    name: 'urun2',
    price: 25,
    image: '/images/22.png',
    stokc: 46
  },
  {
    name: 'urun3',
    price: 25,
    image: '/images/33.png',
    stokc: 600
  },
  {
    name: 'urun2',
    price: 25,
    image: '/images/44.png',
    stokc: 46
  },
  {
    name: 'urun3',
    price: 25,
    image: '/images/55.png',
    stokc: 600
  },
];

const Home = () => {
  const addToCart = () => {
    // Sepete ekleme işlemi burada gerçekleştirilebilir.
  };

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
                image={item.image}
                onClick={addToCart}
              />
              
              
            </div>
          ))}
        </Slider>
       
      </div>
    </Layout>
  );
};

export default Home;
