"use client";

import apiAuthRequest from "@/apiRequests/auth";
import useAppContext from "@/hooks/useAppContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function LogoutLogic() {
  const router = useRouter();
  const pathname = usePathname();
  const { setUser } = useAppContext();

  const searchParams = useSearchParams();
  const sessionToken = searchParams.get("sessionToken");
  useEffect(() => {
    const controller = new AbortController();
    if (sessionToken === localStorage.getItem("sessionToken")) {
      apiAuthRequest.logoutFormNextClientToServer(true).then((res) => {
        setUser(null);
        router.push(`/login?redirectFrom=${pathname}`);
      });
    }
    return () => {
      controller.abort();
    };
  }, [sessionToken, router, pathname, setUser]);
  return <div>page</div>;
}

export default function LogoutPage() {
  return (
    <Suspense>
      <LogoutLogic />
    </Suspense>
  );
}
