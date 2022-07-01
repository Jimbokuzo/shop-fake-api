/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProductInterface } from "../interfaces";
import { Link } from "react-router-dom";

interface Props {
  product: ProductInterface;
  onAddProduct: (product: ProductInterface) => void;
}

export const ProductItem = ({ product, onAddProduct }: Props) => {
  const { id, title, description, thumbnail, rating, price } = product;
  return (
    <div
      css={css`
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        flex-direction: column;
        justify-content: space-between;
        width: 230px;
        background: #e9e9e9;
        border-radius: 5px;
        padding: 10px 0 10px 0;
        margin-bottom: 20px;
        box-shadow: 0 0 5px #707070;
        transition: 0.5s;
        :hover {
          background: #ffffff;
          box-shadow: 0 0 10px #707070;
          transition: 0.5s;
        }
      `}
    >
      <Link
        css={css`
          text-decoration: none;
          color: black;
          cursor: default;
        `}
        to={`/product/${id}`}
      >
        <div
          css={css`
            width: 100%;
            padding: 0 5px 0 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <p
            css={css`
              padding: 5px;
              cursor: text;
            `}
          >
            {title}
          </p>
          <p
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              color: black;
              cursor: default;
            `}
          >
            {rating}
          </p>
        </div>
      </Link>

      <Link
        css={css`
          text-decoration: none;
          color: black;
          cursor: default;
        `}
        to={`/product/${id}`}
      >
        <div>
          <img
            css={css`
              width: 100%;
              height: 200px;
            `}
            src={thumbnail}
          />
        </div>
      </Link>
      <Link
        css={css`
          text-decoration: none;
          color: black;
          cursor: default;
        `}
        to={`/product/${id}`}
      >
        <div>
          <div
            css={css`
              width: 200px;
              height: 20px;
              font-size: 12px;
              margin-bottom: 5px;
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          ></div>
        </div>
        <div
          css={css`
            padding: 2px 15px 2px 15px;
            width: 100%;
            display: flex;
            align-items: center;
          `}
        >
          <p
            css={css`
              cursor: text;

              text-decoration: none;
              color: black;
            `}
          >
            {description}
          </p>
        </div>
      </Link>

      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 15px 0 15px;
        `}
      >
        <div>{price} $</div>
        <button
          css={css`
            border-radius: 5px;
            border: none;
            font-size: 18px;
            background: none;
            :hover {
              background: #bbbbbb;
            }
          `}
          onClick={() => {
            onAddProduct(product);
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};
