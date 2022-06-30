/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProductInterface } from "../interfaces";
import { ProductItem } from "./ProductItem";
import { useAppDispatch } from "../../../redux/hooks";
import { addProducts } from "../../../redux/slices/cardSlice";

interface Props {
  products: ProductInterface[];
}

export const ProductList = ({ products }: Props) => {
  const dispatch = useAppDispatch();

  const onAddProduct = (product: ProductInterface) => {
    dispatch(addProducts(product));
  };
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      `}
    >
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddProduct={onAddProduct}
        />
      ))}
    </div>
  );
};
