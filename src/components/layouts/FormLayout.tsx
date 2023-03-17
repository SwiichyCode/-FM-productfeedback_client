import styled from "styled-components";

export interface FormLayoutProps {
  title?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
}

export const FormLayoutWrapper = styled.form`
  width: 400px;
  border-radius: var(--rounded-2xl);
  background-color: var(--white);
  padding: 3.2rem;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);

  h1 {
    font-size: var(--text-3xl);
    margin-bottom: 2.4rem;
  }
`;

export const FormLayout = ({ title, onSubmit, children }: FormLayoutProps) => {
  return (
    <FormLayoutWrapper onSubmit={onSubmit}>
      <h1>{title}</h1>

      {children}
    </FormLayoutWrapper>
  );
};
