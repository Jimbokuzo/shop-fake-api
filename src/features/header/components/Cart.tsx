/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import React from "react";
import Menu from "@material-ui/core/Menu";
import { useAppSelector } from "../../../redux/hooks";
import { selectCart } from "../../../redux/slices/cardSlice";
import { Badge } from "@mui/material";

export const Cart = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { products, total } = useAppSelector(selectCart);

  return (
    <div>
      <div>
        <Badge
          css={css`
            color: black;
            padding-right: 7px;
            .css-144dnr3-MuiBadge-badge {
              background: #d4d4d4;
              margin-top: 2px;
            }
          `}
          badgeContent={total}
          overlap="circular"
        >
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            aria-label="upload picture"
            component="span"
          >
            <ShoppingBasketIcon
              css={css`
                font-size: 26px;
                color: white;
              `}
            />
          </IconButton>
        </Badge>
      </div>

      <Menu
        css={css`
          margin-top: 30px;
        `}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div
          css={css`
            transition: 0.5s;
            width: 300px;
          `}
        >
          {products.map(({ id, title, price, count }) => (
            <div
              css={css`
                width: 100%;
                display: flex;
                justify-content: space-between;
                font-family: Arial, Helvetica, sans-serif;
                padding: 0 10px 0 10px;
              `}
              key={id}
            >
              <div
                css={css`
                  display: flex;
                `}
              >
                <p>{title}</p>
                <p
                  css={css`
                    margin-left: 10px;
                  `}
                >
                  ({count})
                </p>
              </div>

              <p>{price}$</p>
            </div>
          ))}
        </div>
      </Menu>
    </div>
  );
};
