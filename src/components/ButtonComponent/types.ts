import { ReactChild } from "react";

export interface ButtonComponentProps {
  handleFunction: () => void;
  children: ReactChild;
  outline?: boolean;
}
