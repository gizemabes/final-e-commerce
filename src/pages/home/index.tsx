import Header from "../components/Header"
import Product from "../components/Product"
import Image from "next/image"
import FooterFilter from "../components/footer"
import Layout from "../components/Layout"




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
    {
        name: 'urun3',
        price: 25,
        image: '/images/urun.png',
        stokc: 600
    },



]



const Home = () => {

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

export default Home