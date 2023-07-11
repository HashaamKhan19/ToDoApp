import { describe, it, assert } from "vitest";

describe("Math.sqrt() test", () => {
  it("SQRT of 4", () => {
    assert.equal(Math.sqrt(4), 2);
  });

  it("SQRTof 144", () => {
    assert.equal(Math.sqrt(144), 12);
  });

  it("SQRT of 2", () => {
    assert.equal(Math.sqrt(2), Math.SQRT2);
  });
});
