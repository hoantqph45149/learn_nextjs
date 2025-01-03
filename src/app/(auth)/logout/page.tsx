"use client";

import { clientSessionToken } from "@/lib/http";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import authApiRequest from "@/apiRequests/auth";

export default function page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sessionToken = searchParams.get("sessionToken");

  useEffect(() => {
    if (sessionToken === clientSessionToken.value) {
      authApiRequest.logoutFormNextClientToServer(true).then((res) => {
        router.push(`/login?redirect=${pathname}`);
      });
    }
  }, [sessionToken, router, pathname]);
  return <div>page</div>;
}
