"use client"
import { useState } from "react";
import ResturentLogin from "../_components/resturentLogin";
import ResturentSignup from "../_components/resturentSignup";
const Reaturent = () => {
  const [login, setlogin] = useState(true);
  return (
    <>
      <ResturentLogin />

      <ResturentSignup />
    </>
  );
};

export default Reaturent;
