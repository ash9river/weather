import { Sidebar } from "@shared/ui/layout/sidebar/Sidebar";
import { SidebarContent } from "@shared/ui/layout/sidebar/SidebarContent";
import { SidebarMenu } from "@shared/ui/layout/sidebar/SidebarMenu";
import { useNavigate } from "react-router-dom";
import { useSidePanelStore } from "../model/useSidePanelStore";
import { useShallow } from "zustand/react/shallow";

export function MainSidebar() {
  const navigate = useNavigate();

  // Zustand 상태 및 액션 구독
  const {
    currentCategory,
    isPanelOpen,
    handleMenuClick,
    togglePanel,
    closePanel,
  } = useSidePanelStore(
    useShallow((state) => ({
      currentCategory: state.currentCategory,
      isPanelOpen: state.isPanelOpen,
      handleMenuClick: state.handleMenuClick,
      togglePanel: state.togglePanel,
      closePanel: state.closePanel,
    }))
  );

  const onMenuClick = (name: "search" | "favorite" | "home") => {
    // callback은 home 클릭시만
    handleMenuClick(name, () => navigate("/"));
  };

  return (
    <Sidebar
      isOpen={isPanelOpen}
      onToggle={togglePanel}
      sidebarMenu={
        <SidebarMenu
          currentCategory={currentCategory}
          onSideBarItemClick={onMenuClick}
        />
      }
      panelContent={
        <SidebarContent category={currentCategory} onClose={closePanel} />
      }
    />
  );
}
