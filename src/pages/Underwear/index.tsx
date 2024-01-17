import FooterFilter from "../components/FooterFilter";
import Header from "../components/Header"
import Product from "../components/Product"
import Image from "next/image"

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
  
  



const Underwear = () => {

    const addToCart = () => {

    }

    return (
    
        <div>
        <div>
          <Header />
        </div>

        <div>
          <FooterFilter />
        </div>

        <div style={{ backgroundColor: '#f5f5f5',padding:'80px' }}>
            <div style={{ display: "flex", margin: 20, backgroundColor: '#fff', flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around" }}>

                {
                    data.map((item, key) => (
                        <Product key={key} name={item.name} price={item.price} stock={item.stokc} image={item.image} onClick={addToCart} />
                    ))
                }

            </div>

        </div>
  
        </div>

    )
}

export default Underwear