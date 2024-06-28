"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { PropsWithChildren } from "react";
import { Button } from "../ui/button";

export const DockItem = ({
  anchor,
  children,
}: PropsWithChildren<{ anchor?: string }>) => {
  const router = useRouter();
  const params = useSearchParams();

  const active = params.get("anchor") === anchor;

  const jumpToAnchor = () => {
    if (!anchor) return;
    router.push(`?anchor=${anchor}`);
  };

  return (
    <div className="flex h-full w-full cursor-pointer items-center justify-center">
      <Button
        size="icon"
        onClick={jumpToAnchor}
        variant={active ? "default" : "ghost"}
        className="h-full w-full rounded-full text-foreground"
      >
        {children}
      </Button>
    </div>
  );
};
