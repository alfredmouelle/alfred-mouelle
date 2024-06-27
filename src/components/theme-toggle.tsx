"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      <Icons.sunMedium
        size={20}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />

      <Icons.moon
        size={20}
        className="dark: absolute rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100"
      />

      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};
