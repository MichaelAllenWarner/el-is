type HTMLTagNames = Uppercase<
  keyof HTMLElementTagNameMap | keyof HTMLElementDeprecatedTagNameMap
>;

type SVGTagNames = keyof SVGElementTagNameMap;

type MathMLTagNames = keyof MathMLElementTagNameMap;

export const elIs = <
  const E extends HTMLElement | SVGElement | MathMLElement | Element | null,
  const T extends E extends null
    ? never
    : E extends HTMLElement
    ? HTMLTagNames
    : E extends SVGElement
    ? SVGTagNames
    : E extends MathMLElement
    ? MathMLTagNames
    : E extends HTMLElement | SVGElement
    ? HTMLTagNames | SVGTagNames
    : E extends HTMLElement | MathMLElement
    ? HTMLTagNames | MathMLTagNames
    : E extends SVGElement | MathMLElement
    ? SVGTagNames | MathMLTagNames
    : HTMLTagNames | SVGTagNames | MathMLTagNames,
>(
  el: E,
  tagName: T
): el is E & { tagName: T } => el?.tagName === tagName;
