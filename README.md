# el-is

- [el-is](#el-is)
  - [Install](#install)
  - [Requirements](#requirements)
  - [Usage](#usage)
  - [Usage Notes](#usage-notes)

## Install

```bash
npm install @michaelallenwarner/el-is
```

## Requirements

- TypeScript >= 5.0 (assuming you're using TypeScript)

## Usage

```ts
import { elIs } from '@michaelallenwarner/el-is';

const htmlElement = document.querySelector('section'); // `HTMLElement | null`
if (elIs(htmlElement, 'SECTION')) {
  // `htmlElement` now has type `HTMLElement & { tagName: 'SECTION' }`
}

const mathMlElement = document.querySelector('mrow'); // `MathMLElement | null`
if (elIs(mathMlElement, 'mrow')) {
  // `mathMlElement` now has type `MathMLElement & { tagName: 'mrow' }`
}

const element = document.querySelector('.svg-path-element'); // `Element | null`
if (elIs(element, 'path')) {
  // `element` now has type `Element & { tagName: 'path' }`
  /*
    But probably just do `if (element instanceof SVGPathElement)` instead!

    Also, although `Element` will work as a type for the first parameter,
    it's advisable to narrow it first to `HTMLElement`, `MathMLElement`, or `SVGElement`.

    See Usage Notes below.
  */
}
```

## Usage Notes

The `elIs()` function takes two arguments—a maybe-`null` DOM element (`el`) and a string literal (`tagName`)—and returns the `boolean` result of a simple `el?.tagName === tagName` check, but with some TypeScript niceties described below.

But first, a quick warning: _**you probably should only use this function if the kind of element you're checking against doesn't have its own dedicated interface!**_ For example, if you want to check whether `el` is a link, I can't think of any reason not to just do `if (el instanceof HTMLAnchorElement)`, so that the type-narrowing gives you all the properties and methods that come with the more specific interface (like `HTMLAnchorElement.href`). The `elIs()` function is really for testing whether an element is of a kind that _doesn't_ have its own interface, like `<section>`.

With that out of the way, here are the TypeScript niceties you get with `elIs()`:

- When it returns `true`, the function narrows `el`'s type by ruling out `null` (if applicable) and intersecting with `{ tagName: T }`, where `T` is the string-literal type provided as the `tagName` argument. So if the `el` you supply has type `HTMLElement` (or `HTMLElement | null`), then if `elIs(el, 'DIV')` returns `true`, the type of `el` will be narrowed to `HTMLElement & { tagName: 'DIV' }`.
- You get autocomplete functionality and typo-prevention with the `tagName` parameter.
  
  Specifically, the `tagName` parameter must be the value of a standard DOM element's `tagName` property, and this restriction further depends on the type of the `el` argument you supply. For example, if `el` is an instance of `HTMLElement`, then the supplied `tagName` argument must be the value of a standard HTML element's `tagName` property, like `'DIV'`. Supported `el` types are `HTMLElement`, `SVGElement`, `MathMLElement`, the more general `Element`, and unions of any of these; the `tagName` argument will always be appropriately restricted. (It's best, though, if `el` is just `HTMLElement`, `SVGElement`, or `MathMLElement`, so that you don't have to worry about confusing uppercase HTML tag-names like `'A'` with lowercase SVG or MathML tag-names like `'a'`.)

If you don't use `elIs()`, you can just do something like `if (el.matches('section'))` or `if (el.tagName === 'section')` instead. But then you don't get the type-narrowing, the autocomplete, or the typo-prevention, and you'll probably make the mistake I made in the previous sentence (should be `if (el.tagName === 'SECTION')`).

A few more notes:

- Because of the `tagName` restrictions, this function won't work with custom elements in TypeScript.
- Although `SVGElement` is a supported type for the `el` parameter, it's worth noting that, at the time of writing, every kind of SVG element has its own dedicated interface (like `SVGPathElement`), so you probably want to reach for `instanceof` with SVG tags.
- Deprecated HTML elements are supported (e.g., if `el` is an `HTMLElement`, then `tagName` can be `'MARQUEE'`).
