// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill17Icon(props: Fill17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 15"}
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
          "M15.182 6.933c1.366-1.17 1.747-3.643.902-4.945l-.232-.334c-.446-.64-1.073-1.009-1.767-1.243C13.058.064 11.8.18 10.913.769c-.813.54-1.543 1.143-2.044 1.733-.584-.766-1.446-1.47-2.236-2.008-1.454-.99-3.818-.394-4.784.921l-.233.334c-.982 1.41-.664 3.62.596 4.81C.968 7.122 0 7.92 0 9.473c0 2.678 4.396 5.399 8.45 5.399 4.43 0 8.941-2.602 8.941-5.425 0-1.474-1.118-2.106-2.21-2.515z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill17Icon;
/* prettier-ignore-end */
