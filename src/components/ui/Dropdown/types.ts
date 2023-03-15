export interface DropdownOption {
  text: string;
  selected: boolean;
}

export interface DropdownProps {
  active?: boolean;
  options: DropdownOption[];
  setOptions: (options: DropdownOption[]) => void;
  setActive: (active: boolean) => void;
}
