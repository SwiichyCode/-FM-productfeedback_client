import { AuthInputProps } from "./types";
import * as S from "./styles";

export const Input = ({ error, errorMessage }: AuthInputProps) => {
  return (
    <S.StyledInput error={error}>
      <input />
      {error && <span>{errorMessage}</span>}
    </S.StyledInput>
  );
};
