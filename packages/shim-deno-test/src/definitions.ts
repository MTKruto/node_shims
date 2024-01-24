import type { TestDefinition } from "./deno.types.gen.ts";

/** Reference to the array that `Deno.test` calls insert their definition into. */
export const testDefinitions: TestDefinition[] = [];
