"use client";

import { useEffect } from "react";

export default function Home() {
  function handleLogin() {
    // window.location.href = "https://prechserver.zapto.org/auth/google";
    document.cookie = `accessToken2=${"sharif"}; path=/; max-age=3600; secure; samesite=strict`;
  }

  const handleCookie = async () => {
    console.log("sent cookie proscee back end")
    await fetch("https://prechserver.zapto.org/auth/me", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Sign in with Google
      </button>
      <button
        onClick={handleCookie}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        sent cookie
      </button>
    </div>
  );
}
