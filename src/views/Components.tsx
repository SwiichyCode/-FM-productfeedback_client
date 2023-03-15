import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ButtonBack } from "@/components/ui/ButtonBack";
import { ButtonCounter } from "@/components/ui/ButtonCounter";
import { Tab } from "@/components/ui/Tab";
import { Dropdown } from "@/components/ui/Dropdown";
import styled from "styled-components";
import { DropdownInput } from "@/components/ui/Dropdown/DropdownInput";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

export const Components = () => {
  const [active, setActive] = useState(false);
  const [options, setOptions] = useState([
    { text: "Feature", selected: false },
    { text: "UI", selected: false },
    { text: "UX", selected: false },
    { text: "Enchancement", selected: false },
    { text: "Bug", selected: false },
  ]);

  const selectedOption = options?.find((option) => option.selected);

  return (
    <Container>
      <Input errorMessage={"Can’t be empty"} />
      <Button text={"Button 1"} />
      <ButtonBack text="Go Back" theme="primary" />
      <ButtonCounter count={98} />
      <Tab active={false} text={"UX"} />
      {/* //Select  */}
      <SelectWrapper>
        <DropdownInput
          value={selectedOption?.text}
          onClick={() => {
            setActive(!active);
          }}
          active={active}
          options={options}
        />

        <Dropdown
          active={active}
          options={options}
          setOptions={setOptions}
          setActive={setActive}
        />
      </SelectWrapper>
    </Container>
  );
};
