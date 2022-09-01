export type MaybePromise<T = any> = T | Promise<T>

export type MaybeFunction<T> = T | ((...args: any[]) => T)

export type MaybeAsyncFunction<T> = MaybeFunction<MaybePromise<T>>

export type MaybeArray<T> = T | T[]

export type MaybeNumber<T = string> = T | number

export type MaybeDate = Date | string | number

export type MaybeRegex = RegExp | string

export type MaybeFalsy = false | null | undefined | "" | 0 | void
