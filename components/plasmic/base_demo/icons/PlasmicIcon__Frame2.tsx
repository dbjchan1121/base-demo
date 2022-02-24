// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame2Icon(props: Frame2IconProps) {
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
        d={
          "M10.315 2.32l6.85 3.852v7.662l-6.85 3.855-6.852-3.853V6.172l6.852-3.852zm0-1.105L2.502 5.609v8.79l7.813 4.394 7.812-4.395V5.61l-7.812-4.394z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10.334 11.191a4.558 4.558 0 01-.465.498 5.641 5.641 0 01-.685.54 7.35 7.35 0 01-.94.53 8.53 8.53 0 01-1.224.466l-.184-.623c.664-.2 1.207-.43 1.629-.69.422-.26.748-.5.98-.723H7.45V8.803c-.105.093-.191.17-.258.224a.743.743 0 00-.107.1l-.406-.514A9.768 9.768 0 007.803 7.5c.197-.225.38-.469.552-.732l.55.351a6.735 6.735 0 01-.104.147c-.037.048-.07.1-.104.148h4.239v.639l-.797.613h.707v-.13h.656v1.905c0 .211-.072.39-.217.534a.724.724 0 01-.531.216h-2.42zm-2.16-3.12c-.106.115-.207.222-.303.324-.098.101-.187.193-.27.273h3.467l.782-.598H8.174zm-.069 2.464h1.893c.04-.055.068-.103.092-.144.021-.041.039-.076.05-.104v-.963H8.106v1.211zm5.844 1.545v.414a.72.72 0 01-.217.531.73.73 0 01-.533.215h-2.496v-1.892h.656v1.236h1.842c.06 0 .092-.033.092-.098v-.408h.656v.002zm-1.103-2.756h-2.051v1.086l-.025.059a.18.18 0 01-.026.066h2c.066 0 .1-.031.1-.092V9.324h.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame2Icon;
/* prettier-ignore-end */
