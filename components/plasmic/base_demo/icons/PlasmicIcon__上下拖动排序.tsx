// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 上下拖动排序IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 上下拖动排序Icon(props: 上下拖动排序IconProps) {
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
          "M13.416 5.503L9.94 2.023h-.03l-3.507 3.48 1.08 1.032L9.945 4.07l2.452 2.466 1.018-1.032zm-1.018 7.97l-2.47 2.467-2.434-2.467-1.03 1.032 3.476 3.481 3.489-3.48-1.031-1.033zM4.006 8.954V7.496h11.988v1.458H4.006zm0 1.848v1.459h11.988v-1.459H4.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default 上下拖动排序Icon;
/* prettier-ignore-end */
