import styled from "styled-components";
import { StyledButtonProps } from "./types";

export const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  max-width: 15.8rem;
  height: 4.4rem;
  border-radius: var(--rouded-xl);
  border: none;
  font-weight: var(--font-bold);
  font-size: var(--text-xs);
  line-height: 2rem;
  cursor: pointer;
  background-color: ${({ bgColor }) => bgColor || "var(--purple)"};
  color: ${({ color }) => color || "var(--white-200)"};
  transition: var(--transition);

  &:hover {
    opacity: 0.8;
  }
`;
