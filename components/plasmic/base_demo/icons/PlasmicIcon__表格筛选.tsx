// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 表格筛选IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 表格筛选Icon(props: 表格筛选IconProps) {
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
          "M2.705 6.969a.6.6 0 01.445-1.004h6.696a.6.6 0 01.446 1.002L8 9.508V15.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V9.497L2.705 6.97zm11.02 7.773a.3.3 0 01-.45 0l-2.84-3.244a.3.3 0 01.226-.498h5.678a.3.3 0 01.226.498l-2.84 3.244z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default 表格筛选Icon;
/* prettier-ignore-end */
