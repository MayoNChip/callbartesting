// src/pages/_app.tsx
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { UserStateProvider } from "../context/userContext";
import NavbarLayout from "../components/layout/NavbarLayout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <UserStateProvider>
      <SessionProvider session={session}>
        <NavbarLayout>
          <Component {...pageProps} />
        </NavbarLayout>
      </SessionProvider>
    </UserStateProvider>
  );
};

export default trpc.withTRPC(MyApp);
