// app/providers.tsx
// app/providers.tsx
"use client";

import NavBar from "@/components/ui/navbar/navbar";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <NavBar />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
