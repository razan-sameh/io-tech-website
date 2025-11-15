"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
