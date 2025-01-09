"use client";
import authApiRequest from "@/apiRequests/auth";
import { useEffect } from "react";
import { differenceInHours } from "date-fns";
export default function SlideSession() {
  useEffect(() => {
    const interval = setInterval(async () => {
      const now = new Date();
      const sessionTokenExpiresAt = localStorage.getItem(
        "sessionTokenExpiresAt"
      );

      const expiesAt = sessionTokenExpiresAt
        ? new Date(sessionTokenExpiresAt)
        : new Date();
      if (differenceInHours(expiesAt, now) < 1) {
        const res: any =
          await authApiRequest.slideSessionFromNextClientToNextServer();
        localStorage.setItem(
          "sessionTokenExpiresAt",
          res.payload.data.expiresAt
        );
      }
    }, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  return null;
}
