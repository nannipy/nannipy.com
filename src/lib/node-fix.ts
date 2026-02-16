/**
 * This utility fixes a crash in Node.js v25.4.0 where a broken global `localStorage` 
 * object is present but missing the `getItem` method. 
 * Neutralizing it on the server prevents libraries like `next-themes` from crashing.
 */
if (typeof window === 'undefined') {
    const globalAny = global as any;
    if (globalAny.localStorage && !globalAny.localStorage.getItem) {
        Object.defineProperty(globalAny, 'localStorage', {
            value: undefined,
            configurable: true,
            enumerable: true,
            writable: true
        });
    }
}

export { };
