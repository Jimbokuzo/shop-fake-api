/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProductInterface } from "../interfaces";
import { Link } from "react-router-dom";

interface Props {
  product: ProductInterface;
}

export const ProductItem = ({
  product: { id, title, description, thumbnail, rating, price },
}: Props) => (
  <Link
    css={css`
      font-family: Arial, Helvetica, sans-serif;
      text-decoration: none;
      color: black;
      cursor: default;
    `}
    to={`/product/${id}`}
  >
    <div
      css={css`
        width: 230px;
        background: #e9e9e9;
        border-radius: 5px;
        padding: 10px 0 10px 0;
        margin-bottom: 20px;
        box-shadow: 0 0 5px #707070;
        transition: 0.5s;
        :hover {
          background: #ffffff;
          transform: scale(1.1);
          box-shadow: 0 0 10px #707070;
          transition: 0.5s;
        }
      `}
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
            background: #202020;
            width: 45px;
            height: 25px;
            border-radius: 5px;
            color: white;
            cursor: default;
            font-family: Arial, Helvetica, sans-serif;
          `}
        >
          {rating}
        </p>
      </div>
      <div>
        <img
          css={css`
            width: 100%;
          `}
          src={thumbnail}
        />
      </div>
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
            font-family: Arial, Helvetica, sans-serif;
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
            font-family: Arial, Helvetica, sans-serif;
            text-decoration: none;
            color: black;
          `}
        >
          {description}
        </p>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          padding-right: 15px;
        `}
      >
        {price} $
      </div>
    </div>
  </Link>
);
