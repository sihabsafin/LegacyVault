import {
  createAccessToken,
} from "@/lib/auth/jwt";

export default async function Page() {
  const token =
    await createAccessToken(
      "123",
      "test@test.com"
    );

  return (
    <div>
      {token}
    </div>
  );
}