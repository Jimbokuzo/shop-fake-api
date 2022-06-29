/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MenuNavigation } from "./components";

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
        max-width: 800px;
        margin: auto;
      `}
    >
      <MenuNavigation />
    </div>
  </header>
);
