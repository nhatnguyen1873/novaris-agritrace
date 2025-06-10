import { createBrowserRouter } from "react-router";
import { HomeLayout } from "@/layouts/home-layout";
import { TracePage } from "@/pages/trace-page";

export const router = createBrowserRouter([
  {
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: TracePage,
      },
    ],
  },
]);
