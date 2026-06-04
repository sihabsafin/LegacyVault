"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r">
      <nav className="p-4 space-y-4">

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/vault">
          Vault
        </Link>

        <Link href="/successors">
          Successors
        </Link>

        <Link href="/release">
          Release
        </Link>

        <Link href="/settings">
          Settings
        </Link>

      </nav>
    </aside>
  );
}