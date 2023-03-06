import { GlobalStyles } from "@/styles/globalStyles";
import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};
