import { add } from "../functions";

describe("Common matcher", function () {
  // toBe
  describe("ToBe test suite", function () {
    it("test case 1.1", () => {
      const result = add(2, 3);
      expect(result).toBe(5);
    });

    it("test case 1.2", () => {
      const str = "string";
      expect(str).not.toBe("string1");
    });

    it("test case 1.3", () => {
      const str = true;
      expect(str).toBe(true);
    });
  });

  // toEqual
  it("ToEqual", () => {
    const foo = [1, 2, 3];
    const bar = [1, 2, 3];
    expect(foo).toEqual(bar);
  });

  // toBeCloseTo
  it("toBeCloseTo", () => {
    // đúng nếu giống 2 chứ số sau dấu phẩy
    const str = 6.134;
    expect(str).toBeCloseTo(6.1354);
  });
});

describe("Demo before, after ", function () {
  // demo before, after
  test("test 1", () => {
    // console.log("Test 1");
  });

  test("test 2", () => {
    // console.log("Test 2");
  });

  // before and after all test case (only in this describe)
  beforeAll(function () {
    // console.log("Code called before all test");
  });

  afterAll(function () {
    // console.log("Code called before all test");
  });

  // before and after each test case (only in this describe)
  beforeEach(function () {
    // console.log("Code called before each test");
  });
  afterEach(function () {
    // console.log("Code called after each test");
  });
});

describe("Truthiness", function () {
  test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test("undefined", () => {
    const z = undefined;
    expect(z).not.toBeNull();
    // expect(z).toBeNull();
    expect(z).toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test("false", () => {
    const z = false;
    expect(z).not.toBeNull();
    // expect(z).toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
  });
});

describe("Numbers", function () {
  test("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test("adding floating point numbers", () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);
    expect(value).toBeCloseTo(0.3); // This works.
  });
});
