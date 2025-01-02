"use client";
import accountApi from "@/apiRequests/account";
import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    const fecthRequest = async () => {
      await accountApi.meClient();
    };
    fecthRequest();
  }, []);
  return <div>profile</div>;
};

export default Profile;
