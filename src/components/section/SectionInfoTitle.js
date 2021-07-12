import clsx from "clsx";
import React from "react";

/**
 *
 * @param {{header: boolean} & React.ComponentPropsWithoutRef<'h6'>} props
 */
function SectionInfoTitle(props) {
    const{className, header, ...rest} = props
  return (
    <p {...rest} className={clsx("text-textPrimary mb-1", header && 'text-h6' , className)}>
      {props.children}
    </p>
  );
}

export default SectionInfoTitle