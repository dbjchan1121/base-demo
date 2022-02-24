// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UnionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UnionIcon(props: UnionIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
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
          "M11.363 1.459c.123-.122.25-.258.366-.413.121-.16.188-.319.193-.47a.499.499 0 00-.157-.388c-.198-.189-.534-.231-.855-.146a.862.862 0 00-.363.218 2.102 2.102 0 00-.327.41.797.797 0 00.018-.102.477.477 0 00-.055-.3.335.335 0 00-.31-.154c-.123.004-.268.057-.434.152-.474.27-.725.78-.86 1.202l.001.025C3.478 2.01.211 6.19 0 11.015c0 6.193 4.55 9.468 10.164 9.468s10.424-3.775 10.164-9.468c-.359-4.601-3.787-9.083-8.965-9.556z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UnionIcon;
/* prettier-ignore-end */
