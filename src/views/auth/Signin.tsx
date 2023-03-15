import AuthService from "./auth.service";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormLayout } from "@/components/layouts/FormLayout";
import { Input, Button } from "@/components/ui/";
import { InputGroup } from "@/components/container/InputGroup";

type SignupInputs = {
  email: string;
  password: string;
};

export const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>();

  let navigate = useNavigate();

  const onSubmit: SubmitHandler<SignupInputs> = async (data) => {
    await AuthService.login(data.email, data.password).then(() => {
      navigate("/dashboard");
    });
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} title="Login">
      <InputGroup>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          placeholder="Email Address"
          name="email"
          register={register}
        />

        <label htmlFor="password">Password</label>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          register={register}
        />

        <Button type="submit" text="Login" />
        <Link to="/signup">Don't have an account?</Link>
      </InputGroup>
    </FormLayout>
  );
};
