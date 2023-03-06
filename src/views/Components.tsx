import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ButtonBack } from "@/components/ui/ButtonBack";
import { ButtonCounter } from "@/components/ui/ButtonCounter";
import { Tab } from "@/components/ui/Tab";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

export const Components = () => {
  return (
    <Container>
      <Input errorMessage={"Can’t be empty"} />
      <Button text={"Button 1"} />
      <ButtonBack text="Go Back" theme="primary" />
      <ButtonCounter count={98} />
      <Tab active={false} text={"UX"} />
    </Container>
  );
};
