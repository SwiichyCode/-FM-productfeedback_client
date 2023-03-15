import { DropdownProps } from "./types";
import iconCheck from "@/assets/shared/icon-check.svg";
import * as S from "./styles";

export const Dropdown = ({
  active,
  setActive,
  options,
  setOptions,
}: DropdownProps) => {
  const handleSelect = (index: number) => {
    setOptions?.(
      options?.map((option, i) =>
        i === index
          ? { ...option, selected: true }
          : { ...option, selected: false }
      )
    );
  };

  return (
    <>
      {active && (
        <S.StyledDropdown>
          {options?.map(({ text, selected }, index) => (
            <S.StyledDropdownItem
              key={index}
              onClick={() => {
                handleSelect(index);
                setActive(false);
              }}
            >
              {text}

              {selected && <img src={iconCheck} />}
            </S.StyledDropdownItem>
          ))}
        </S.StyledDropdown>
      )}
    </>
  );
};
