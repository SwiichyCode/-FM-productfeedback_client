import React from "react";
import styled from "styled-components";

interface InputGroupProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const InputGroup = ({ children }: InputGroupProps) => {
  return <Container>{children}</Container>;
};
