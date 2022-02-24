// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill2Icon(props: Fill2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 106 7"}
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
          "M105.054 6.232H0V1.758C0 .787 1.28 0 2.857 0h99.34c1.578 0 2.857.787 2.857 1.758v4.474z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill2Icon;
/* prettier-ignore-end */
