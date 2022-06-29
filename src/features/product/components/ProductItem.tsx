/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProductInterface } from "../interfaces";

interface Props {
  product: ProductInterface;
}

export const ProductItem = ({
  product: {
    id,
    brand,
    category,
    description,
    discountPercentage,
    thumbnail,
    price,
    rating,
    stock,
    title,
  },
}: Props) => (
  <div
    css={css`
      max-width: 800px;
      background: #d3bf9a;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
    `}
  >
    <div>{brand}</div>
    <div>{category}</div>
    <div>{discountPercentage}</div>
    <div>{id}</div>
    <div>{thumbnail}</div>
    <div>{price}</div>
    <div>{stock}</div>
    <div
      css={css`
        width: 100%;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        cursor: pointer;
      `}
    >
      <h3
        css={css`
          width: 200px;
          font-weight: 400;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: Arial, Helvetica, sans-serif;
        `}
      >
        {title}
      </h3>
      <p
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          background: #202020;
          width: 20px;
          border-radius: 50%;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        `}
      >
        {rating}
      </p>
    </div>
    <div
      css={css`
        background: #dbdbdb;
        border-radius: 10px;
        padding-left: 15px;
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
      `}
    >
      <p
        css={css`
          font-family: Arial, Helvetica, sans-serif;
        `}
      >
        {description}
      </p>
    </div>
  </div>
);
