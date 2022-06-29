import { useEffect, useState } from "react";
import { PostInterface } from "../interfaces";

export const useDataPosts = () => {
  const [posts, setPosts] = useState([] as PostInterface[]);
  const [isLoading, setIsLoading] = useState(true);

  const [pagination, setPagination] = useState({
    limit: 10,
    total: 10,
    page: 1,
  });

  const LIMIT_POSTS = 10;

  const OnChangePagination = (e: any, value: number) => {
    setPagination({ ...pagination, page: value });
  };

  useEffect(() => {
    const { page, limit } = pagination;
    const naxtSkip = page === 1 ? 0 : (page - 1) * limit;
    fetch(
      `https://dummyjson.com/posts?limit=${pagination.limit}&&skip=${naxtSkip}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setIsLoading(false);
      });
  }, [pagination.page]);

  return {
    posts,
    isLoading,
    pagination,
    OnChangePagination,
  };
};
