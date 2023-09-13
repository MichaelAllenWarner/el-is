# el-is

- [el-is](#el-is)
  - [Install](#install)
  - [Usage](#usage)
  - [Usage Notes](#usage-notes)
    - [Why?](#why)
  - [API](#api)
    - [elIs](#elis)
      - [Type parameters](#type-parameters)
      - [Parameters](#parameters)
      - [Returns](#returns)

## Install

```bash
npm install el-is
```

## Usage

```ts
import { elIs } from 'el-is';

const htmlElement = document.querySelector('section'); // `HTMLElement | null`
if (htmlElement && elIs(htmlElement, 'SECTION')) {
  // `htmlElement` now has type `HTMLElement & { tagName: 'SECTION' }`
}

const mathMlElement = document.querySelector('mrow'); // `MathMLElement | null`
if (mathMlElement && elIs(mathMlElement, 'mrow')) {
  // `mathMlElement` now has type `MathMLElement & { tagName: 'mrow' }`
}

const svgElement = document.querySelector('path'); // `SVGElement | null`
if (svgElement && elIs(svgElement, 'path')) {
  // `svgElement` now has type `SVGElement & { tagName: 'path' }`
}

const element = document.querySelector('.foo'); // `Element | null`
if (element && elIs(element, 'SECTION')) {
  // `element` now has type `Element & { tagName: 'SECTION' }`
}
```

## Usage Notes

The `elIs()` function takes a DOM element (`el`) and a string-literal (`tagName`) and returns the `boolean` result of a simple `el.tagName === tagName` check, but with some TypeScript niceties:

- In the `true` case, the type-predicate narrows the type of `el` by intersecting its input-type with `{ tagName: T }`, where `T` is the string-literal type provided as the `tagName` argument.

- To prevent you from making typos, the `tagName` parameter is restricted to valid tag-name values for built-in elements of the top-level `Element`-subtype that `el` is an instance of (if applicable). For example, if `el` is an instance of `HTMLElement` (something like an `HTMLParagraphElement` would qualify), then `tagName` must be a string literal that's the value of the `tagName` property of a built-in HTML element. If `el` is only known to be an `Element`, then `tagName` is still restricted, but less so: it must be a string literal that's the value of the `tagName` property of a built-in HTML element, SVG element, or MathML element. (It's best if `el` is more specific than `Element`, though, so that you don't have to worry about confusing uppercase HTML tag-names like `'A'` with lowercase SVG or MathML tag-names like `'a'`.)

Note that because of the `tagName` restrictions, this function is only useful in TypeScript for built-in HTML elements (including deprecated ones), SVG elements, and MathML elements. It's not for use with custom elements.

### Why?

You might be wondering: how is this useful at all? Why bother with this when a simple check like `if (el is instanceof HTMLDivElement)` is already available? And the `instanceof` check is clearly superior, since the narrowed type it produces comes with the more specific interface's properties and methods (like `HTMLAnchorElement.href`).

The answer is that many element-types don't actually have their own dedicated interface! For example, there's no `HTMLSectionElement` interface; a `<section>` tag is just an `HTMLElement`-instance in the DOM. This function is primarily useful for precisely these elements, where `instanceof` isn't an option.

To be sure, even in a case like `<section>`, you could still just do `if (el.matches('section'))` or `if (el.tagName === 'section')`. But then you don't get the benefits of type-narrowing, auto-completion, and typo-prevention. To that end: did you notice the typo in the `el.tagName` check two sentences ago? Should have been `if (el.tagName === 'SECTION')`!

## API

### elIs

▸ **elIs**<`E`, `T`\>(`el`, `tagName`): `el` is `E` & { `tagName`: `T` }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `HTMLElement` \| `Element` \| `SVGElement` \| `MathMLElement` |
| `T` | extends `Uppercase<keyof HTMLElementTagNameMap \| keyof HTMLElementDeprecatedTagNameMap>` \| keyof `SVGElementTagNameMap` \| keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `E` |
| `tagName` | `T` |

#### Returns

`el` is `E` & { `tagName`: `T` }

<!-- markdownlint-disable-next-line MD053 -->
[build-img]:https://github.com/MichaelAllenWarner/el-is/actions/workflows/release.yml/badge.svg
<!-- markdownlint-disable-next-line MD053 -->
[build-url]:https://github.com/MichaelAllenWarner/el-is/actions/workflows/release.yml
<!-- markdownlint-disable-next-line MD053 -->
[downloads-img]:https://img.shields.io/npm/dt/typescript-npm-package-template
<!-- markdownlint-disable-next-line MD053 -->
[downloads-url]:https://www.npmtrends.com/typescript-npm-package-template
<!-- markdownlint-disable-next-line MD053 -->
[npm-img]:https://img.shields.io/npm/v/typescript-npm-package-template
<!-- markdownlint-disable-next-line MD053 -->
[npm-url]:https://www.npmjs.com/package/typescript-npm-package-template
<!-- markdownlint-disable-next-line MD053 -->
[issues-img]:https://img.shields.io/github/issues/MichaelAllenWarner/el-is
<!-- markdownlint-disable-next-line MD053 -->
[issues-url]:https://github.com/MichaelAllenWarner/el-is/issues
<!-- markdownlint-disable-next-line MD053 -->
[codecov-img]:https://codecov.io/gh/MichaelAllenWarner/el-is/branch/main/graph/badge.svg
<!-- markdownlint-disable-next-line MD053 -->
[codecov-url]:https://codecov.io/gh/MichaelAllenWarner/el-is
<!-- markdownlint-disable-next-line MD053 -->
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
<!-- markdownlint-disable-next-line MD053 -->
[semantic-release-url]:https://github.com/semantic-release/semantic-release
<!-- markdownlint-disable-next-line MD053 -->
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
<!-- markdownlint-disable-next-line MD053 -->
[commitizen-url]:http://commitizen.github.io/cz-cli/
