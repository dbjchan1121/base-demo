// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8LNynTt7Kq18qaQhaii1cF
// Component: 0nkvWt2usYG
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_base_demo.module.css"; // plasmic-import: 8LNynTt7Kq18qaQhaii1cF/projectcss
import sty from "./PlasmicSelect__Option.module.css"; // plasmic-import: 0nkvWt2usYG/css

import SUPER__PlasmicSelect from "./PlasmicSelect"; // plasmic-import: 9VSi9Q2PR3x/render

export type PlasmicSelect__Option__VariantMembers = {
  isSelected: "isSelected";
  isHighlighted: "isHighlighted";
  isDisabled: "isDisabled";
};

export type PlasmicSelect__Option__VariantsArgs = {
  isSelected?: SingleBooleanChoiceArg<"isSelected">;
  isHighlighted?: SingleBooleanChoiceArg<"isHighlighted">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};

type VariantPropType = keyof PlasmicSelect__Option__VariantsArgs;
export const PlasmicSelect__Option__VariantProps = new Array<VariantPropType>(
  "isSelected",
  "isHighlighted",
  "isDisabled"
);

export type PlasmicSelect__Option__ArgsType = {
  children?: React.ReactNode;
  value?: string;
  textValue?: string;
};

type ArgPropType = keyof PlasmicSelect__Option__ArgsType;
export const PlasmicSelect__Option__ArgProps = new Array<ArgPropType>(
  "children",
  "value",
  "textValue"
);

export type PlasmicSelect__Option__OverridesType = {
  root?: p.Flex<"div">;
  labelContainer?: p.Flex<"div">;
};

export interface DefaultSelect__OptionProps extends pp.BaseSelectOptionProps {}

function PlasmicSelect__Option__RenderFunc(props: {
  variants: PlasmicSelect__Option__VariantsArgs;
  args: PlasmicSelect__Option__ArgsType;
  overrides: PlasmicSelect__Option__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const superContexts = {
    Select: React.useContext(SUPER__PlasmicSelect.Context)
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.rootisHighlighted]: hasVariant(
            variants,
            "isHighlighted",
            "isHighlighted"
          ),
          [sty.rootisSelected]: hasVariant(variants, "isSelected", "isSelected")
        }
      )}
    >
      <div
        data-plasmic-name={"labelContainer"}
        data-plasmic-override={overrides.labelContainer}
        className={classNames(projectcss.all, sty.labelContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Option",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenisHighlighted]: hasVariant(
              variants,
              "isHighlighted",
              "isHighlighted"
            ),
            [sty.slotTargetChildrenisSelected]: hasVariant(
              variants,
              "isSelected",
              "isSelected"
            )
          })
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseSelectOptionProps>(
  props: P,
  ref: pp.SelectOptionRef
) {
  return pp.useSelectOption(
    PlasmicSelect__Option,
    props,
    {
      isSelectedVariant: { group: "isSelected", variant: "isSelected" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      isHighlightedVariant: {
        group: "isHighlighted",
        variant: "isHighlighted"
      },
      labelSlot: "children",
      root: "root",
      labelContainer: "labelContainer"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "labelContainer"],
  labelContainer: ["labelContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelect__Option__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelect__Option__VariantsArgs;
    args?: PlasmicSelect__Option__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSelect__Option__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSelect__Option__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelect__Option__ArgProps,
      internalVariantPropNames: PlasmicSelect__Option__VariantProps
    });

    return PlasmicSelect__Option__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect__Option";
  } else {
    func.displayName = `PlasmicSelect__Option.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect__Option = Object.assign(
  // Top-level PlasmicSelect__Option renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicSelect__Option
    internalVariantProps: PlasmicSelect__Option__VariantProps,
    internalArgProps: PlasmicSelect__Option__ArgProps,

    useBehavior
  }
);

export default PlasmicSelect__Option;
/* prettier-ignore-end */
