"use client";

import { useEffect } from "react";

export default function Home() {
  function handleLogin() {
    window.location.href = "http://prechserver.zapto.org/auth/google";
    // window.location.href = "http://localhost:3000/auth/google";
  }

  // const searchParams = useSearchParams();
  // const token = searchParams.get("urlaccess");
  // // console.log("Token:===========5684568===", token);
  useEffect(() => {
    fetch("http://prechserver.zapto.org/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Required to send/receive cookies
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data:===========", data);
      })
      .catch((err) => {
        console.log("Error:===========", err);
      });
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}
