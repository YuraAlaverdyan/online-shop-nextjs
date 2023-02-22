import { addToCart } from "@/store/Cart.slice";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styles from "../../../styles/ProductItem.module.css";

const ProductItem = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch()
  return (
    <div
      className={styles.main}
    >
      <div className={styles.forImage}>
        <img src={item.image} />
      </div>
      <div onClick={() => router.push(`/products/${item.id}`)} className={styles.content}>
        <h3>{item.title.substring(0, 7) + "..."}</h3>
        <p>{item.category}</p>
      </div>
      <div className={styles.actions}>
        <Button onClick={() => {
          dispatch(addToCart(item))
          router.push('/cart')
        }} variant="contained" color="secondary">
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
