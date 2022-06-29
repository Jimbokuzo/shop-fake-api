import { Link } from "react-router-dom";
import { PostInterface } from "../interfaces";
import { PostItem } from "./PostItem";

interface Props {
  posts: PostInterface[];
}

export const PostList = ({ posts }: Props) => (
  <div>
    {posts.map((post) => (
      <PostItem post={post} />
    ))}
    <Link to="/contact">Go to contacts</Link>
  </div>
);
