import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface DashboardLayoutProps {}

export const DashboardLayout = ({}: DashboardLayoutProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = () => {
      const user = localStorage.getItem("user");
      if (user) {
        const userObject = JSON.parse(user);

        if (!userObject.accessToken) {
          navigate("/");
        }
      }

      return user !== null;
    };

    if (!isAuthenticated()) {
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};
