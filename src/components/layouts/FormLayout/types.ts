export interface FormLayoutProps {
  title?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
}
