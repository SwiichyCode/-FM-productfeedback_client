import * as S from "./styles";
import { ButtonBackProps } from "./types";
import arrowLeft from "@/assets/shared/icon-arrow-left.svg";

export const ButtonBack = ({ theme, text }: ButtonBackProps) => {
  return (
    <S.StyledButtonBack theme={theme}>
      <img src={arrowLeft} />
      {text}
    </S.StyledButtonBack>
  );
};
