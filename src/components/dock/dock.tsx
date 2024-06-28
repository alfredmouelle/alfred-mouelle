import { Icons } from "../icons";
import { BackToTop } from "./back-to-top";
import { DockItem } from "./dock-item";

export const Dock = () => {
  return (
    <div className="sticky bottom-0 z-30 flex w-full justify-center border-t border-t-accent bg-primary/10 p-2.5 backdrop-blur-lg transition-all">
      <div className="flex h-[7vh] flex-1 gap-1.5 transition-all md:max-w-lg">
        <div className="flex flex-1 items-center justify-between gap-1.5 rounded-full bg-accent/60 transition-all">
          <DockItem anchor="home">
            <Icons.home className="h-7 w-7" />
          </DockItem>

          <DockItem anchor="me">
            <Icons.user className="h-7 w-7" />
          </DockItem>

          <DockItem>
            <Icons.settings className="h-7 w-7" />
          </DockItem>
        </div>

        <BackToTop />
      </div>

      {/* <ThemeToggle /> */}
    </div>
  );
};
