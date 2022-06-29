import { filter, Observable, OperatorFunction, Subject } from 'rxjs';

export type ObservableMapEvent<K, V> =
  | {
      name: 'set';
      args: [key: K, value: V];
      result?: never;
    }
  | {
      name: 'delete';
      args: [key: K];
      result: boolean;
    }
  | {
      name: 'has';
      args: [key: K];
      result: boolean;
    }
  | {
      name: 'get';
      args: [key: K];
      result: V | undefined;
    };

export interface ObservableMapEmits<K, V> {
  map: ObservableMap<K, V>;
  event: ObservableMapEvent<K, V>;
}

export interface ObservableMapEmitsFiltered<
  K,
  V,
  E extends 'set' | 'delete' | 'has' | 'get'
> {
  map: ObservableMap<K, V>;
  event: Extract<ObservableMapEvent<K, V>, { name: E }>;
}

export interface ObservableMapEmitsIgnored<
  K,
  V,
  E extends 'set' | 'delete' | 'has' | 'get'
> {
  map: ObservableMap<K, V>;
  event: Extract<
    ObservableMapEvent<K, V>,
    { name: Exclude<'set' | 'delete' | 'has' | 'get', E> }
  >;
}

export class ObservableMap<K, V> extends Map<K, V> {
  readonly [Symbol.toStringTag] = 'ObservableMap';
  static filterEvents<E extends 'set' | 'delete' | 'has' | 'get', K, V>(
    ...eventNames: E[]
  ): OperatorFunction<
    ObservableMapEmits<K, V>,
    ObservableMapEmitsFiltered<K, V, E>
  > {
    return filter((emitted: ObservableMapEmits<K, V>) =>
      eventNames.includes(emitted.event.name as E)
    ) as any;
  }

  static ignoreEvents<E extends 'set' | 'delete' | 'has' | 'get', K, V>(
    ...eventNames: E[]
  ): OperatorFunction<
    ObservableMapEmits<K, V>,
    ObservableMapEmitsIgnored<K, V, E>
  > {
    return filter(
      (emitted: ObservableMapEmits<K, V>) =>
        !eventNames.includes(emitted.event.name as E)
    ) as any;
  }

  private readonly _subject$ = new Subject<ObservableMapEmits<K, V>>();
  private readonly _asObservable$ = this._subject$.asObservable();

  protected notify(
    event: 'set',
    args: [key: K, value: V],
    result?: never
  ): void;
  protected notify(event: 'delete', args: [key: K], result: boolean): void;
  protected notify(event: 'get', args: [key: K], result: V | undefined): void;
  protected notify(event: 'has', args: [key: K], result: boolean): void;
  protected notify(
    event: 'set' | 'delete' | 'get' | 'has',
    args: any,
    result: any
  ) {
    this._subject$.next({
      map: this,
      event: {
        name: event,
        args,
        result,
      },
    });
  }

  delete(key: K): boolean {
    const result = super.delete(key);
    this.notify('delete', [key], result);
    return result;
  }

  set(key: K, value: V): this {
    super.set(key, value);
    this.notify('set', [key, value]);
    return this;
  }

  get(key: K): V | undefined {
    const result = super.get(key);
    this.notify('get', [key], result);
    return result;
  }

  has(key: K): boolean {
    const result = super.has(key);
    this.notify('has', [key], result);
    return result;
  }

  asObservable(): Observable<ObservableMapEmits<K, V>> {
    // FIXME: mem leak?
    return this._asObservable$;
  }

  complete() {
    this._subject$.complete();
  }
}
