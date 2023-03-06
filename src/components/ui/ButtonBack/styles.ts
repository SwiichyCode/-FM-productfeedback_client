import styled from "styled-components";
import { StyledButtonBackProps } from "./types";

export const StyledButtonBack = styled.button<StyledButtonBackProps>`
  width: 100%;
  max-width: 15.8rem;
  height: 5.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--rouded-xl);
  border: none;
  font-weight: var(--font-bold);
  font-size: var(--text-xs);
  line-height: 2rem;
  gap: 1.6rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  background-color: ${({ theme }) =>
    theme === "primary" ? "#373F68" : "transparent"};
  color: ${({ theme }) => (theme === "primary" ? "var(--white)" : "#373F68")};
`;
