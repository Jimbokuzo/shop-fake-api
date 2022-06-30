/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { AddProductForm } from "./AddProductForm";

interface Props {}

export const AddProductPopup = (props: Props) => {
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
          color: black;
          width: 200px;
          height: 40px;
          font-size: 20px;
          transition: 0.3s;
          :hover {
            transform: scale(1.1);
            transition: 0.3s;
            text-shadow: 0 0 5px black;
          }
        `}
        variant="text"
        onClick={handleClickOpen}
        endIcon={<AddIcon />}
      >
        Add
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
          Add product
        </DialogTitle>
        <DialogContent>
          <AddProductForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
