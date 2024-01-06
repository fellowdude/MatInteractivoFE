export interface GetApiResponse<T> {
  data: T;
  url_attachment: string;
  quantityPage?: number; // pagination
}
