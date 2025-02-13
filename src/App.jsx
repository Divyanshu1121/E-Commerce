import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      id: 1,
      name: "Shirt",
      price: 1599,
      image: "https://m.media-amazon.com/images/I/91a8emmccdL._AC_UY1100_.jpg",
    },
    {
      id: 2,
      name: "T-Shirt",
      price: 1099,
      image: "https://www.botnia.in/cdn/shop/files/5_41b6d8fa-fa23-4550-97f2-5161b85abcbd.png?v=1695274048",
    },
    {
      id: 3,
      name: "Jeans",
      price: 2999,
      image: "https://www.crossjeans.com/cdn/shop/files/E_161_300_cross_jeans_UD2024_1_1445x.jpg?v=1721726807",
    },
    {
      id: 4,
      name: "Cap",
      price: 599,
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/cap/c/y/m/free-latest-side-ny-baseball-cap-highever-original-imagnm8fvyf9jbpv.jpeg?q=20&crop=false",
    },
    {
      id: 5,
      name: "Shorts",
      price: 1099,
      image: "https://5.imimg.com/data5/KT/WK/MY-63355322/mens-half-pant-500x500.jpg",
    },
    {
      id: 6,
      name: "Sweat-Shirts",
      price: 2499,
      image: "https://shop.vogue.com/cdn/shop/files/RustyRedSweatshirt1.png?v=1695214728&width=1000",
    },
  ];

  const [cartItem, setCartItem] = useState([]);

  const cartItemCount = cartItem.reduce((total, item) => total + item.quantity, 0);

  const onAddToCart = (product) => {
    setCartItem((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const onRemoveFromCart = (productId) => {
    setCartItem((items) =>
      items
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const onRemoveAllFromCart = (productId) => {
    setCartItem((items) => items.filter((item) => item.id !== productId));
  };

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        alignItems: "center"
      }}
    >
      <Navbar cartItemCount={cartItemCount} />
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
        Let's Buy
      </h1>
      <div style={{ display: "flex", paddingLeft: "280px", alignItems: "center " }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", maxWidth: "70%", justifyContent: "center" }}>
          {products.map((product) => (
            <Products key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
      <Cart items={cartItem} onRemoveFromCart={onRemoveFromCart} onRemoveAllFromCart={onRemoveAllFromCart} />
      <Footer />
    </div>
  );
}

export default App;
