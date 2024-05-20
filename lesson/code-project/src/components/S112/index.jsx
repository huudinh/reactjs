// Button.js
import clsx from "clsx";

function ButtonPrimary(props) {
  const { children, className, ...rest } = props;
  const classes = clsx("btn-primary", className);
  return <button className={classes}
    {...rest}>{children}</button>;
}

function ButtonSecondary(props) {
  const { children, className, ...rest } = props;
  const classes = clsx("btn-secondary", className);
  return <button className={classes} 
    {...rest}>{children}</button>;
}

export { ButtonPrimary, ButtonSecondary };

import {ButtonPrimary, ButtonSecondary} from "./Button.js";


