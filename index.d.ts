export type MaybePromise<T = any> = PromiseLike<T> | T

export type Fn<R = void, P extends any[] = any[]> = (...args: P) => R

export type AsyncFn<R = void, P extends any[] = any[]> = (...args: P) => Promise<R>

export type MaybeFunction<T, P extends any[] = any[]> = T | Fn<T, P>

export type MaybeFn<T, P extends any[] = any[]> = MaybeFunction<T,P>

export type MaybeAsyncFunction<T, P extends any[] = any[],Promised extends boolean = T extends Fn ? false : true> = Promised extends true ? MaybeFunction<MaybePromise<T>, P> : Fn<MaybePromise<T>, P>

export type MaybeArray<T> = T | T[]

export type Numeric = number | BigInt

export type MaybeNumeric<T = string> = T | Numeric

export type MaybeDate = Date | string | number

export type MaybeRegex = RegExp | string

export type MaybeFalsy = false | null | undefined | "" | 0 | void

export type UnwrapPromise <T> = T extends PromiseLike<infer U> ? U : T

export type UnwrapFunction <T> = T extends Fn<infer U> ? U : T

export type UnwrapAsyncFunction <T> = T extends MaybeAsyncFunction<infer U> ? U : T

