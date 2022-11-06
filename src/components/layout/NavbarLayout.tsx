import { ReactElement } from "react";
import Navbar from "../Navbar";

interface Props {
  children: ReactElement;
}

const NavbarLayout = ({ children }: Props) => {
  return (
    <div className="flex w-full h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default NavbarLayout;
