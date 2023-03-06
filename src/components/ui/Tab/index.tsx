import { TabProps } from "./types";
import * as S from "./styles";

export const Tab = ({ text, active }: TabProps) => {
  return <S.StyledTab active={active}>{text}</S.StyledTab>;
};
