import React from "react";
import styled from "styled-components";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 9.4rem 2.4rem;
`;

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>;
};
