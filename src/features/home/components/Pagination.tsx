/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PaginationMUI from "@mui/material/Pagination";
import { PaginationInterface } from "../interfaces";

interface Props {
  pagination: PaginationInterface;
  onChange: (e: any, value: number) => void;
}

export const Pagination = ({
  onChange,
  pagination: { total, page },
}: Props) => {
  return (
    <PaginationMUI
      onChange={onChange}
      page={page}
      count={total}
      shape="circular"
      hidePrevButton
      hideNextButton
    />
  );
};
