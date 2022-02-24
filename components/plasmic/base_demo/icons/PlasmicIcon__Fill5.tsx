// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill5Icon(props: Fill5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
        d={"M2.25 1.127a1.126 1.126 0 11-2.25 0 1.126 1.126 0 112.25 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill5Icon;
/* prettier-ignore-end */
