"use client";

import { useEffect } from "react";

export default function Home() {
  function handleLogin() {
    window.location.href = "https://prechserver.zapto.org/auth/google";
  }

  const handleCookie = async () => {
    console.log("sent cookie proscee back end");
    await fetch("https://prechserver.zapto.org/auth/me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ refresh_token: "" }),
      body: JSON.stringify({ refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZhYmM0ZTlhLTVlZDMtNDVkYy04M2M1LTNhYjFhN2MwYWMyMyIsImVtYWlsIjoidWZvcmNvZGUxMjNAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJwcm92aWRlciI6Imdvb2dsZSIsImlhdCI6MTc1MzQ3MjU1OCwiZXhwIjoxNzU0MDc3MzU4fQ.3SK5hDif9FMGxhwBL3jKyyr5NWc0m90QwOGH8VdtYxk" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const showCookie = async () => {
    console.log(document.cookie);
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
      <button
        onClick={showCookie}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        show cookie
      </button>
    </div>
  );
}
