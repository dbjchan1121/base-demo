// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Patn4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Patn4Icon(props: Patn4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 19"}
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
        d={"M0 0v15.375a3.18 3.18 0 003.185 3.175H17.15"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Patn4Icon;
/* prettier-ignore-end */
