# maybe-types

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]
[![JSDocs][jsdocs-src]][jsdocs-href]

A collection of types for `Maybe` in TypeScript.

## Types

### Core Types

- **`MaybePromise<T>`** - Represents a value that may or may not be a promise. Useful for functions that can return either synchronous or asynchronous values.
- **`UnwrapPromise<T>`** - Extracts the inner type from a Promise, returning the unwrapped type if it's a promise, otherwise returns the original type.

### Function Types

- **`Fn<R, P>`** - A function type with return type `R` and parameters `P` (defaults to any).
- **`AsyncFn<R, P>`** - An asynchronous function type with return type `R` and parameters `P`.
- **`MaybeFunction<T, P>`** - Represents either a value `T` or a function that returns `T` with parameters `P`.
- **`MaybeFn<T, P>`** - Alias for `MaybeFunction<T, P>`.
- **`MaybeAsyncFunction<T, P, Promised>`** - Represents either a value, a function returning a promise, or a function that may return synchronously or asynchronously based on the `Promised` flag.
- **`UnwrapFunction<T>`** - Extracts the return type from a function type.
- **`UnwrapAsyncFunction<T>`** - Extracts the return type from an async function or MaybeAsyncFunction type.

### Primitive & Collection Types

- **`MaybeArray<T>`** - Represents either a single value `T` or an array of `T`.
- **`MaybeNumeric<T>`** - Represents either a number, bigint, or the type `T` (defaults to string). Useful for numeric string conversions.
- **`Numeric`** - Union type of `number | bigint`.
- **`MaybeDate`** - Represents a Date object, a timestamp number, or a date string.
- **`MaybeRegex`** - Represents either a RegExp object or a regex pattern string.
- **`MaybeFalsy`** - Union of all falsy values: `false | null | undefined | "" | 0 | void`.

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
