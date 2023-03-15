import { AuthInputProps } from "./types";
import * as S from "./styles";

export const Input = ({ name, register, error, ...props }: AuthInputProps) => {
  return (
    <S.StyledInput>
      <input {...register?.(name as string, { required: true })} {...props} />
      <span>{error}</span>
    </S.StyledInput>
  );
};
