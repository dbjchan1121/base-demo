// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 导出IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 导出Icon(props: 导出IconProps) {
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
        d={
          "M15 12.5V15H5v-2.5H3.333V15c0 .917.75 1.667 1.667 1.667h10c.917 0 1.667-.75 1.667-1.667v-2.5H15zm-9.167-5l1.175 1.175 2.159-2.15v6.808h1.666V6.525l2.159 2.15L14.167 7.5 10 3.333 5.833 7.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default 导出Icon;
/* prettier-ignore-end */
