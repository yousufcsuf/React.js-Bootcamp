import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 1200,
    availability: "In stock",
  };
  return (
    <>
      <div>ProductInfo</div>
      {product.name}
    </>
  );
};

export default ProductInfo;
