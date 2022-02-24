// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20X20BianjiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20X20BianjiIcon(props: Icon20X20BianjiIconProps) {
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
          "M9.505 12.783a.696.696 0 00.984 0l3.594-3.595a.715.715 0 000-1 .696.696 0 00-.984.016l-3.102 3.102-3.102-3.102a.696.696 0 00-.985.984l3.595 3.595z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon20X20BianjiIcon;
/* prettier-ignore-end */
