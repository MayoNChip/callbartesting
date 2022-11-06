import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { signIn } from "next-auth/react";

type Inputs = {
  username: string;
  password: string;
};

const schema = z.object({
  username: z.string().min(1, { message: "Required" }),
  password: z.string().min(1, { message: "Required" }),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const validateUser: SubmitHandler<Inputs> = (data) => {
    console.log("data", data);
    signIn("credentials", { ...data, redirect: true, callbackUrl: "/" });
  };

  return (
    <>
      <div className="mx-auto my-20 flex h-[600px] max-w-5xl rounded-md shadow-md">
        <div className="flex h-full w-1/2 flex-col p-6">
          <div className="mx-auto w-full">
            <h1 className="border-b-[1px] border-red-500 text-5xl font-medium text-gray-700">
              Login
            </h1>
          </div>
          <div className="flex h-full w-4/5 justify-between">
            <form
              onSubmit={handleSubmit(validateUser)}
              className="flex w-3/5 flex-col "
            >
              <div className="my-10 flex flex-col space-y-10">
                <div className="relative flex">
                  <label className="w-full">
                    <FaUserAlt className=" absolute translate-x-5 translate-y-[9px] text-red-100" />
                    <input
                      className="mx-2 h-6 w-full rounded-full border-2 border-red-200 py-4 pl-8 outline-none transition-all ease-in-out focus:border-b-2 focus:border-red-500"
                      placeholder="Enter your username"
                      {...register("username", { required: true })}
                    />
                  </label>

                  {errors.username?.message && (
                    <p>{errors.username?.message}</p>
                  )}
                </div>
                <div className="flex justify-between">
                  <label className="w-full">
                    <RiLockPasswordFill className=" absolute translate-x-5 translate-y-[9px] text-red-100" />
                    <input
                      className="mx-2  h-6 w-full rounded-full border-2 border-red-200 py-4 pl-8 outline-none transition-all ease-in-out focus:border-b-2 focus:border-red-500"
                      type="password"
                      placeholder="Enter your password"
                      {...register("password", { required: true })}
                    />
                  </label>
                  {errors.password?.message && (
                    <p>{errors.password?.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-fit self-end rounded-full bg-red-500 px-4 py-2 text-white hover:bg-red-700 active:bg-red-800 "
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="h-full w-1/2 rounded-r-md bg-gray-700"></div>
      </div>
    </>
  );
};

export default Login;
