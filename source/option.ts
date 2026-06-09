/**
 * Represents the presence of a value.
 */
type Some<ValueType> = {
  readonly type: "Some";
  readonly value: ValueType;
};

/**
 * Represents the absence of a value.
 */
type None = {
  readonly type: "None";
};

/**
 * Option type representing a value that may or may not exist.
 * It is either a Some containing a value or a None.
 */
export type Option<ValueType> = Some<ValueType> | None;

/**
 * Creates a Some option containing the provided value.
 * @param value The value to wrap in a Some option.
 */
export const some = <ValueType>(value: ValueType): Some<ValueType> => ({
  type: "Some",
  value,
});

/**
 * Creates a None option.
 */
export const none = (): None => ({
  type: "None",
});

/**
 * Type guard that checks if an Option is a Some.
 * @param option The Option to check.
 * @returns True if the option is a Some, false otherwise.
 */
export const isSome = <ValueType>(
  option: Option<ValueType>,
): option is Some<ValueType> => option.type === "Some";

/**
 * Type guard that checks if an Option is a None.
 * @param option The Option to check.
 * @returns True if the option is a None, false otherwise.
 */
export const isNone = <ValueType>(option: Option<ValueType>): option is None =>
  option.type === "None";
