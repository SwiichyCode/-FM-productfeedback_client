import { AsideCardWrapper } from "./styles";

interface AsideCardProps {
  children: React.ReactNode;
}

export const AsideCard = ({ children }: AsideCardProps) => {
  return <AsideCardWrapper>{children}</AsideCardWrapper>;
};
