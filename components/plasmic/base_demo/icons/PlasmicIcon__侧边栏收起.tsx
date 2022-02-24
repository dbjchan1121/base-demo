// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 侧边栏收起IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 侧边栏收起Icon(props: 侧边栏收起IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M14.546 10.99a1 1 0 11-1.414 1.414l-2.829-2.829-2.828 2.829A1 1 0 016.06 10.99l3.533-3.534.002-.002a.999.999 0 011.414 0l.002.002 3.534 3.534z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default 侧边栏收起Icon;
/* prettier-ignore-end */
