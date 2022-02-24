// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill3Copy4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill3Copy4Icon(props: Fill3Copy4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 106 56"}
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

      <g filter={"url(#V7xwt4B1KmhPa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M3.182 55.198C1.425 55.198 0 54.202 0 52.973V0h105.054v52.973c0 1.229-1.424 2.225-3.182 2.225H3.182z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"V7xwt4B1KmhPa"}
          x={"0"}
          y={"0"}
          width={"107.725"}
          height={"55.198"}
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

          <feOffset dx={"2.671"}></feOffset>

          <feGaussianBlur stdDeviation={"1.781"}></feGaussianBlur>

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
            result={"effect1_innerShadow_7144_273503"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Fill3Copy4Icon;
/* prettier-ignore-end */
