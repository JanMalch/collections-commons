export type ValueOfNestedMaps<V> = V extends Map<any, infer NV>
  ? ValueOfNestedMaps<NV>
  : V;

export type KeysOfNestedMaps<K, V> = V extends Map<infer NK, infer NV>
  ? [K, ...KeysOfNestedMaps<NK, NV>]
  : [K];
