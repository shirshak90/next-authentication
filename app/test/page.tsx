import React from "react";
import getCurrentUser from "../hooks/getCurrentUser";

const page = async () => {
  const currentUser = await getCurrentUser();

  return <div>{currentUser?.name || "User not logged in"}</div>;
};

export default page;
