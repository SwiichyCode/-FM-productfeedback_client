import styled from "styled-components";
import { AuthInputProps } from "./types";

export const StyledInput = styled.div<AuthInputProps>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  input {
    width: 100%;
    max-width: 25.5rem;
    height: 4.8rem;
    padding: 0 2.4rem;
    border-radius: var(--rouded);
    background: var(--grey-200);
    border: none;
    font-weight: var(--font-normal);
    font-size: var(--text-sm);
    line-height: 2.2rem;
    color: var(--dark-600);
    border: ${({ error }) => (error ? "1px solid var(--red)" : "none")};

    &:focus {
      outline: none;
    }
  }

  span {
    font-weight: var(--font-normal);
    font-size: var(--text-xs);
    line-height: 2rem;
    color: var(--red);
  }
`;
