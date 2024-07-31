"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("our-products");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ fontSize: "80px" }}>Welcome to my shop!</div>
      <button
        style={{
          background: "white",
          fontSize: "30px",
          padding: "20px",
          borderRadius: "10px",
        }}
        onClick={handleOnClick}
      >{`LET'S BUY SOMETHING`}</button>
    </main>
  );
}
