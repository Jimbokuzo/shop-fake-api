import { Link } from "react-router-dom";
import { ProductInterface } from "../interfaces";
import { ProductItem } from "./ProductItem";

interface Props {
  products: ProductInterface[];
}

export const PostList = ({ products }: Props) => (
  <div>
    {products.map((product) => (
      <ProductItem product={product} />
    ))}
    <Link to="/contact">Go to contacts</Link>
  </div>
);
