import { Button } from "@/components/ui";
import authService from "../auth/auth.service";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  let navigate = useNavigate();

  const handleLogout = async () => {
    await authService.logout().then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <Button text="logout" onClick={() => handleLogout()} />
    </div>
  );
};
