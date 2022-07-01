/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import { useUpdateProduct } from "../hooks/useUpdateProduct";

interface Props {
  handleClose: () => void;
}

export const UpdateProductForm = ({ handleClose }: Props) => {
  const { onSubmitAddProduct, errors } = useUpdateProduct(handleClose);

  return (
    <form
      onSubmit={onSubmitAddProduct}
      css={css`
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
      `}
    >
      <TextField
        error={errors.title}
        name="title"
        label="Title"
        variant="standard"
      />
      <TextField
        error={errors.brand}
        name="brand"
        label="Brand"
        variant="standard"
      />
      <TextField
        error={errors.category}
        name="category"
        label="Category"
        variant="standard"
      />

      <TextField
        error={errors.price}
        name="price"
        label="Price"
        variant="standard"
      />
      <TextField
        error={errors.description}
        name="description"
        label="Description"
        variant="standard"
      />
      <Button
        css={css`
          background: black;
          :hover {
            background: #333333;
          }
        `}
        type="submit"
        variant="contained"
      >
        Update
      </Button>
    </form>
  );
};
