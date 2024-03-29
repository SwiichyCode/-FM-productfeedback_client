import { Outlet } from "react-router-dom";
import styled from "styled-components";

interface AuthLayoutProps {}

const AuthLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f8fd;
`;

export const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <AuthLayoutWrapper>
      <main>
        <Outlet />
      </main>
    </AuthLayoutWrapper>
  );
};
