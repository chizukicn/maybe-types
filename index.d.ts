export type MaybePromise<T = any> = T | Promise<T>

export type Func<R = void, P extends any[] = any[]> = (...args: P) => R

export type MaybeFunction<T, P extends any[] = any[]> = T | Func<T, P>

export type MaybeAsyncFunction<T, Promised extends boolean = false, P extends any[] = any[]> = Promised extends true ? MaybeFunction<MaybePromise<T>, P> : Func<MaybePromise<T>, P>

export type MaybeArray<T> = T | T[]

export type MaybeNumber<T = string> = T | number

export type Num = MaybeNumber<string>

export type MaybeDate = Date | string | number

export type MaybeRegex = RegExp | string

export type MaybeFalsy = false | null | undefined | "" | 0 | void
