/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDataProducts } from "./hooks";
import { ProductList, ProductSkeleton, AddProductPopup } from "./components";
import { Pagination } from "./components/Pagination";

export const HomeFeature = () => {
  const { products, isLoading, OnChangePagination, pagination } =
    useDataProducts();

  return (
    <div>
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        `}
      >
        <AddProductPopup />
      </div>
      {isLoading ? <ProductSkeleton /> : <ProductList products={products} />}
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Pagination onChange={OnChangePagination} pagination={pagination} />
      </div>
    </div>
  );
};
