import React from "react";
import clsx from "clsx";

/**
 *
 * @param {React.ComponentPropsWithoutRef<'button'>} props
 */
function ButtonBase(props) {
  const { className, ...rest } = props;
  return (
    <button
      className={clsx(
        "flex items-center justify-center cursor-pointer text-button transition-colors focus:outline-none",
        className
      )}
      {...rest}
    />
  );
}

export default ButtonBase;
