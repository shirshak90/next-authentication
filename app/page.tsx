"use client";

import axios from "axios";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();

  const onSubmit = () => {
    axios
      .post("/api/register", {
        name: "Shirshak",
        email: "shirshak97@gmail.com",
        password: "123",
      })
      .then(() => {
        console.log("registered");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = () => {
    signIn("credentials", {
      data: { email: "shirshak97@gmail.com", password: "123" },
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.refresh();
        console.log("logged in");
      }

      if (callback?.error) {
        console.log("login error");
      }
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Test Page</p>
      <button onClick={onSubmit}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={() => signIn("github")}>Github</button>
      <button onClick={() => signIn("google")}>Google</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </main>
  );
}
