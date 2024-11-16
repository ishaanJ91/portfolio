import React, { ReactNode } from "react";

type LayoutProps = {
  SidebarComponent: ReactNode;
  MainComponent: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ SidebarComponent, MainComponent }) => {
  return (
    <div className="grid grid-cols-3 items-center min-h-screen gap-4 bg-beige">
      <div className="col-span-1">{SidebarComponent}</div>
      <div className="col-span-2">{MainComponent}</div>
    </div>
  );
};

export default Layout;
