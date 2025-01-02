"use client";

import { Button } from "@/components/ui/button";
import authApiRequest from "@/apiRequests/auth";
import { handleErrorApi } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ButtonLogout() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authApiRequest.logoutFormNextClientToServer();
      router.push("/login");
    } catch (error) {
      handleErrorApi({ error });
    }
  };

  return (
    <Button onClick={handleLogout} className="bg-red-500">
      Logout
    </Button>
  );
}
