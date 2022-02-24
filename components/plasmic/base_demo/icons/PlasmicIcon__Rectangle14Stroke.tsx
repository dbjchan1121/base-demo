// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle14StrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle14StrokeIcon(props: Rectangle14StrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 5"}
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
          "M3.798 4.79a.696.696 0 00.985 0l3.594-3.594a.715.715 0 000-1 .696.696 0 00-.985.016L4.29 3.314 1.188.212a.696.696 0 10-.984.984L3.798 4.79z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle14StrokeIcon;
/* prettier-ignore-end */
