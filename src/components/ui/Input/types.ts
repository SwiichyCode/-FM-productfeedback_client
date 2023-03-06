export interface AuthInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | boolean;
  errorMessage?: string;
}
