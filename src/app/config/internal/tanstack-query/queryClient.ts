import { QueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      gcTime: 300000,
      retry: 1,
      throwOnError: (error) => {
        if (isAxiosError(error)) {
          return error?.response?.status === 500;
        }
        return false;
      },
    },
  },
});
