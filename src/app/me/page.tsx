import envConfig from "@/config";
import { cookies } from "next/headers";

const Me = async () => {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");

  const res = await fetch(`${envConfig.NEXT_PUBLIC_API_URL}/account/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionToken?.value}`,
    },
  }).then(async (res) => {
    const payload = await res.json();
    const data = {
      payload,
      status: res.status,
    };
    if (!res.ok) {
      throw data;
    }
    return data;
  });

  console.log(res);
  return (
    <>
      <h1>Profile</h1>
      <h3>Xin chào {res.payload.data.name}</h3>
    </>
  );
};

export default Me;
