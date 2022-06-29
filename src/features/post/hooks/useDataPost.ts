import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostInterface } from "../interfaces";

export const useDataPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({} as PostInterface);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return post;
};
