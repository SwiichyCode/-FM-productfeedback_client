export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bgColor?: string;
  text: string;
}

export interface StyledButtonProps {
  color?: string;
  bgColor?: string;
}
