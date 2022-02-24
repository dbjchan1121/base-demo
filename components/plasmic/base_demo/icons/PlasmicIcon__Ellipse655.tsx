// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse655IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse655Icon(props: Ellipse655IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 29"}
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
        cx={"14.245"}
        cy={"14.245"}
        r={"14.245"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse655Icon;
/* prettier-ignore-end */
