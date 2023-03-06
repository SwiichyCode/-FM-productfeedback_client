export interface ButtonBackProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  theme?: "primary" | "default";
}

export interface StyledButtonBackProps {
  theme?: "primary" | "default";
}
