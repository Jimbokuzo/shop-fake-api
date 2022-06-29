/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

interface Props {
  item: { id: number; name: string; url: string };
}

export const MenuNavItem = ({ item: { id, name, url } }: Props) => (
  <li
    css={css`
      display: block;
    `}
    key={id}
  >
    <Link
      css={css`
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        text-transform: uppercase;
        display: block;
      `}
      to={url}
    >
      {name}
    </Link>
  </li>
);
