export type MaybePromise<T = any> = Promise<Awaited<T>> | Awaited<T>

export type Fn<R = void, P extends any[] = any[]> = (...args: P) => R

export type MaybeFunction<T, P extends any[] = any[]> = T | Fn<T, P>

export type MaybeFn<T, P extends any[] = any[]> = MaybeFunction<T,P>

export type MaybeAsyncFunction<T, P extends any[] = any[],Promised extends boolean = T extends Fn ? false : true> = Promised extends true ? MaybeFunction<MaybePromise<T>, P> : Fn<MaybePromise<T>, P>

export type MaybeArray<T> = T | T[]

export type MaybeNumber<T = string> = T | number

export type Num = MaybeNumber<string>

export type MaybeDate = Date | string | number

export type MaybeRegex = RegExp | string

export type MaybeFalsy = false | null | undefined | "" | 0 | void

export type UnwrapPromise <T> = T extends Promise<infer U> ? U : T

export type UnwrapFunction <T> = T extends Fn<infer U> ? U : T

export type UnwrapAsyncFunction <T> = T extends MaybeAsyncFunction<infer U> ? U : T

