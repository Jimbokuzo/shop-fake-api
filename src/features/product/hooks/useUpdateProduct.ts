import { useState } from "react";

interface fields {
  description: string;
}

export const initialErrors = {
  description: false,
};

export const useUpdateProduct = (handleClose: () => void) => {
  const [errors, setErrors] = useState(initialErrors);

  const resetErrors = () => setErrors(initialErrors);

  const validate = (fields: fields) => {
    let isValid = true;
    resetErrors();

    const newErrors = { ...initialErrors };

    if (fields.description.length < 5) {
      newErrors.description = true;
      isValid = false;
    }
    if (fields.description.length > 20) {
      newErrors.description = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmitAddProduct = (event: any) => {
    event.preventDefault();

    const dataSend = {
      description: event.target.description.value,
    };

    if (!validate(dataSend)) return;

    fetch("https://dummyjson.com/products/1", {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "iPhone Galaxy +1",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        handleClose();
      });
  };

  return {
    onSubmitAddProduct,
    errors,
  };
};
