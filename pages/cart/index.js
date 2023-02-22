import { useSelector } from "react-redux";
import style from "../../styles/Cart.module.css"
import CartItem from "../Components/CartItem";

const Cart = () => {
  const items = useSelector((state) => state.cart.products);
  console.log(items);
  return (
    <div className={style.body}>
      <div className={style.shoppingCart}>
      <div className={style.title}>Shopping Cart</div>
      {items.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
    </div>
    
  );
};

export default Cart;
