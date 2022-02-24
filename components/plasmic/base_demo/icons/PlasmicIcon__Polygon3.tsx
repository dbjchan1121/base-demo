// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Polygon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Polygon3Icon(props: Polygon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 161 195"}
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

      <path
        opacity={".15"}
        d={"M80.5 0l80.107 195H.393L80.5 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Polygon3Icon;
/* prettier-ignore-end */
