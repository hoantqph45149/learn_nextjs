import accountApi from "@/apiRequests/account";
import ProfileForm from "@/app/me/profile-form";
import { cookies } from "next/headers";

const Me = async () => {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  const result: any = await accountApi.me(sessionToken?.value ?? "");
  return (
    <>
      <h1>Profile</h1>
      <ProfileForm profile={result.payload.data} />
    </>
  );
};

export default Me;
