import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ProfileTabs } from "./profile-tabs";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return <ProfileTabs user={session.user} />;
}
