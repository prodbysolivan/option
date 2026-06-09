import { assertEquals } from "@std/assert";
import { isNone, isSome, none, type Option, some } from "../source/option.ts";

Deno.test("option should identify a Some state correctly", () => {
  const option: Option<string> = some("Data found");

  if (isSome(option)) {
    assertEquals(option.value, "Data found");
  } else {
    throw new Error("Expected Some, but got None");
  }
});

Deno.test("option should identify a None state correctly", () => {
  const option: Option<string> = none();

  if (isNone(option)) {
    assertEquals(option.type, "None");
  } else {
    throw new Error("Expected None, but got Some");
  }
});

Deno.test("option should work with complex types", () => {
  interface User {
    id: number;
    name: string;
  }

  const option: Option<User> = some({ id: 1, name: "Ramses" });

  if (isSome(option)) {
    assertEquals(option.value.name, "Ramses");
  } else {
    throw new Error("Expected Some, but got None");
  }
});

Deno.test("option should work with numbers", () => {
  const option: Option<number> = some(42);

  if (isSome(option)) {
    assertEquals(option.value, 42);
  }
});
