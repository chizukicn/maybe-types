# maybe-types

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]
[![JSDocs][jsdocs-src]][jsdocs-href]

A collection of types for `Maybe` in TypeScript.

## Usage

Install package:

```sh
# npm
npm install maybe-types

# yarn
yarn add maybe-types

# pnpm
pnpm install maybe-types
```

Import:

```ts
import type { MaybePromise } from "maybe-types";

async function fn(arg: string): MaybePromise<string> {
  if (arg === "foo") {
    return "bar";
  }
  return Promise.resolve("baz");
}

async function getPromise(): Promise<string> {
  return promise = await fn("foo");
}
```

## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm test`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/maybe-types?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/maybe-types
[npm-downloads-src]: https://img.shields.io/npm/dm/maybe-types?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/maybe-types
[codecov-src]: https://img.shields.io/codecov/c/gh/chizukicn/maybe-types/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/chizukicn/maybe-types
[bundle-src]: https://img.shields.io/bundlephobia/minzip/maybe-types?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=maybe-types
[license-src]: https://img.shields.io/github/license/chizukicn/maybe-types.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/chizukicn/maybe-types/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsDocs.io-reference-18181B?style=flat&colorA=18181B&colorB=F0DB4F
[jsdocs-href]: https://www.jsdocs.io/package/maybe-types
