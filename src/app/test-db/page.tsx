import { prisma } from "@/lib/db/prisma";

export default async function TestDbPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      Users: {users.length}
    </div>
  );
}