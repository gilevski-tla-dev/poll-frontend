import { Outlet } from "react-router-dom";
import { NavBar } from "@/shared/ui";
import type { navItems } from "@/app/router/nav-items";

export const NavBarLayout = ({ items }: { items: typeof navItems }) => {
  return (
    <>
      <Outlet />
      <NavBar items={items} />
    </>
  );
};
