import { expectTypeOf, it } from "vitest";
import type { Fn, MaybeAsyncFunction, MaybeFn, MaybeFunction, UnwrapAsyncFunction } from "..";
import { createSingletonPromise } from "./fixtures/promise";

it("should typecheck Function", () => {
  const fn = (a: number) => a;
  expectTypeOf<Fn<number, [number]>>(fn);
  expectTypeOf<MaybeFunction<number, [number]>>(fn);
  expectTypeOf<MaybeFunction<number, [number]>>(1);

  expectTypeOf<MaybeFn<number, [number]>>(fn);
  expectTypeOf<MaybeFn<number, [number]>>(1);
});

it("should typecheck MaybeAsyncFunction", () => {
  expectTypeOf<MaybeAsyncFunction<number, [number]>>(1);
  expectTypeOf<MaybeAsyncFunction<number, [number]>>(Promise.resolve(1));

  expectTypeOf<MaybeAsyncFunction<number, [number]>>(a => a);

  const asyncFn = async (a: number) => a;

  expectTypeOf<UnwrapAsyncFunction<typeof asyncFn>>(1);

  const promiseFn = createSingletonPromise(async (a: number) => a);
  expectTypeOf<() => Promise<number>>(promiseFn);
});
