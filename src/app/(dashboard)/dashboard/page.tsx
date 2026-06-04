import Card from "@/components/shared/card";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p>
        LegacyVault Control Center
      </p>

      <div className="grid grid-cols-4 gap-4 mt-8">
        <Card>
          Vault Items
        </Card>

        <Card>
          Successors
        </Card>

        <Card>
          Health Score
        </Card>

        <Card>
          Heartbeat
        </Card>
      </div>
    </div>
  );
}