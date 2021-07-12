import clsx from "clsx";
import React from "react";

/**
 *
 * @param {React.ComponentPropsWithoutRef<'p'>} props
 */
function SectionInfoDescription(props) {
  const { className, ...rest } = props;
  return (
    <p
      {...rest}
      className={clsx("text-textSecondary mb-4", className)}
    >
      {props.children}
    </p>
  );
}

export default SectionInfoDescription;
