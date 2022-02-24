// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 16"}
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
        d={
          "M12.806 0H4.228a1.333 1.333 0 00-1.162.678L.172 5.803A1.333 1.333 0 00.33 7.337l7.18 8.2a1.333 1.333 0 002.004.003l7.194-8.177a1.333 1.333 0 00.161-1.536L13.967.68A1.333 1.333 0 0012.806 0zM4.228 1.333h8.578l2.901 5.149-7.194 8.177-7.18-8.2 2.895-5.126z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
