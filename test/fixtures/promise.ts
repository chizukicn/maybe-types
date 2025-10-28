import type { MaybeAsyncFunction } from "../..";

export interface SingletonPromiseReturn<T> {
  (): Promise<T>;
  /**
   * Reset current staled promise.
   * Await it to have proper shutdown.
   */
  reset: () => Promise<void>;
}

/**
 * Create singleton promise function
 * base on original work of @antfu/utils by Anthony Fu (MIT)
 * @category Promise
 * @see https://github.com/antfu/utils/blob/main/src/promise.ts
 */
export function createSingletonPromise<T, P extends any[] = any[]>(
  fn: MaybeAsyncFunction<T, P, false>
): SingletonPromiseReturn<T> {
  let _promise: Promise<T> | undefined;

  function wrapper(this: any, ...args: P) {
    if (!_promise) {
      _promise = Promise.resolve(fn.call(this, ...args));
    }
    return _promise;
  }

  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = undefined;
    if (_prev) {
      await _prev;
    }
  };

  return wrapper;
}
