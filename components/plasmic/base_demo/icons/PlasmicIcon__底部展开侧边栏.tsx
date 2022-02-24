// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 底部展开侧边栏IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 底部展开侧边栏Icon(props: 底部展开侧边栏IconProps) {
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
          "M2.867 10.544a.72.72 0 010-1.088L8.45 4.608l.944 1.087L4.437 10l4.958 4.305-.944 1.087-5.584-4.848zm6 0a.72.72 0 010-1.088l5.584-4.848.944 1.087L10.437 10l4.958 4.305-.944 1.087-5.584-4.848z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default 底部展开侧边栏Icon;
/* prettier-ignore-end */
