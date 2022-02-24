// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 提示警示IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 提示警示Icon(props: 提示警示IconProps) {
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
          "M9.167 12.5h1.666v1.667H9.167V12.5zm0-6.667h1.666v5H9.167v-5zm.825-4.166c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.341-3.733 8.341-8.333S14.6 1.667 9.992 1.667zm.008 15A6.665 6.665 0 013.333 10 6.665 6.665 0 0110 3.333 6.665 6.665 0 0116.667 10 6.665 6.665 0 0110 16.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default 提示警示Icon;
/* prettier-ignore-end */
