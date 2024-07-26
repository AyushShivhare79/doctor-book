"use client";

import MenuBar from "./components/MenuBar";
import NavBar from "./components/NavBar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function () {
  const session = useSession();
  // console.log("navbar: ", session);
  return (
    <>
      <div>
        <MenuBar
          user={session.data?.user}
          onSignin={() => {
            signIn();
          }}
          onSignout={() => {
            signOut({ callbackUrl: "/api/auth/signin" });
          }}
        />
      </div>
    </>
  );
}
