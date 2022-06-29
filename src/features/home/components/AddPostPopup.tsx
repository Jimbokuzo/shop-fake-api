/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { AddPostForm } from "./AddPostForm";

interface Props {}

export const AddPostPopup = (props: Props) => {
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
        endIcon={<AddIcon />}
      >
        Add post
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
          Add post
        </DialogTitle>
        <DialogContent>
          <AddPostForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
