import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

interface TanStackQueryClientProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export const TanStackQueryClientProvider = ({
  children,
}: TanStackQueryClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
