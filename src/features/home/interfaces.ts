export interface PostInterface {
  id: number;
  title: string;
  tags: string[];
  reactions: number;
}
export interface PaginationInterface {
  limit: number;
  total: number;
  page: number;
}
