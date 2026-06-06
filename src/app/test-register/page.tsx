"use client";

import { useState } from "react";

export default function Page() {
  const [result, setResult] =
    useState("");

  async function register() {
    const res = await fetch(
      "/api/auth/register",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          name: "Safin",

          email:
            "sihabsafin@test.com",

          password:
            "Password123",
        }),
      }
    );

    const data =
      await res.json();

    setResult(
      JSON.stringify(data)
    );
  }

  return (
    <div className="p-10">
      <button
        onClick={register}
      >
        Register
      </button>

      <pre>{result}</pre>
    </div>
  );
}