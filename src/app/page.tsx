"use client";

export default function Home() {
  function handleLogin() {
    window.location.href = "http://prechserver.zapto.org/auth/google";
    // window.location.href = "http://localhost:3000/auth/google";
  }

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
