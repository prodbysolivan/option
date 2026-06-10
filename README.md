# Option

Nano-sized type-safe option utility for nullable operations.

## Description

A lightweight, zero-dependency utility designed for high-performance
applications. It provides a robust, type-safe, and functional way to handle
operations that may or may not return a value, replacing the need for risky
`null` or `undefined` checks. It is ideal for data lookups, optional
configuration, or any scenario where you need explicit and predictable handling
of absence without the overhead of heavy external libraries.

### Dependencies

- Deno 1.40 or higher

### Installing

Add the package to your project directly via JSR:

```bash
deno add @prodbysolivan/option
```

### Quick Usage
Import the functions into your project:


```typescript
import { isSome, none, Option, some } from "@prodbysolivan/option";

// Function returning an optional value: a string if found, or none if not
function findUser(id: number): Option<string> {
  if (id === 0) return none(); // Returns an empty state
  return some("Ramses");       // Returns a container wrapping the found value
}

const user = findUser(0);

// Check if the container holds a value before accessing it
if (isSome(user)) {
  // In this block, the value is safe to use
  console.log(`User found: ${user.value}`);
} else {
  // Graceful handling of the case where no result was found
  console.error("User not found.");
}
```

## Help

If you encounter type errors, ensure your `ValueType` is correctly defined in
your function signatures. This utility relies on type guards (`isSome`,
`isNone`) to narrow down types, ensuring you always handle the absence of a
value safely before accessing the contained data.

## Authors

Solivan (prodbysolivan)

[@solivan](https://github.com/prodbysolivan)

## License

This project is licensed under the MIT License - see the LICENSE file for
details.

## Acknowledgments

- [Deno Documentation](https://docs.deno.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
