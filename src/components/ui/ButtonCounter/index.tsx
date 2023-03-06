import { ButtonCounterProps } from "./types";
import arrowUp from "@/assets/shared/icon-arrow-up.svg";
import * as S from "./styles";

export const ButtonCounter = ({ count, active }: ButtonCounterProps) => {
  return (
    <S.StyledButtonCounter active={active}>
      <img src={arrowUp} />
      {count}
    </S.StyledButtonCounter>
  );
};
