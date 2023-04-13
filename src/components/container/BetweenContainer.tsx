import React from "react";
import styled from "styled-components";

interface BetweenContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BetweenContainer = ({
  children,
  className,
}: BetweenContainerProps) => {
  return <Container className={className}>{children}</Container>;
};
