/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";
import { UpdateProductForm } from "./UpdateProductForm";

interface Props {}

export const UpdataProductPopup = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        css={css`
          background: black;
          :hover {
            background: #333333;
          }
        `}
        variant="contained"
        onClick={handleClickOpen}
        endIcon={<BrowserUpdatedOutlinedIcon />}
      >
        Updata product
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          css={css`
            width: 100%;
            display: flex;
            justify-content: center;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 26px;
            cursor: default;
          `}
        >
          Update product
        </DialogTitle>
        <DialogContent>
          <UpdateProductForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
