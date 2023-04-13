import { useTabsStore } from "@/stores/TabsStore";
import { AsideCardWrapper } from "../AsideCard/styles";
import { AsideTabsFilterWrapper, Tab } from "./styles";

export const AsideTabsFilter = () => {
  const tabs = useTabsStore((state) => state.tabs);
  const setActiveTab = useTabsStore((state) => state.setActiveTab);

  return (
    <AsideCardWrapper>
      <AsideTabsFilterWrapper>
        <ul>
          {tabs.map(({ id, name, active }) => {
            return (
              <Tab active={active} key={id} onClick={() => setActiveTab(id)}>
                {name}
              </Tab>
            );
          })}
        </ul>
      </AsideTabsFilterWrapper>
    </AsideCardWrapper>
  );
};
