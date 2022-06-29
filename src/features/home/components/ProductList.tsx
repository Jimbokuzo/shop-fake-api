import { ProductInterface } from "../interfaces";
import { ProductItem } from "./ProductItem";

interface Props {
  products: ProductInterface[];
}

export const ProductList = ({ products }: Props) => (
  <div>
    {products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
);
