export interface ProductProps {
    name: string;
    price: number;
    stock: number;
    image: string;
    currency:string;
    durum:string;
    onClick: () => void; // onClick event handler function that takes no arguments and returns void
    addFavorite: () => void; // onClick event handler function that takes no arguments and returns void
  }
  