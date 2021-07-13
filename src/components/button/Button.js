import clsx from "clsx";
import React from "react";
import ButtonBase from "./ButtonBase";

/**
 *
 * @param {ButtonProps} props
 */
function Button(props) {
  const { variant, className, bgColor, color, ...rest } = props;
  return (
    <ButtonBase
      {...rest}
      className={clsx(
        "inline-flex py-2 px-3 text-button rounded hover:-translate-y-1",
        {
          [`${bgColor}`]: variant === "contained",
          "ring-1": variant === "outlined",
          "": variant === "text",
        },
        className,
        color
      )}
    />
  );
}

Button.defaultProps = {
  variant: "contained",
  bgColor: "bg-secondary",
  color: "text-white",
};

export default Button;

/**
 * @typedef {{
 * variant: "contained" | "outlined" | "text";
 * size: "small" | "medium" | "large";
 * bgColor: string,
 * color: string,
 * } & React.ComponentPropsWithoutRef<'button'>} ButtonProps
 */
