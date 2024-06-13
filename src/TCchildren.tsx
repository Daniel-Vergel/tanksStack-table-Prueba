import { ReactNode } from "react";

type TCchildren<P = {}> = {
  children?: ReactNode;
} & P;

export default TCchildren;
