import accountApi from "@/apiRequests/account";
import Profile from "@/app/me/profile";
import { cookies } from "next/headers";

const Me = async () => {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  const result: any = await accountApi.me(sessionToken?.value ?? "");
  return (
    <>
      <h1>Profile</h1>
      <Profile />
    </>
  );
};

export default Me;
