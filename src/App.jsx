import "./App.css";
import { useState } from "react";
import Product from "./components/Product";
import Card from "./components/Card";
import Slider from "./components/slider/Slider";

function App() {
  const productData = [
    {
      id: 1,
      image: "../public/product1.png",
      title: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      desc: "Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка",
      count: 0,
      price: 234,
      isLiked: false,
      isSelected: false,
      toBasket: false,
    },
    {
      id: 2,
      image: "../public/product1.png",
      title: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      desc: "Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка",
      count: 0,
      price: 5456,
      isLiked: false,
      toBasket: false,
    },
    {
      id: 3,
      image: "../public/product1.png",
      title: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      desc: "Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка",
      count: 0,
      price: 234,
      isLiked: false,
      toBasket: false,
    },
    {
      id: 4,
      image: "../public/product1.png",
      title: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      desc: "Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка",
      count: 0,
      price: 500,
      isLiked: false,
      toBasket: false,
    },
  ];
  const [products, setProducts] = useState(productData);
  const [status, setStatus] = useState("full");

  const handleBasket = (productId) => {
    const newProsB = products.map((product) => {
      if (productId === product.id) {
        product.toBasket = !product.toBasket;
      }
      return product;
    });
    setProducts(newProsB);
  };
  const handleLike = (productId) => {
    console.log("productId", productId);
    const newPros = products.map((product) => {
      if (productId === product.id) {
        product.isLiked = !product.isLiked;
      }
      return product;
    });
    setProducts(newPros);
  };

  return (
    <div className="main">
      <h1>Садово-огородный инвентарь</h1>
      <div className="sortirovka">
        <p>Сортировать: Сначала новые</p>
        <div className="sortirovka">
          <p>Вид:</p>
          <button className="card-btn" onClick={() => setStatus("card")}>
            <img src="../public/cardStatus.png" alt="card" />
          </button>
          <button className="full-btn" onClick={() => setStatus("full")}>
            <img src="../public/fullStatus.png" alt="full" />
          </button>
        </div>
      </div>
      {/* Products */}
      <div
        className="products"
        style={{
          display: "flex",
          flexDirection: status === "card" ? "row" : "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {products.map((item) => {
          if (status === "card") {
            return (
              <Card
                key={item.id}
                product={item}
                handleLike={handleLike}
                handleBasket={handleBasket}
              />
            );
          }
          return (
            <Product
              key={item.id}
              product={item}
              handleLike={handleLike}
              handleBasket={handleBasket}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
