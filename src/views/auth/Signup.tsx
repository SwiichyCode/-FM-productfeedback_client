import { useState, useEffect } from "react";
import AuthService from "./auth.service";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormLayout } from "@/components/layouts/FormLayout";
import { Input, Button } from "@/components/ui/";
import { InputGroup } from "@/components/container/InputGroup";

type SignupInputs = {
  username: string;
  email: string;
  password: string;
};

export const Signup = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>();

  let navigate = useNavigate();

  const onSubmit: SubmitHandler<SignupInputs> = async (data) => {
    await AuthService.register(data.username, data.email, data.password).then(
      () => {
        navigate("/");
      },
      (error: any) => {
        const resMessage = error.response.data.message;
        setErrorMessage(resMessage);
      }
    );
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} title="Signup">
      <InputGroup>
        <label htmlFor="pseudo">Username</label>
        <Input
          type="text"
          placeholder="Pseudo"
          name="username"
          register={register}
        />

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

        <Button type="submit" text="Sign up" />
        <Link to="/signin">Already have an account?</Link>
      </InputGroup>
    </FormLayout>
  );
};
