export type IUserData = {
  username: string;
  password: string;
  role?: string;
  token?: string;
};

export type IUserReducer = {
  userList: IUserData[];
  user: IUserData;
  loading: boolean;
};
