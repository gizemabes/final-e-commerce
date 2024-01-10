import Image from "next/image"
import {BsCartFill} from 'react-icons/Bs'
import { ProductProps } from "./ProductProps";
import { useRouter } from "next/router";
import { Button } from "primereact/button";

const styles = {
    cardContainer: {
        display: "flex", margin: 8, backgroundColor: 'white',flexDirection: 'column',
        boxShadow:' 2px 0px 10px rgba(0, 0, 0, 0.2)'
    },
    imageContainer: {
        padding: 26
    },
    detailsContainer: {
      display: "flex",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    productInfo: {
        display: "flex" ,flexDirection: 'column',  color: '#349590'
    },
 
  };



const Product = (props: ProductProps) => {
    const {name, price, stock, image, onClick} = props
    const {push, pathname} = useRouter()
    return(
        <div style={styles.cardContainer}>
            <div style={styles.imageContainer}>
            <Image width={250} height={250} alt="logo" src={image}/>
            </div>
            <div style={{display: "flex" , flexDirection: 'column', padding:8, alignItems: 'center', justifyContent: 'space-around'}} >
                <div style={styles.productInfo}>
                    <h3>{name}</h3>
                    <small>{price}</small>
                    <small>{stock}</small>
                    
                </div>
                <div>
                    <Button label="sepete ekle" onClick={() => push('cart')} style={{ border:'1px solid #FF7A69',backgroundColor: 'white', color: '#FF7A69',padding:3, }}/>
                   
                </div>
            </div>
            
            
        </div>
    )
}

export default Product