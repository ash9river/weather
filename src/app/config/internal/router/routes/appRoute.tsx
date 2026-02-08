import { WeatherMainPage } from "@pages/weather/ui/WeatherMainPage";
import { MainLayout } from "@shared/ui/layout/main/MainLayout";
import type { RouteObject } from "react-router-dom";

export const appRoute = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <WeatherMainPage />,
    },
    {
      path: ":district",
      element: <WeatherMainPage />,
    },
  ],
} as const satisfies RouteObject;
