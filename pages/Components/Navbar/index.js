import Link from "next/link";
import { useState } from "react";
import styles from "../../../styles/Navbar.module.css";
const Navbar = () => {
  const [menu, setMenu] = useState(["products", "cart", "add item", "about"]);
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <Link href="/">Online Shop</Link>
      </div>
      <div className={styles.menu}>
        {menu.map((item, i) => {
          return (
            <Link key={i} href={`/${item.split(" ").join("")}`}>
              {item
                .split(" ")
                .map((elm) => elm[0].toUpperCase() + elm.substring(1))
                .join(" ")
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
