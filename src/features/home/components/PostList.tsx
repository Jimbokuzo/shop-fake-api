import { PostInterface } from "../interfaces";
import { PostItem } from "./PostItem";

interface Props {
  posts: PostInterface[];
}

export const PostList = ({ posts }: Props) => (
  <div>
    {posts.map((post) => (
      <PostItem key={post.id} post={post} />
    ))}
  </div>
);
