// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Patn2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Patn2Icon(props: Patn2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 77 93"}
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
          "M59.419 0H3.185A3.18 3.18 0 000 3.175v86.644a3.18 3.18 0 003.185 3.175h69.937a3.18 3.18 0 003.185-3.175V3.922A3.922 3.922 0 0072.385 0H59.42z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Patn2Icon;
/* prettier-ignore-end */
