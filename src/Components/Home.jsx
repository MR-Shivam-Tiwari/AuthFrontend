import React, { useState } from "react";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Forgot from "./Auth/Forgot";
import Otp from "./Auth/Otp";
import NewPassword from "./Auth/NewPassword";
import PasswordChanged from "./Auth/PasswordChanged";

function Home() {
  return (
    <div className="">
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          background: "white",
        }}
      ></div>
      <PasswordChanged />
    </div>
  );
}

export default Home;
