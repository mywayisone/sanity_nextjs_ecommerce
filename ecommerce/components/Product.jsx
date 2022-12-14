import React from "react";

import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product }) => {
  const { image, name, slug, price } = product;
  return (
    <div>
      <Link href={`/product/${slug}`}>
        <div className="product-card">
          <img
            src={urlFor(image[0])}
            width={250}
            height={250}
            className="product-image"
            alt=""
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
