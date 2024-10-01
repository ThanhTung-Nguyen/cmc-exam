export type IResponse<T> = {
  config?: any;
  data?: T;
  status?: number;
  statusText?: string;
};
