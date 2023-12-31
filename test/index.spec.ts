import { elIs } from '../src';

const svg: { [K in keyof SVGElementTagNameMap]: K } = {
  a: 'a',
  animate: 'animate',
  animateMotion: 'animateMotion',
  animateTransform: 'animateTransform',
  circle: 'circle',
  clipPath: 'clipPath',
  defs: 'defs',
  desc: 'desc',
  ellipse: 'ellipse',
  feBlend: 'feBlend',
  feColorMatrix: 'feColorMatrix',
  feComponentTransfer: 'feComponentTransfer',
  feComposite: 'feComposite',
  feConvolveMatrix: 'feConvolveMatrix',
  feDiffuseLighting: 'feDiffuseLighting',
  feDisplacementMap: 'feDisplacementMap',
  feDistantLight: 'feDistantLight',
  feDropShadow: 'feDropShadow',
  feFlood: 'feFlood',
  feFuncA: 'feFuncA',
  feFuncB: 'feFuncB',
  feFuncG: 'feFuncG',
  feFuncR: 'feFuncR',
  feGaussianBlur: 'feGaussianBlur',
  feImage: 'feImage',
  feMerge: 'feMerge',
  feMergeNode: 'feMergeNode',
  feMorphology: 'feMorphology',
  feOffset: 'feOffset',
  fePointLight: 'fePointLight',
  feSpecularLighting: 'feSpecularLighting',
  feSpotLight: 'feSpotLight',
  feTile: 'feTile',
  feTurbulence: 'feTurbulence',
  filter: 'filter',
  foreignObject: 'foreignObject',
  g: 'g',
  image: 'image',
  line: 'line',
  linearGradient: 'linearGradient',
  marker: 'marker',
  mask: 'mask',
  metadata: 'metadata',
  mpath: 'mpath',
  path: 'path',
  pattern: 'pattern',
  polygon: 'polygon',
  polyline: 'polyline',
  radialGradient: 'radialGradient',
  rect: 'rect',
  script: 'script',
  set: 'set',
  stop: 'stop',
  style: 'style',
  svg: 'svg',
  switch: 'switch',
  symbol: 'symbol',
  text: 'text',
  textPath: 'textPath',
  title: 'title',
  tspan: 'tspan',
  use: 'use',
  view: 'view',
};

const html: {
  [K in
    | keyof HTMLElementTagNameMap
    | keyof HTMLElementDeprecatedTagNameMap]: Uppercase<K>;
} = {
  object: 'OBJECT',
  a: 'A',
  abbr: 'ABBR',
  address: 'ADDRESS',
  area: 'AREA',
  article: 'ARTICLE',
  aside: 'ASIDE',
  audio: 'AUDIO',
  b: 'B',
  base: 'BASE',
  bdi: 'BDI',
  bdo: 'BDO',
  blockquote: 'BLOCKQUOTE',
  body: 'BODY',
  br: 'BR',
  button: 'BUTTON',
  canvas: 'CANVAS',
  caption: 'CAPTION',
  cite: 'CITE',
  code: 'CODE',
  col: 'COL',
  colgroup: 'COLGROUP',
  data: 'DATA',
  datalist: 'DATALIST',
  dd: 'DD',
  del: 'DEL',
  details: 'DETAILS',
  dfn: 'DFN',
  dialog: 'DIALOG',
  div: 'DIV',
  dl: 'DL',
  dt: 'DT',
  em: 'EM',
  embed: 'EMBED',
  fieldset: 'FIELDSET',
  figcaption: 'FIGCAPTION',
  figure: 'FIGURE',
  footer: 'FOOTER',
  form: 'FORM',
  h1: 'H1',
  h2: 'H2',
  h3: 'H3',
  h4: 'H4',
  h5: 'H5',
  h6: 'H6',
  head: 'HEAD',
  header: 'HEADER',
  hgroup: 'HGROUP',
  hr: 'HR',
  html: 'HTML',
  i: 'I',
  iframe: 'IFRAME',
  img: 'IMG',
  input: 'INPUT',
  ins: 'INS',
  kbd: 'KBD',
  label: 'LABEL',
  legend: 'LEGEND',
  li: 'LI',
  link: 'LINK',
  main: 'MAIN',
  map: 'MAP',
  mark: 'MARK',
  menu: 'MENU',
  meta: 'META',
  meter: 'METER',
  nav: 'NAV',
  noscript: 'NOSCRIPT',
  ol: 'OL',
  optgroup: 'OPTGROUP',
  option: 'OPTION',
  output: 'OUTPUT',
  p: 'P',
  picture: 'PICTURE',
  pre: 'PRE',
  progress: 'PROGRESS',
  q: 'Q',
  rp: 'RP',
  rt: 'RT',
  ruby: 'RUBY',
  s: 'S',
  samp: 'SAMP',
  script: 'SCRIPT',
  search: 'SEARCH',
  section: 'SECTION',
  select: 'SELECT',
  slot: 'SLOT',
  small: 'SMALL',
  source: 'SOURCE',
  span: 'SPAN',
  strong: 'STRONG',
  style: 'STYLE',
  sub: 'SUB',
  summary: 'SUMMARY',
  sup: 'SUP',
  table: 'TABLE',
  tbody: 'TBODY',
  td: 'TD',
  template: 'TEMPLATE',
  textarea: 'TEXTAREA',
  tfoot: 'TFOOT',
  th: 'TH',
  thead: 'THEAD',
  time: 'TIME',
  title: 'TITLE',
  tr: 'TR',
  track: 'TRACK',
  u: 'U',
  ul: 'UL',
  var: 'VAR',
  video: 'VIDEO',
  wbr: 'WBR',
  acronym: 'ACRONYM',
  applet: 'APPLET',
  basefont: 'BASEFONT',
  bgsound: 'BGSOUND',
  big: 'BIG',
  blink: 'BLINK',
  center: 'CENTER',
  dir: 'DIR',
  font: 'FONT',
  frame: 'FRAME',
  frameset: 'FRAMESET',
  isindex: 'ISINDEX',
  keygen: 'KEYGEN',
  listing: 'LISTING',
  marquee: 'MARQUEE',
  menuitem: 'MENUITEM',
  multicol: 'MULTICOL',
  nextid: 'NEXTID',
  nobr: 'NOBR',
  noembed: 'NOEMBED',
  noframes: 'NOFRAMES',
  param: 'PARAM',
  plaintext: 'PLAINTEXT',
  rb: 'RB',
  rtc: 'RTC',
  spacer: 'SPACER',
  strike: 'STRIKE',
  tt: 'TT',
  xmp: 'XMP',
};

