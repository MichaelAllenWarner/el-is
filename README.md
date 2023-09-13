# el-is

- [el-is](#el-is)
  - [Install](#install)
  - [Usage](#usage)
  - [Usage Notes](#usage-notes)
  - [API](#api)
    - [elIs](#elis)
      - [Type parameters](#type-parameters)
      - [Parameters](#parameters)
      - [Returns](#returns)

## Install

```bash
npm install @michaelallenwarner/el-is
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

const element = document.querySelector('.svg-path-element'); // `Element | null`
if (element && elIs(element, 'path')) {
  // `element` now has type `Element & { tagName: 'path' }`
  /*
    But probably just do `if (element instanceof SVGPathElement)` instead!

    Also, although `Element` will work as a type for the first parameter,
    it's better to narrow it first to `HTMLElement`, `MathMLElement`, or `SVGElement`.

    See Usage Notes below.
  */
}
```

## Usage Notes

The `elIs()` function takes a DOM element (`el`) and a string-literal (`tagName`) and returns the `boolean` result of a simple `el.tagName === tagName` check, but with some TypeScript niceties described below.

But first, a quick warning: _**you probably should only use this function if the element-type you're checking against doesn't have its own dedicated interface!**_ For example, if you want to check whether `el` is a link, I can't think of any reason not to just do `if (el instanceof HTMLAnchorElement)`, so that the type-narrowing gives you all the properties and methods that come with the more specific interface (like `HTMLAnchorElement.href`). The `elIs()` function is really for checking against element-types that _don't_ have their own interfaces, like `<section>`.

With that out of the way, here are the TypeScript niceties you get with the `elIs()` function:

- In the `true` case, the function's type-predicate narrows the type of `el` by intersecting its input-type with `{ tagName: T }`, where `T` is the string-literal type provided as the `tagName` argument.
- To prevent you from making typos (and to enable autocomplete), the `tagName` parameter is restricted to valid tag-name values for built-in elements of the `Element`-subtype that `el` is an instance of (if applicable). The supported `Element`-subtypes are `HTMLElement`, `SVGElement`, and `MathMLElement`. For example, if `el` is an instance of `HTMLElement`, then `tagName` must be a string literal that's the value of the `tagName` property of a built-in HTML element. If `el` is an `Element` but not an instance of one of those subtypes, then `tagName` is still restricted, but less so: it must be a string literal that's the value of the `tagName` property of a built-in HTML element, SVG element, or MathML element. (It's best if `el` is more specific than `Element`, though, so that you don't have to worry about confusing uppercase HTML tag-names like `'A'` with lowercase SVG or MathML tag-names like `'a'`.)

If you don't use `elIs()`, you can just do something like `if (el.matches('section'))` or `if (el.tagName === 'section')` instead. But then you don't get the type-narrowing, the autocomplete, or the typo-prevention, and you'll probably make the mistake I just made in the previous sentence (should be `if (el.tagName === 'SECTION')`).

A few more notes:

- Because of the aforementioned `tagName` restrictions, this function won't work with custom elements.
- Although `SVGElement` is a supported `Element`-subtype here, it's worth noting that, at the time of writing, every kind of SVG element has its own dedicated interface (like `SVGPathElement`), so you probably want to reach for `instanceof` when checking against it.
- Deprecated HTML elements are supported (e.g., if `el` is an `HTMLElement` or `Element`, then `tagName` can be `'MARQUEE'`).

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
