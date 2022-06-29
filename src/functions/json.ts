/**
 * Converts the given value to a JSON string by using `JSON.stringify`.
 *
 * Prevents accidentally calling `JSON.stringify` with more than one argument.
 * @param value the value to convert
 * @category JSON
 */
export const jsonStringify = (value: any): string => JSON.stringify(value);

/**
 * Parses the given string to a JSON value by using `JSON.parse`.
 *
 * Prevents accidentally calling `JSON.parse` with more than one argument.
 * @param jsonString the string to parse
 * @category JSON
 */
export const jsonParse = (jsonString: string): any => JSON.parse(jsonString);
