export interface DropdownOption {
  text: string;
  selected: boolean;
}

export interface DropdownInputProps {
  value?: string;
  onClick?: () => void;
  active: boolean;

  options: DropdownOption[];
}

export interface StyledDropdownInputProps {
  active: boolean;
}
