import { ButtonProps } from "./types";
import * as S from "./styles";

export const Button = ({ color, bgColor, text }: ButtonProps) => (
  <S.StyledButton color={color} bgColor={bgColor}>
    {text}
  </S.StyledButton>
);
