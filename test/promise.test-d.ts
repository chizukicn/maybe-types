import { expectTypeOf, it } from "vitest";
import type { MaybePromise, UnwrapPromise } from "..";

it("should typecheck MaybePromise", () => {
  expectTypeOf<MaybePromise<number>>(Promise.resolve(1));

  expectTypeOf<MaybePromise<number>>(1);

  expectTypeOf<MaybePromise<Promise<number>>>(1);

  expectTypeOf<UnwrapPromise<MaybePromise<number>>>(1);
});

