// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MonotonePointLineTriangleCubeIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function MonotonePointLineTriangleCubeIcon(
  props: MonotonePointLineTriangleCubeIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 119 119"}
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
          "M19.523 87.793l42.164-65.299a5.927 5.927 0 116.684.547l31.707 72.553a5.926 5.926 0 11-3.729 5.864l-73.677-7.256a5.929 5.929 0 01-11.748-1.117 5.927 5.927 0 018.599-5.292zm45.904-63.97c.234 0 .466-.013.693-.04l9.266 43.464a5.93 5.93 0 00-3.803 7.256l-49.326 16.15a5.949 5.949 0 00-1.754-2.236l42.153-65.28c.827.438 1.77.686 2.77.686zm6.586 51.762L22.627 91.754c.096.415.147.847.15 1.29l73.617 7.251a5.9 5.9 0 011.266-2.922L80.508 77.836a5.926 5.926 0 01-8.495-2.25zm9.404 1.524l17.061 19.435c.18-.149.369-.288.565-.416l-31.732-72.61-.055.018 9.262 43.45a5.927 5.927 0 014.898 10.123z"
        }
        fill={"currentColor"}
        opacity={".1"}
      ></path>
    </svg>
  );
}

export default MonotonePointLineTriangleCubeIcon;
/* prettier-ignore-end */
