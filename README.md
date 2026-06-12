# Option

> Nano-sized type-safe option utility for nullable operations.

## Description

A lightweight, zero-dependency utility designed for high-performance applications. It provides a robust, type-safe, and functional way to handle operations that may or may not return a value, replacing the need for risky `null` or `undefined` checks. It is ideal for data lookups, optional configuration, or any scenario where you need explicit and predictable handling of absence without the overhead of heavy external libraries.

## Features

* **Zero-Dependency**: Extremely lightweight design for minimal footprint.
* **Type-Safe**: Uses TypeScript generics and type guards to eliminate runtime errors associated with nullability.
* **Functional Approach**: Promotes a declarative style, making code flows more predictable and easier to debug.

## Getting Started

### Prerequisites

* [Deno 1.40 or higher](https://deno.land/)

### Installation

```bash
deno add @prodbysolivan/option

```

## Quick Usage

```typescript
import { isSome, none, Option, some } from "@prodbysolivan/option";

function findUser(id: number): Option<string> {
  if (id === 0) return none();
  return some("Ramses");
}

const user = findUser(0);

if (isSome(user)) {
  console.log(`User found: ${user.value}`);
} else {
  console.error("User not found.");
}
```

## Documentation & Help

### Troubleshooting

* **Type Errors**: If you encounter type errors, ensure your `ValueType` is correctly defined in your function signatures. This utility relies on type guards (`isSome`, `isNone`) to narrow down types, ensuring you always handle the absence of a value safely before accessing the contained data.

---

## Authors

* **Solivan** ([@solivan](https://github.com/prodbysolivan))

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Acknowledgments

* [Deno Documentation](https://docs.deno.com/)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/)
