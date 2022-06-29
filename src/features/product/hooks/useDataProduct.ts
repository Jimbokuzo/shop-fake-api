import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductInterface } from "../interfaces";

export const useDataProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({} as ProductInterface);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return product;
};
