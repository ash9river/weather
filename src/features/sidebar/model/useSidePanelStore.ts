import { create } from "zustand";

type Category = "search" | "favorite";
type MenuAction = Category | "home";

interface SidePanelState {
  currentCategory: Category;
  isPanelOpen: boolean;
  setCategory: (category: Category) => void;
  openPanel: () => void;
  closePanel: () => void;
  togglePanel: () => void;
  handleMenuClick: (name: MenuAction, navigateCallback: () => void) => void;
}

export const useSidePanelStore = create<SidePanelState>((set, get) => ({
  currentCategory: "search",
  isPanelOpen: true,

  setCategory: (category) => set({ currentCategory: category }),
  openPanel: () => set({ isPanelOpen: true }),
  closePanel: () => set({ isPanelOpen: false }),
  togglePanel: () => set({ isPanelOpen: !get().isPanelOpen }),

  handleMenuClick: (name, navigateCallback) => {
    if (name === "home") {
      set({ isPanelOpen: false });
      navigateCallback();
      return;
    }

    set({ currentCategory: name, isPanelOpen: true });
  },
}));
