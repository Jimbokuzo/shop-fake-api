/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Cart, MenuNavigation } from "./components";

export const HeaderFeature = () => (
  <header
    css={css`
      position: fixed;
      z-index: 500;
      width: 100%;
      top: 0;
      background: black;
    `}
  >
    <div
      css={css`
        max-width: 1024px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <MenuNavigation />
      <Cart />
    </div>
  </header>
);
