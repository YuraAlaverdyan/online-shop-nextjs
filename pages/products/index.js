import { fetchProducts } from "@/store/ProductList.slice";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Products.module.css";
import ProductItem from "../Components/ProductItem";
const Products = () => {
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);
  const router = useRouter();
  useEffect(() => {
      dispatch(fetchProducts())
  }, []);
  if (error) {
    router.push("/404");
  }
    return (
      <div className={styles.main}>
        <div className={styles.title}>
          <h2>Our Products</h2>
          <p>You can choose what you want and add to cart</p>
        </div>
        <div className={styles.content}>
          {loading ? (
            <CircularProgress />
          ) : (
            prod.map((elm) => {
              return <ProductItem key={elm.id} item={elm} />;
            })
          )}
        </div>
      </div>
    );
};

export default Products;

// prod.map(elm => {
//     return <ProductItem key={elm.id} item = {elm} />
// })
