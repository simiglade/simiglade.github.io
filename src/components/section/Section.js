import clsx from "clsx";
import React from "react";

/**
 *
 * @param {React.ComponentPropsWithoutRef<'div'>} props
 */
function Section(props) {
  const { className, ...rest } = props;
  return <div className={clsx("container mx-auto my-10 px-4", className)} {...rest} />;
}

export default Section