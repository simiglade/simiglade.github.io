import React from "react";
import Logo from "components/Logo";
// import Button from "./Button";

function Header(props) {
  return (
    <div className='fixed top-0 w-full'>
      <div className='md:container flex items-center'>
        <Logo />

      </div>
    </div>
  );
}

export default Header;
