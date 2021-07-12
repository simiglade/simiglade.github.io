import React from "react";
import logo from "../assets/img/logo-dark.png";
import logoLight from "../assets/img/logo.png";

/**
 *
 * @param {{light: boolean} & React.ComponentPropsWithoutRef<'img'>} props
 * @returns
 */
function Logo(props) {
  const { light, ...rest } = props;
  return (
    <img src={light ? logoLight : logo} alt="logo" className="h-8" {...rest} />
  );
}

export default Logo;
