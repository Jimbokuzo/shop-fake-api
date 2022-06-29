import { useState } from "react";

interface fields {
  title: string;
}

export const initialErrors = {
  title: false,
};

export const useUpdatePost = (handleClose: () => void) => {
  const [errors, setErrors] = useState(initialErrors);

  const resetErrors = () => setErrors(initialErrors);

  const validate = (fields: fields) => {
    let isValid = true;
    resetErrors();

    const newErrors = { ...initialErrors };

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

  const onSubmitAddPost = (event: any) => {
    event.preventDefault();

    const dataSend = {
      title: event.target.title.value,
    };

    if (!validate(dataSend)) return;

    fetch("https://dummyjson.com/posts/1", {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "I think I should shift to the moon",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        handleClose();
      });
  };

  return {
    onSubmitAddPost,
    errors,
  };
};
