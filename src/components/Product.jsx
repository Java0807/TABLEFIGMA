import React from "react";
import styles from "./Product.module.css";
import Slider from "./slider/Slider";
function Product(props) {
  const { product, handleLike, handleBasket } = props;
  const {
    id,
    image, // "../public/product1.png"
    title,
    desc,
    price,
    count,
    isLiked,
    toBasket,
  } = product;
  // conditional rendering

  return (
    <div
      className="product"
      // style={{
      //   display: "flex",
      //   justifyContent: "space-between",
      //   margin: "10px",
      // }}
    >
      <div>
        <Slider key={id} product={image} />
      </div>
      <div>
        <h2 className={styles["product_title"]}>{title}</h2>
        <p id="text">{desc}</p>
        <p id="text2">{count >= 1 ? "v naliche" : "not naliche"}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className={styles["buttons"]}>
          <button>
            <img src="../public/bar-chart-2.png" alt="" />
          </button>
          <button onClick={() => handleLike(id)}>
            {/* {
                isLiked ? (
                    <img src="../public/heart-2.png" alt="" />
                ) : (
                    <img src="../public/heart.png" alt="" />
                )
            } */}
            <img
              src={isLiked ? "../public/heart-2.png" : "../public/heart.png"}
              alt=""
            />
          </button>
          <button
            style={{ backgroundColor: toBasket ? "coral" : "white" }}
            onClick={() => {
              handleBasket(id);
            }}
          >
            <img
              style={{ height: "100%" }}
              src={
                toBasket ? "../public/check-circle.png" : "../public/basket.png"
              }
              alt=""
            />
          </button>
        </div>
        <div className={styles["prices"]}>
          <span id="product_span">{price} ₽ </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
