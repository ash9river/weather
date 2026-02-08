import { Outlet } from "react-router-dom";
import { MainSidebar } from "features/sidebar/ui/MainSidebar";

export function MainLayout() {
  return (
    <div className="flex flex-row size-full overflow-hidden">
      <MainSidebar />
      <main className="flex-1 min-w-0 h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
