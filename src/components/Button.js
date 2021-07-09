import clsx from "clsx";
import React from "react";

/**
 *
 * @param {ButtonProps} props
 */
function Button(props) {
  const { variant, className, ...rest } = props;
  return (
    <button
      {...rest}
      className={clsx(
        "inline-flex justify-center items-center rounded outline-none focus:outline-none overflow-hidden border-0 cursor-pointer py-4 px-12",
        {
          "bg-secondary text-white": variant === "contained",
          " text-primary ring-1 ring-primary": variant === "outlined",
          " text-secondary": variant === "text",
        },
        className
      )}
    />
  );
}

export default Button;

/**
 * @typedef {{
 * variant: "contained" | "outlined" | "text";
 * size: "small" | "medium" | "large";
 * bgColor: string,
 *
 * } & React.ComponentPropsWithoutRef<'button'>} ButtonProps
 */
