import type { MaybePromise, UnwrapPromise } from "..";
import { expectTypeOf, it } from "vitest";

it("should typecheck MaybePromise", () => {
  expectTypeOf<MaybePromise<number>>(Promise.resolve(1));

  expectTypeOf<MaybePromise<number>>(1);

  expectTypeOf<UnwrapPromise<MaybePromise<number>>>(1);
});
