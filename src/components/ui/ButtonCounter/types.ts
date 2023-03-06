export interface ButtonCounterProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  count?: number;
  active?: boolean;
}

export interface StyledButtonCounterProps {
  active?: boolean;
}
