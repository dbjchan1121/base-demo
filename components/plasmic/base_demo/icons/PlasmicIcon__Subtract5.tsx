// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Subtract5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Subtract5Icon(props: Subtract5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1440 10"}
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
        opacity={".24"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M1440 0H0v10a8 8 0 018-8h1424a8 8 0 018 8V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Subtract5Icon;
/* prettier-ignore-end */
