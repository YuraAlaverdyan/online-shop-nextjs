import { deleteFromCart, quantityDown, quantityUp } from '@/store/Cart.slice';
import { DeleteForeverOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import style from '../../../styles/CartItem.module.css'

const CartItem = ( { item } ) => {
  const dispatch = useDispatch()
  return <div className={style.item}> 
        <div className={style.buttons}> 
            <span className={style.deleteBtn} onClick={() => dispatch(deleteFromCart(item.id))}><DeleteForeverOutlined sx={{ color: "red" }} /></span> 
        </div> 
        <div className={style.image}> 
            <img src={item.image} alt="" width="100px" /> 
        </div> 
 
        <div className={style.description}> 
            <span><h4>{item.title}</h4></span> 
            <span>Category: {item.category}</span> 
            <span>Price: {item.price} $</span> 
        </div> 
 
        <div className={style.quantity}> 
            <button onClick={() => dispatch(quantityUp(item.id))} className={style.plusbtn} type="button" name="button"> 
                + 
            </button> 
            <p>{item.quantity}</p> 
            <button onClick={() => dispatch(quantityDown(item.id))} className={style.minusbtn} type="button" name="button"> 
                - 
            </button> 
        </div> 
 
 
        <div className={style.totalprice}>Total: {item.price * item.quantity} $</div> 
    </div>
};

export default CartItem