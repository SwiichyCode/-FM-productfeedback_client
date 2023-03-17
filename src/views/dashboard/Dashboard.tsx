import authService from "../auth/auth.service";
import { Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Aside } from "@/components/ui/Aside";
import styled from "styled-components";

const StyledDashboard = styled.div``;

export const Dashboard = () => {
  let navigate = useNavigate();

  const handleLogout = async () => {
    await authService.logout().then(() => {
      navigate("/");
    });
  };

  return (
    <DashboardLayout>
      <StyledDashboard>
        <Aside />
      </StyledDashboard>
      {/* <Button text="logout" onClick={() => handleLogout()} /> */}
    </DashboardLayout>
  );
};
