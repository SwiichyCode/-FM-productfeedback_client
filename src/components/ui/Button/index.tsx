import { ButtonProps } from "./types";
import * as S from "./styles";

export const Button = ({ color, bgColor, text, ...props }: ButtonProps) => (
  <S.StyledButton color={color} bgColor={bgColor} {...props}>
    {text}
  </S.StyledButton>
);
