"use client";

import { ThemeProvider } from '@/components/providers/theme-provider';
import React from "react";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};
