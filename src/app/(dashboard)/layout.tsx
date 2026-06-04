import { ReactNode } from "react";
import DashboardLayout from "../../components/layouts/dashboard-layout";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}