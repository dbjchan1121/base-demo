// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle3Icon(props: Rectangle3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 93 50"}
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
          "M91.307 0H1.283C.574 0 0 .476 0 1.064v47.729c0 .587.574 1.063 1.283 1.063h90.024c.709 0 1.283-.476 1.283-1.063V1.063C92.59.477 92.016 0 91.307 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle3Icon;
/* prettier-ignore-end */
