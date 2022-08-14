import React, { useEffect, useState } from "react";
import axios from "axios";
import rating from "./assets/img/rating.svg";
import cartWhite from "./assets/img/cartWhite.svg";
import arrow from "./assets/img/arrowBack.svg";
import { useParams, useNavigate } from "react-router-dom";

export const Product = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  useEffect(() => {
    axios
      .get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  if (product === null) return <div>Loading...</div>;

  return (
    <div>
      <div className="arrowBack">
        <button to={"/"} onClick = {() => navigate(-1)}>
          <img src={arrow} alt="" />
          Back to Best Seller
        </button>
      </div>

      <div className="product">
        <img src={product.image} alt="" />
        <div className="info">
          <p className="title">{product.title}</p>
          <p className="price">$ {product.price}</p>
          <div className="rating">
            <p>Rating: {product.rating.rate}</p>
            <img src={rating} alt="" />
          </div>
          <div className="category">
            <span>Category:</span>
            <p>{product.category}</p>
          </div>
          <p className="description">{product.description}</p>
          <button>
            <img src={cartWhite} alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
