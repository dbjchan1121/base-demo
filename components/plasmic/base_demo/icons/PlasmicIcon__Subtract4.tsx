// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Subtract4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Subtract4Icon(props: Subtract4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1352 32"}
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
          "M1352 0H0v10a8 8 0 018-8h1336a8 8 0 018 8V0zm0 31c0 .339-.02.672-.06 1h.06v-1zM.062 32A8.079 8.079 0 010 31v1h.062z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Subtract4Icon;
/* prettier-ignore-end */
