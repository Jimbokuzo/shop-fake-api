/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export const FooterFeature = () => (
  <div
    css={css`
      width: 100%;
      font-size: 10px;
      padding: 20px;
      background: #292929;
      font-family: Arial, Helvetica, sans-serif;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
      `}
    >
      <Link
        css={css`
          color: #858585;
          margin: 10px;
        `}
        to={`/`}
      >
        Albus Dumbledore
      </Link>
      <Link
        css={css`
          color: #858585;
          margin: 10px;
        `}
        to={`/`}
      >
        Johnny Depp
      </Link>
      <Link
        css={css`
          color: #858585;
          margin: 10px;
        `}
        to={`/`}
      >
        Monkey D Luffy
      </Link>
      <Link
        css={css`
          color: #858585;
          margin: 10px;
        `}
        to={`/`}
      >
        Naruto
      </Link>
      <Link
        css={css`
          color: #858585;
          margin: 10px;
        `}
        to={`/`}
      >
        Coca Cola
      </Link>
      <Link
        css={css`
          color: #858585;
          margin: 10px;
        `}
        to={`/`}
      >
        Ukraine
      </Link>
    </div>
  </div>
);
