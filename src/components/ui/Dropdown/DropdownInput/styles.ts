import { StyledDropdownInputProps } from "./types";
import styled from "styled-components";

export const StyledDropdownInput = styled.div<StyledDropdownInputProps>`
  width: 100%;
  max-width: 25.5rem;
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--rouded);
  background-color: #f7f8fd;
  padding: 0 2.4rem;
  cursor: pointer;

  input {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #3a4374;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  img {
    transition: all 0.3s ease-in-out;
    rotate: ${({ active }) => (active ? "180deg" : "0deg")};
  }
`;
