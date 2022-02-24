// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PatnIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PatnIcon(props: PatnIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 77 102"}
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
          "M59.419 0H3.185A3.18 3.18 0 000 3.175v95.272a3.18 3.18 0 003.185 3.174h69.937a3.18 3.18 0 003.185-3.174V3.922A3.922 3.922 0 0072.385 0H59.42z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PatnIcon;
/* prettier-ignore-end */
