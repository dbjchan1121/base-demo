// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.73.003c.707-.033 1.452.2 2.076.827.634.634.865 1.399.776 2.138-.084.695-.438 1.29-.828 1.713-.233.252-.534.394-.712.47a5.953 5.953 0 01-.56.197 1 1 0 01-1.073.177 1.098 1.098 0 01-.386-.278 1.022 1.022 0 01-.201-1.016 1.05 1.05 0 01.375-.501 1.21 1.21 0 01.214-.125 3.7 3.7 0 01.48-.168c.15-.046.272-.086.37-.128a.982.982 0 00.062-.028c.162-.19.254-.391.273-.552.015-.127-.003-.283-.205-.485l-.002-.002c-.205-.206-.392-.25-.565-.241a1.181 1.181 0 00-.51.16l-.016.035a4.276 4.276 0 00-.145.405c-.037.11-.092.282-.15.407-.02.043-.052.108-.098.18a1.085 1.085 0 01-.322.32 1.022 1.022 0 01-1.002.057 1.053 1.053 0 01-.463-.452A1 1 0 01.251 1.98l.016-.048c.047-.142.114-.343.2-.537A2.21 2.21 0 01.881.74a.978.978 0 01.15-.13A3.238 3.238 0 012.73.002zM.867.756L.865.76.862.763.868.756z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
