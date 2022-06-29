import { useState } from "react";

interface fields {
  tags: string[];
  title: string;
}

export const initialErrors = {
  tags: false,
  title: false,
};

export const useAddPost = (handleClose: () => void) => {
  const [errors, setErrors] = useState(initialErrors);

  const resetErrors = () => setErrors(initialErrors);

  const validate = (fields: fields) => {
    let isValid = true;
    resetErrors();

    const newErrors = { ...initialErrors };

    if (fields.tags.length < 2) {
      newErrors.tags = true;
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

  const onSubmitAddPost = (event: any) => {
    event.preventDefault();

    const dataSend = {
      tags: event.target.tags.value,
      title: event.target.title.value,
    };

    if (!validate(dataSend)) return;

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataSend),
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
