// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Polygon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Polygon5Icon(props: Polygon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 43"}
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
        opacity={".15"}
        d={"M26.624 0L52.28 42.676H.969L26.624 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Polygon5Icon;
/* prettier-ignore-end */
