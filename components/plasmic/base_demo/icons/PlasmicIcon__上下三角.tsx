// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 上下三角IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 上下三角Icon(props: 上下三角IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
        d={
          "M7.5 13.75a6.25 6.25 0 114.97-2.46l4.643 4.644a.833.833 0 11-1.179 1.179l-4.643-4.643A6.223 6.223 0 017.5 13.75zm4.14-2.756a.83.83 0 00-.646.646 5.417 5.417 0 11.646-.646z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default 上下三角Icon;
/* prettier-ignore-end */
