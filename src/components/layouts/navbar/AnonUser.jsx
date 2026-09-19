import React from "react";
import { NavLink } from "react-router-dom";

const AnonUser = () => {
  return (
    <>
      <li>
        <NavLink to="/auth/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/auth/login">Login</NavLink>
      </li>
    </>
  );
};

export default AnonUser;
