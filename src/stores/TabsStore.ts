import { create } from "zustand";

interface Tab {
  id: number;
  name: string;
  active: boolean;
}

interface TabsState {
  tabs: Tab[];
  setTabs: (tabs: Tab[]) => void;
  setActiveTab: (id: number) => void;
}

const tabs = [
  { id: 1, name: "All", active: true },
  { id: 2, name: "UI", active: false },
  { id: 3, name: "UX", active: false },
  { id: 4, name: "Enhancement", active: false },
  { id: 5, name: "Bug", active: false },
  { id: 6, name: "Feature", active: false },
];

export const useTabsStore = create<TabsState>((set) => ({
  tabs,
  setTabs: (tabs: Tab[]) => set({ tabs }),

  setActiveTab: (id: number) => {
    const newTabs = tabs.map((tab) => ({
      ...tab,
      active: tab.id === id,
    }));
    set({ tabs: newTabs });
  },
}));
