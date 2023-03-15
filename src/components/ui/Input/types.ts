import { UseFormRegister } from "react-hook-form";

export interface AuthInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  register?: UseFormRegister<any>;
  error?: string | boolean;
}
