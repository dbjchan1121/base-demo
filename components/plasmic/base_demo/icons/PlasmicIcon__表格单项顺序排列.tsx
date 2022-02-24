// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 表格单项顺序排列IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 表格单项顺序排列Icon(props: 表格单项顺序排列IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 24"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M6 5l4 6H2l4-6zm0 14l4-6H2l4 6z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default 表格单项顺序排列Icon;
/* prettier-ignore-end */
