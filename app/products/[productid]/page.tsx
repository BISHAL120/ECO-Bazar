import React from "react";

const ProductDetails = ({ params }: { params: { productid: string } }) => {
  return <div>ProductDetails {params.productid}</div>;
};

export default ProductDetails;
