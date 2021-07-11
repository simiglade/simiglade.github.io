import clsx from "clsx";
import React from "react";
import ButtonBase from "./ButtonBase";

/**
 *
 * @param {ButtonProps} props
 */
function Button(props) {
  const { variant, className, ...rest } = props;
  return (
    <ButtonBase
      {...rest}
      className={clsx(
        "inline-flex py-2 px-3 text-button rounded",
        {
          "bg-secondary text-white": variant === "contained",
          "ring-1": variant === "outlined",
          "": variant === "text",
        },
        className
      )}
    />
  );
}

Button.defaultProps = {
  variant: "contained",
};

export default Button;

/**
 * @typedef {{
 * variant: "contained" | "outlined" | "text";
 * size: "small" | "medium" | "large";
 * bgColor: string,
 * } & React.ComponentPropsWithoutRef<'button'>} ButtonProps
 */
