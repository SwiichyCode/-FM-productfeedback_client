import * as S from "./styles";
import { FormLayoutProps } from "./types";

export const FormLayout = ({ title, onSubmit, children }: FormLayoutProps) => {
  return (
    <S.StyledFormLayout onSubmit={onSubmit}>
      <h1>{title}</h1>

      {children}
    </S.StyledFormLayout>
  );
};
