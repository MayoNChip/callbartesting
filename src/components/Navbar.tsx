import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { navbarItems } from "./navbarItems";

const Navbar: NextPage = () => {
  return (
    <>
      <nav className=" relative flex h-screen w-[250px] flex-col space-y-10 bg-gray-700">
        <div className="p-4">
          <Image src={logo} width={50} height={50} layout="fixed" />
        </div>
        <div className="h-1/2 w-full space-y-2 px-4">
          {navbarItems &&
            navbarItems.map((item) => {
              return (
                <Link href={item.href} key={item.id}>
                  <button className=" h-[50px] w-full rounded-sm bg-transparent px-4 text-start text-gray-300 hover:bg-red-600 hover:text-white">
                    {item.title}
                  </button>
                </Link>
              );
            })}
        </div>
        <div className="absolute bottom-4 flex w-full items-center justify-evenly">
          <button className="mx-2 rounded-full px-4 py-2 text-red-400 hover:text-red-200">
            <Link href={"/login"}>Login</Link>
          </button>
          {/* <button className="mx-2 rounded-full px-4 py-2 text-gray-400 hover:text-gray-200">
            <Link href={"/register"}>Register</Link>
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
