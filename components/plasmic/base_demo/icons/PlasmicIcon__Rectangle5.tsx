// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle5Icon(props: Rectangle5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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

      <g filter={"url(#O5ruU2DeMGPa)"}>
        <path d={"M31.37 0H0v31.37h31.37V0z"} fill={"currentColor"}></path>
      </g>

      <defs>
        <filter
          id={"O5ruU2DeMGPa"}
          x={"-2.477"}
          y={"0"}
          width={"36.324"}
          height={"31.371"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dx={"-2.477"}></feOffset>

          <feGaussianBlur stdDeviation={"1.651"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={
              "0 0 0 0 0.376471 0 0 0 0 0.517647 0 0 0 0 0.988235 0 0 0 0.25 0"
            }
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            result={"effect1_innerShadow_7116_223024"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dx={"2.477"}></feOffset>

          <feGaussianBlur stdDeviation={"1.651"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={
              "0 0 0 0 0.376471 0 0 0 0 0.517647 0 0 0 0 0.988235 0 0 0 0.25 0"
            }
          ></feColorMatrix>

          <feBlend
            in2={"effect1_innerShadow_7116_223024"}
            result={"effect2_innerShadow_7116_223024"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle5Icon;
/* prettier-ignore-end */
