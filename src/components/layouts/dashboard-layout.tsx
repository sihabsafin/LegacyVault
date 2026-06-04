import { ReactNode } from "react";
import Sidebar from "./sidebar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}