"use client";

import { useEffect, useState } from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="flex aspect-square h-full items-center justify-center rounded-full bg-accent/90 transition-all hover:bg-accent">
      <Button
        size="icon"
        variant="ghost"
        onClick={scrollTop}
        className="h-full w-full rounded-full"
      >
        <Icons.arrowUp className="h-7 w-7" />
      </Button>
    </div>
  );
};
