import { addToCart } from "@/store/Cart.slice";
import { fetchProducts } from "@/store/ProductList.slice";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const item = useSelector((state) => 
    state.products.products.find((item) => item.id == router.query.productId)
  );
  useEffect(() => {
   dispatch(fetchProducts())
  }, [])
  return (
    <>
      {!item ? (
        <CircularProgress />
      ) : (
        <div className={styles.main}>
          <div className={styles.card}>
            <div className={styles.photo}>
              <img src={item.image} />
            </div>
            <div className={styles.descripition}>
              <h2 className={styles.h2}>{item.title}</h2>
              <h4 className={styles.h4}>{item.category}</h4>
              <h1 className={styles.h1}>$ {item.price}</h1>
              <p className={styles.p}>
                {item.description}
              </p>
              <button onClick={() => {
                dispatch(addToCart(item))
                router.push('/cart')
                }} className={styles.button}>Add to Cart</button>
              <button className={styles.button}>Wishlist</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;