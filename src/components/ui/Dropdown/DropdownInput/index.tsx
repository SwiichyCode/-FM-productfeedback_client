import { DropdownInputProps } from "./types";
import arrowDown from "@/assets/shared/icon-arrow-down.svg";
import * as S from "./styles";

export const DropdownInput = ({
  value,
  onClick,
  active,
  options,
}: DropdownInputProps) => {
  return (
    <S.StyledDropdownInput onClick={onClick} active={active}>
      <input
        type="text"
        readOnly={true}
        defaultValue={options?.[0].text}
        value={value}
      />
      <img src={arrowDown} />
    </S.StyledDropdownInput>
  );
};
