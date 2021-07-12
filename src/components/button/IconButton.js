import clsx from "clsx";
import React from "react";
import ButtonBase from "./ButtonBase";

/**
 *
 * @param {React.ComponentPropsWithoutRef<typeof ButtonBase>} props
 */
function IconButton(props) {
  const { className, ...rest } = props;
  return (
    <ButtonBase className={clsx("rounded-full p-3", className)} {...rest} />
  );
}

export default IconButton;