const math: { [K in keyof MathMLElementTagNameMap]: K } = {
  annotation: 'annotation',
  'annotation-xml': 'annotation-xml',
  maction: 'maction',
  math: 'math',
  merror: 'merror',
  mfrac: 'mfrac',
  mi: 'mi',
  mmultiscripts: 'mmultiscripts',
  mn: 'mn',
  mo: 'mo',
  mover: 'mover',
  mpadded: 'mpadded',
  mphantom: 'mphantom',
  mprescripts: 'mprescripts',
  mroot: 'mroot',
  mrow: 'mrow',
  ms: 'ms',
  mspace: 'mspace',
  msqrt: 'msqrt',
  mstyle: 'mstyle',
  msub: 'msub',
  msubsup: 'msubsup',
  msup: 'msup',
  mtable: 'mtable',
  mtd: 'mtd',
  mtext: 'mtext',
  mtr: 'mtr',
  munder: 'munder',
  munderover: 'munderover',
  semantics: 'semantics',
};

describe('index', () => {
  describe('elIs(el, tagName)', () => {
    for (const key in html) {
      const tagName =
        html[
          key as
            | keyof HTMLElementTagNameMap
            | keyof HTMLElementDeprecatedTagNameMap
        ];
      const el = document.createElement(key);
      const result = elIs(el, tagName);
      it(`should return \`true\` when \`el\` is \`<${key}>\` (an \`HTMLElement\`) and \`tagName\` is \`'${tagName}'\``, () => {
        expect(result).toBe(true);
      });
    }

    for (const key in svg) {
      const tagName = svg[key as keyof SVGElementTagNameMap];
      const el = document.createElementNS('http://www.w3.org/2000/svg', key);
      const result = elIs(el, tagName);
      it(`should return \`true\` when \`el\` is \`<${key}>\` (an \`SVGElement\`) and \`tagName\` is \`'${tagName}'\``, () => {
        expect(result).toBe(true);
      });
    }

    for (const key in math) {
      const tagName = math[key as keyof MathMLElementTagNameMap];
      const el = document.createElementNS(
        'http://www.w3.org/1998/Math/MathML',
        key
      );
      const result = elIs(el, tagName);
      it(`should return \`true\` when \`el\` is \`<${key}>\` (a \`MathMLElement\`) and \`tagName\` is \`'${tagName}'\``, () => {
        expect(result).toBe(true);
      });
    }

    it('should return `false` when `el.tagName !== tagName`', () => {
      const result = elIs(document.createElement('div'), 'SPAN');
      expect(result).toBe(false);
    });

    it('should return `false` when `el === null`', () => {
      const nullEl = document.querySelector('div');
      expect(nullEl).toBe(null);
      const result = elIs(nullEl, 'DIV');
      expect(result).toBe(false);
    });
  });
});
