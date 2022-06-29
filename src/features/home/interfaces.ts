export interface PaginationInterface {
  limit: number;
  total: number;
  page: number;
}
export interface ProductInterface {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating: number;
  images: string[];
}
