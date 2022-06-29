/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const PageFeature = ({ children }: any) => (
  <div
    css={css`
      width: 100%;
      min-height: 797px;
    `}
  >
    <div
      css={css`
        max-width: 800px;
        margin: auto;
        padding: 15px;
        margin-top: 80px;
      `}
    >
      {children}
    </div>
  </div>
);
