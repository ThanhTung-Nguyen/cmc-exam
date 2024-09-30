export type TFormRouter = {
    path: string;
    element: React.LazyExoticComponent<() => JSX.Element>;
    children?: TFormRouter[];
  };