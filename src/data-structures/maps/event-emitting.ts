export class EventEmittingMap<K, V> extends Map<K, V> {
  readonly [Symbol.toStringTag] = 'EventEmittingMap';
  protected listeners = {
    get: [] as Array<(...args: any[]) => void>,
    has: [] as Array<(...args: any[]) => void>,
    set: [] as Array<(...args: any[]) => void>,
    delete: [] as Array<(...args: any[]) => void>,
  };

  /**
   *
   * @param key
   * @event 'get'
   */
  get(key: K): V | undefined {
    const result = super.get(key);
    for (const cb of this.listeners.get) {
      cb(key, result);
    }
    return result;
  }

  /**
   *
   * @param key
   * @event 'has'
   */
  has(key: K): boolean {
    const result = super.has(key);
    for (const cb of this.listeners.has) {
      cb(key, result);
    }
    return result;
  }

  /**
   *
   * @param key
   * @event 'delete'
   */
  delete(key: K): boolean {
    const result = super.delete(key);
    for (const cb of this.listeners.delete) {
      cb(key, result);
    }
    return result;
  }

  /**
   *
   * @param key
   * @param value
   * @event 'set' emits the `'set'` event
   */
  set(key: K, value: V): this {
    super.set(key, value);
    for (const cb of this.listeners.set) {
      cb(key, value);
    }
    return this;
  }

  /**
   * Returns an array listing the events for which the Map has registered listeners.
   */
  eventNames(): Array<'set' | 'delete' | 'has' | 'get'> {
    const result = [] as any[];
    if (this.listeners.set.length !== 0) {
      result.push('set');
    } else if (this.listeners.delete.length !== 0) {
      result.push('delete');
    } else if (this.listeners.get.length !== 0) {
      result.push('get');
    } else if (this.listeners.has.length !== 0) {
      result.push('has');
    }
    return result as any;
  }

  listenerCount(event?: 'set' | 'delete' | 'get' | 'has'): number {
    if (event == null) {
      return (
        this.listeners.set.length +
        this.listeners.delete.length +
        this.listeners.get.length +
        this.listeners.has.length
      );
    } else {
      return this.listeners[event].length;
    }
  }

  addListener(
    event: 'set',
    callback: (key: K, value: V) => void,
    once?: boolean
  ): this;
  addListener(
    event: 'delete',
    callback: (key: K, result: boolean) => void,
    once?: boolean
  ): this;
  addListener(
    event: 'get',
    callback: (key: K, result: V | undefined) => void,
    once?: boolean
  ): this;
  addListener(
    event: 'has',
    callback: (key: K, result: boolean) => void,
    once?: boolean
  ): this;
  addListener(
    event: 'set' | 'delete' | 'get' | 'has',
    callback: (...args: any[]) => void,
    once = false
  ): this {
    if (once) {
      const listener = (...args: any[]) => {
        callback(...(args as any[]));
        this.removeListener(event as any, listener);
      };
      this.listeners[event].push(listener);
    } else {
      this.listeners[event].push(callback);
    }
    return this;
  }

  prependListener(
    event: 'set',
    callback: (key: K, value: V) => void,
    once?: boolean
  ): this;
  prependListener(
    event: 'delete',
    callback: (key: K, result: boolean) => void,
    once?: boolean
  ): this;
  prependListener(
    event: 'get',
    callback: (key: K, result: V | undefined) => void,
    once?: boolean
  ): this;
  prependListener(
    event: 'has',
    callback: (key: K, result: boolean) => void,
    once?: boolean
  ): this;
  prependListener(
    event: 'set' | 'delete' | 'get' | 'has',
    callback: (...args: any[]) => void,
    once = false
  ): this {
    if (once) {
      const listener = (...args: any[]) => {
        callback(...(args as any[]));
        this.removeListener(event as any, listener);
      };
      this.listeners[event].unshift(listener);
    } else {
      this.listeners[event].unshift(callback);
    }
    return this;
  }

  removeListener(event: 'set', callback: (key: K, value: V) => void): boolean;
  removeListener(
    event: 'delete',
    callback: (key: K, result: boolean) => void
  ): boolean;
  removeListener(
    event: 'has',
    callback: (key: K, result: boolean) => void
  ): boolean;
  removeListener(
    event: 'get',
    callback: (key: K, result: V | undefined) => void
  ): boolean;
  removeListener(
    event: 'set' | 'delete' | 'has' | 'get',
    callback: (...args: any[]) => void
  ): boolean {
    const index = this.listeners[event].indexOf(callback);
    const hasListener = index !== -1;
    if (hasListener) {
      this.listeners[event].splice(index, 1);
    }
    return hasListener;
  }

  removeAllListeners(event?: 'set' | 'delete' | 'get' | 'has'): boolean {
    let deletedSome = false;
    if (event == null || event === 'set') {
      deletedSome = this.listeners.set.length !== 0;
      this.listeners.set = [];
    }
    if (event == null || event === 'delete') {
      deletedSome ||= this.listeners.delete.length !== 0;
      this.listeners.delete = [];
    }
    if (event == null || event === 'get') {
      deletedSome ||= this.listeners.get.length !== 0;
      this.listeners.get = [];
    }
    if (event == null || event === 'has') {
      deletedSome ||= this.listeners.has.length !== 0;
      this.listeners.has = [];
    }
    return deletedSome;
  }
}
