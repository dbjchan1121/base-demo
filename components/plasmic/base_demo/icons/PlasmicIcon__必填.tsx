// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 必填IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 必填Icon(props: 必填IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
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
          "M5.811 1.906a.59.59 0 00-.436-.179c-.14.01-.278.045-.405.107a9.226 9.226 0 00-.677.337c-.282.151-.584.303-.896.454.038-.327.072-.623.103-.877.03-.255.055-.472.072-.65.017-.183.027-.3.027-.362A.814.814 0 003.431.2a.533.533 0 00-.43-.2.547.547 0 00-.435.2.724.724 0 00-.169.481c0 .152.02.437.062.847.041.409.093.777.155 1.097-.344-.175-.646-.33-.914-.468a12.861 12.861 0 00-.66-.32 1.118 1.118 0 00-.432-.11.592.592 0 00-.422.179A.595.595 0 000 2.35a.662.662 0 00.083.3.46.46 0 00.168.209c.326.148.666.265 1.013.358.316.079.677.155 1.082.22A11.15 11.15 0 00.958 5.085a.544.544 0 00-.072.31.618.618 0 00.175.412.577.577 0 00.447.193.545.545 0 00.398-.172c.141-.152.265-.32.36-.506.252-.457.495-.918.736-1.383.244.564.539 1.104.886 1.61.13.234.357.396.618.447a.607.607 0 00.618-.605.624.624 0 00-.075-.323 2.608 2.608 0 00-.272-.369 5.41 5.41 0 01-.302-.395 14.238 14.238 0 00-.807-.874 9.018 9.018 0 002.05-.564.474.474 0 00.193-.21A.675.675 0 006 2.339a.633.633 0 00-.189-.433z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default 必填Icon;
/* prettier-ignore-end */
