import { identity } from '../../functions';

export type TransformerOptions<Input, Output> =
  | {
      transform: (value: Input) => Output;
      isInput?: (value: any) => value is Input;
      isOutput?: (value: any) => value is Output;
    }
  | {
      transform: (value: Input) => Output;
      isInput?: (value: any) => value is Input;
      isOutput: (value: any) => value is Output;
    };

export class Transformer<Input, Output> {
  protected readonly transform: (value: Input) => Output;
  protected readonly isInput: (value: any) => value is Input;

  constructor(options: TransformerOptions<Input, Output>) {
    this.transform = options.transform;
    const { isInput, isOutput } = options;
    if (isInput != null) {
      this.isInput = isInput;
    } else if (isOutput != null) {
      this.isInput = (value: any): value is Input => !isOutput(value);
    } else {
      throw new Error(`isInput or isOutput must be defined.`);
    }
  }

  useOrTransform(value: Input | Output): Output {
    return this.isInput(value) ? this.transform(value) : value;
  }
}

class NoopTransformer extends Transformer<any, any> {
  constructor() {
    super({
      transform: identity,
      isInput: (value): value is any => true,
    });
  }

  useOrTransform(value: any): any {
    return value;
  }
}

export class TransformingMap<
  InputKey,
  ComputedKey,
  InputValue,
  ComputedValue = InputValue
> extends Map<ComputedKey, ComputedValue> {
  get [Symbol.toStringTag]() {
    return 'TransformingMap';
  }

  protected readonly keyTransformer: Transformer<InputKey, ComputedKey>;
  protected readonly valueTransformer: Transformer<InputValue, ComputedValue>;

  constructor(transformers: {
    key?: TransformerOptions<InputKey, ComputedKey>;
    value?: TransformerOptions<InputValue, ComputedValue>;
  }) {
    super();
    this.keyTransformer =
      transformers.key != null
        ? new Transformer<InputKey, ComputedKey>(transformers.key)
        : new NoopTransformer();
    this.valueTransformer =
      transformers.value != null
        ? new Transformer<InputValue, ComputedValue>(transformers.value)
        : new NoopTransformer();
  }

  get(key: InputKey | ComputedKey): ComputedValue | undefined {
    return super.get(this.keyTransformer.useOrTransform(key)) as
      | ComputedValue
      | undefined;
  }

  has(key: InputKey | ComputedKey): boolean {
    return super.has(this.keyTransformer.useOrTransform(key));
  }

  delete(key: InputKey | ComputedKey): boolean {
    return super.delete(this.keyTransformer.useOrTransform(key));
  }

  set(key: InputKey | ComputedKey, value: InputValue | ComputedValue): this {
    return super.set(
      this.keyTransformer.useOrTransform(key),
      this.valueTransformer.useOrTransform(value)
    );
  }
}
