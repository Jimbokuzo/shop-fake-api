import { useState } from "react";

interface fields {
  title: string;
  brand: string;
  category: string;
  price: string;
  description: string;
}

export const initialErrors = {
  title: false,
  brand: false,
  category: false,
  price: false,
  description: false,
};

export const useUpdateProduct = (handleClose: () => void) => {
  const [errors, setErrors] = useState(initialErrors);

  const resetErrors = () => setErrors(initialErrors);

  const validate = (fields: fields) => {
    let isValid = true;
    resetErrors();

    const newErrors = { ...initialErrors };
    if (fields.title.length < 3) {
      newErrors.title = true;
      isValid = false;
    }
    if (fields.price.length < 3) {
      newErrors.price = true;
      isValid = false;
    }
    if (fields.brand.length < 1) {
      newErrors.brand = true;
      isValid = false;
    }
    if (fields.category.length < 3) {
      newErrors.category = true;
      isValid = false;
    }
    if (fields.description.length < 3) {
      newErrors.description = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmitAddProduct = (event: any) => {
    event.preventDefault();

    const dataSend = {
      title: event.target.title.value,
      brand: event.target.brand.value,
      category: event.target.category.value,
      price: event.target.price.value,
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
