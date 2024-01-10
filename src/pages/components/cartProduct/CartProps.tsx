export interface CartProps {
    name: string;
    price: number;
    stock: number;
    image: string;
    onClick: ()=> void;
     // onClick event handler function that takes no arguments and returns void
  }