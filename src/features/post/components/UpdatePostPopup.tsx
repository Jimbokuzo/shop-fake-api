/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";
import { UpdatePostForm } from "./UpdatePostForm";

interface Props {}

export const UpdataPostPopup = (props: Props) => {
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
        Updata post
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
          Update post
        </DialogTitle>
        <DialogContent>
          <UpdatePostForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
