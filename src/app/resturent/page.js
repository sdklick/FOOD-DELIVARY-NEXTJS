"use client";
import { useState } from "react";
import ResturentLogin from "../_components/ResturentLogin";
import ResturentSignup from "../_components/ResturentSignup";
import ResturentHeader from "../_components/ResturentHeader";
import ResturentFooter from "../_components/ResturentFooter";
const Reaturent = () => {
  const [login, setlogin] = useState(true);
  return (
    <>
      <ResturentHeader />
      <h1>Resturent Login Signup Page</h1>
      {login ? <ResturentLogin /> : <ResturentSignup />}
      <div>
        <a
          className="link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
          style={{ cursor: "pointer" }}
          onClick={() => setlogin(!login)}
        >
          {login
            ? "Do Not Have Account? Signup"
            : "Already Have Account? Login"}
        </a>
      </div>
      <ResturentFooter/>
    </>
  );
};

export default Reaturent;
