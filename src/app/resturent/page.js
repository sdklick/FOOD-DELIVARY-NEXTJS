"use client";
import { useState } from "react";
import ResturentLogin from "../_components/resturentLogin";
import ResturentSignup from "../_components/resturentSignup";
const Reaturent = () => {
  const [login, setlogin] = useState(true);
  return (
    <>
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
    </>
  );
};

export default Reaturent;
