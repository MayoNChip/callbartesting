import { NextPage } from "next";
import NavbarLayout from "../../components/layout/NavbarLayout";
import Login from "../../components/Login";

const loginPage: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Login />
    </div>
  );
};

export default loginPage;
