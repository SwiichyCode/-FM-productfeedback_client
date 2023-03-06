import styled from "styled-components";
import { StyledButtonCounterProps } from "./types";

export const StyledButtonCounter = styled.button<StyledButtonCounterProps>`
  width: 100%;
  max-width: 4rem;
  height: 5.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-bold);
  font-size: var(--text-xxs);
  line-height: 1.9rem;
  letter-spacing: -0.180556px;
  color: var(--dark-600);
  border: none;
  border-radius: var(--rouded-xl);
  gap: 0.8rem;
  cursor: pointer;
  transition: var(--transition);
  background-color: ${({ active }) => (active ? "#4661E6" : "#F2F4FE")};

  &:hover {
    background-color: #cfd7ff;
  }
`;
