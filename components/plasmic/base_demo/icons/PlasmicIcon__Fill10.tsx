// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill10Icon(props: Fill10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 13"}
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

      <g filter={"url(#a4XLCLOtmEJa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={"M0 12.54h15.96V0H0v12.54z"}
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"a4XLCLOtmEJa"}
          x={"0"}
          y={"0"}
          width={"16.851"}
          height={"16.102"}
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

          <feOffset dx={".89"} dy={"4.451"}></feOffset>

          <feGaussianBlur stdDeviation={"1.781"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            result={"effect1_innerShadow_7144_273497"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Fill10Icon;
/* prettier-ignore-end */
