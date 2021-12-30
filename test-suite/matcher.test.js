import { add } from "../functions";

describe("Test matcher", function () {
  // toBe
  describe("ToBe", function () {
    it("test case 1.1", () => {
      const result = add(2, 3);
      expect(result).toBe(5);
    });

    it("test case 1.2", () => {
      const str = "string";
      expect(str).toBe("string");
    });

    it("test case 1.3", () => {
      const str = true;
      expect(str).toBe(true);
    });
  });

  // toBeCloseTo
  it("toBeCloseTo", () => {
    // đúng nếu giống 2 chứ số sau dấu phẩy
    const str = 6.134;
    expect(str).toBeCloseTo(6.1354);
  });

  // toEqual
  it("ToEqual", () => {
    const foo = [1, 2, 3];
    const bar = [1, 2, 3];
    expect(foo).toEqual(bar);
  });

  // before and after each test case (only in this describe)
  beforeEach(function () {
    console.log("Code called before each test");
  });
  afterEach(function () {
    console.log("Code called after each test");
  });
});
