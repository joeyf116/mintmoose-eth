import { ReactNode } from "react";
import StickyTopNavigationBar from "../components/navigation/StickyTopNavigationBar";

type BaseLayoutProps = {
  children?: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => {
  return (
    <>
      <StickyTopNavigationBar />
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
