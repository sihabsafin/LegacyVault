"use client";

import {
  useState,
} from "react";

export default function Page() {
  const [token, setToken] =
    useState("");

  const [result, setResult] =
    useState("");

  async function verify() {
    const res =
      await fetch(
        "/api/auth/verify-email",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify({
              token,
            }),
        }
      );

    const data =
      await res.json();

    setResult(
      JSON.stringify(
        data,
        null,
        2
      )
    );
  }

  return (
    <div className="p-10 space-y-4">

      <input
        value={token}
        onChange={(e) =>
          setToken(
            e.target.value
          )
        }
        className="border p-2"
      />

      <button
        onClick={verify}
      >
        Verify
      </button>

      <pre>{result}</pre>

    </div>
  );
}