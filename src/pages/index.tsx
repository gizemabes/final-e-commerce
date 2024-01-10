import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from "@/pages/components/Layout";
import Product from "@/pages/components/Product";

const inter = Inter({ subsets: ['latin'] })

const data = [
  {
    name: 'urun',
    price: 25,
    image: '/images/urun.png',
    stokc: 333
  },
  {
    name: 'urun2',
    price: 25,
    image: '/images/urun.png',
    stokc: 46
  },
  {
    name: 'urun3',
    price: 25,
    image: '/images/urun.png',
    stokc: 600
  },
  {
    name: 'urun',
    price: 25,
    image: '/images/urun.png',
    stokc: 333
  },
  {
    name: 'urun2',
    price: 25,
    image: '/images/urun.png',
    stokc: 46
  },
  {
    name: 'urun3',
    price: 25,
    image: '/images/urun.png',
    stokc: 600
  },
  {
    name: 'urun2',
    price: 25,
    image: '/images/urun.png',
    stokc: 46
  },
  {
    name: 'urun3',
    price: 25,
    image: '/images/urun.png',
    stokc: 600
  },


]

export default function Home() {
  const addToCart = () => {

  }
  return (
      <Layout >

        <div style={{ backgroundColor: '#f5f5f5',padding:'80px' }}>
          <div style={{ display: "flex", margin: 20, backgroundColor: '#fff', flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around" }}>

            {
              data.map((item, key) => (
                  <Product key={key} name={item.name} price={item.price} stock={item.stokc} image={item.image} onClick={addToCart} />
              ))
            }

          </div>

        </div>

      </Layout>
  )
}
