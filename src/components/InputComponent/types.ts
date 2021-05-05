export interface InputComponentProps {
  placeholder: string;
  type: string;
  typeStyle?: string;
  value: string;
  handleFunction: (value: any) => void;
}
