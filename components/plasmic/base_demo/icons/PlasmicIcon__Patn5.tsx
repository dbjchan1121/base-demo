// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Patn5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Patn5Icon(props: Patn5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 77 93"}
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

      <g filter={"url(#Fc2erdZbYeEa)"}>
        <path
          d={
            "M59.29 0H3.185A3.18 3.18 0 000 3.175v86.644a3.18 3.18 0 003.185 3.175h70.07a3.18 3.18 0 003.185-3.175V18.55H64.2c-1.758 0-4.91-1.42-4.91-3.174V0z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"Fc2erdZbYeEa"}
          x={"0"}
          y={"-9.412"}
          width={"76.44"}
          height={"102.406"}
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

          <feOffset dy={"-25.882"}></feOffset>

          <feGaussianBlur stdDeviation={"4.706"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={
              "0 0 0 0 0.176471 0 0 0 0 0.780392 0 0 0 0 0.596078 0 0 0 0.25 0"
            }
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            result={"effect1_innerShadow_7116_223021"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Patn5Icon;
/* prettier-ignore-end */
