export const elIs = <
  const E extends HTMLElement | SVGElement | MathMLElement | Element,
  const T extends E extends HTMLElement
    ? Uppercase<
        keyof HTMLElementTagNameMap | keyof HTMLElementDeprecatedTagNameMap
      >
    : E extends SVGElement
    ? keyof SVGElementTagNameMap
    : E extends MathMLElement
    ? keyof MathMLElementTagNameMap
    :
        | Uppercase<
            keyof HTMLElementTagNameMap | keyof HTMLElementDeprecatedTagNameMap
          >
        | keyof SVGElementTagNameMap
        | keyof MathMLElementTagNameMap,
>(
  el: E,
  tagName: T
): el is E & { tagName: T } => el.tagName === tagName;
