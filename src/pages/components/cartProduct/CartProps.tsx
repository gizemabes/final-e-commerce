export interface CartProps {
    name: string;
    price: number;
    stock: number;
    image: string;
    onDelete:()=> void;
    onClick: ()=> void;
     // onClick event handler function that takes no arguments and returns void
  }