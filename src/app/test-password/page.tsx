import {
  hashPassword,
} from "@/lib/auth/password";

export default async function Page() {
  const hash =
    await hashPassword("Password123");

  return (
    <div>
      {hash}
    </div>
  );
}