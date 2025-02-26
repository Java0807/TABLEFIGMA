import styles from "./Card.module.css";
import React from "react";
import Slider from "./slider/Slider";
import PropTypes from "prop-types";

function Card(props) {
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
  return (
    <div className={styles["card"]}>
      {" "}
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
            src={
              toBasket ? "../public/check-circle.png" : "../public/basket.png"
            }
            alt=""
          />
        </button>
      </div>
      <div className={styles["main-img"]}>
        <Slider key={id} product={image} />
      </div>
      <div className={styles["text"]}>
        <h2 className={styles["product_title"]}>{title}</h2>{" "}
      </div>
      <div className={styles["prices"]}>
        <span>{price} ₽ </span>{" "}
        <p>{count >= 1 ? "v naliche" : "not naliche"}</p>{" "}
      </div>
    </div>
  );
}
export default Card;

Card.propTypes = {
  product: PropTypes.array,
  handleLike: PropTypes.func,
  handleBasket: PropTypes.func,
};
