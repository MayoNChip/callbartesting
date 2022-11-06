import React, { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const UserContext = createContext({});
const UserProvider = UserContext.Provider;

export function UserStateProvider({ children }: Props) {
  const [userDetails, setUserDetails] = useState({ id: 1 });
  return (
    <UserProvider value={{ userDetails, setUserDetails }}>
      {children}
    </UserProvider>
  );
}

export default UserContext;
