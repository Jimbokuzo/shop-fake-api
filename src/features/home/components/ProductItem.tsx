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
    to={`/post/${id}`}
  >
    <div
      css={css`
        width: 300px;
        min-height: 320px;
        background: #ecd8b2;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 0 10px #707070;
        margin-bottom: 20px;
      `}
    >
      {" "}
      <div
        css={css`
          width: 100%;
          height: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        `}
      >
        <div
          css={css`
            cursor: text;
          `}
        >
          <b
            css={css`
              padding: 5px;
              margin-right: 15px;
              margin-bottom: 15px;
            `}
          >
            {title}
          </b>
        </div>
        <p
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            background: #202020;
            width: 45px;
            height: 25px;
            border-radius: 15px;
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
            width: 280px;
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
