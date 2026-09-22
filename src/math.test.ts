import assert from "node:assert";
import test, { describe } from "node:test";
import { sum } from "./math.ts";

describe("sum", () => {
    test("returns correct value", () => {
        const result = sum(12, 23);
        assert.strictEqual(result, 35);
    });
});
