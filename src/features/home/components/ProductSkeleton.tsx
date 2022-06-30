/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Skeleton } from "@mui/material";

export const ProductSkeleton = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div
      css={css`
        max-width: 1024px;
        display: flex;
        justify-content: space-between;
      `}
    >
      {data.map((key) => (
        <div key={key}>
          <Skeleton variant="rectangular" max-width={800} height={100} />
        </div>
      ))}
    </div>
  );
};
