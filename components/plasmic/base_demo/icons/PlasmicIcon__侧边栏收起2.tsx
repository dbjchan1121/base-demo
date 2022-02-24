// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 侧边栏收起2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 侧边栏收起2Icon(props: 侧边栏收起2IconProps) {
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
          "M14.546 9.01a1 1 0 00-1.414-1.414l-2.829 2.829-2.828-2.829A1 1 0 106.06 9.01l3.535 3.536a1 1 0 001.414 0l.006-.006 3.53-3.53z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default 侧边栏收起2Icon;
/* prettier-ignore-end */
