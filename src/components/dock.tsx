import { ThemeToggle } from "./theme-toggle";

export const Dock = () => {
  return (
    <div className="sticky bottom-0 z-30 w-full border-b border-b-accent bg-primary/10 p-2.5 backdrop-blur-lg transition-all">
      <ThemeToggle />
    </div>
  );
};
