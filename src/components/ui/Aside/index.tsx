import React from "react";
import { AsideLogo } from "../AsideLogo";
import { AsideRoadmap } from "../AsideRoadmap";
import { AsideTabsFilter } from "../AsideTabsFilter";
import { AsideWrapper } from "./styles";

export const Aside = () => {
  return (
    <AsideWrapper>
      <AsideLogo />
      <AsideTabsFilter />
      <AsideRoadmap />
    </AsideWrapper>
  );
};
