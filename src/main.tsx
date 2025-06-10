import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import { RouterProvider } from "react-router";
import { router } from "@/router";
import { TanStackQueryClientProvider } from "@/contexts/tanstack-query-client/tanstack-query-client-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanStackQueryClientProvider>
      <RouterProvider router={router} />
    </TanStackQueryClientProvider>
  </StrictMode>,
);
