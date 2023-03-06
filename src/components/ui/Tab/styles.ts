import styled from "styled-components";
import { StyledTabProps } from "./types";

export const StyledTab = styled.div<StyledTabProps>`
  width: 100%;
  max-width: 4.8rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--rouded-xl);
  font-weight: var(--font-semibold);
  font-size: var(--text-xxs);
  line-height: 1.9rem;
  color: ${({ active }) => (active ? "#fff" : "#4661E6")};
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#4661E6" : "#F2F4FF")};
`;
