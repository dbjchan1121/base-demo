// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse654IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse654Icon(props: Ellipse654IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"12.549"}
        cy={"12.549"}
        r={"12.549"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse654Icon;
/* prettier-ignore-end */
