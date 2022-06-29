import { useState } from "react";

interface fields {
  title: string;
  description: string;
}

export const initialErrors = {
  title: false,
  description: false,
};

export const useAddProduct = (handleClose: () => void) => {
  const [errors, setErrors] = useState(initialErrors);

  const resetErrors = () => setErrors(initialErrors);

  const validate = (fields: fields) => {
    let isValid = true;
    resetErrors();

    const newErrors = { ...initialErrors };

    if (fields.description.length < 2) {
      newErrors.description = true;
      isValid = false;
    }
    if (fields.title.length < 5) {
      newErrors.title = true;
      isValid = false;
    }
    if (fields.title.length > 20) {
      newErrors.title = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmitAddProduct = (event: any) => {
    event.preventDefault();

    const dataSend = {
      description: event.target.description.value,
      title: event.target.title.value,
    };

    if (!validate(dataSend)) return;

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
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
