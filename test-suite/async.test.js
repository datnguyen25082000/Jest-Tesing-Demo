import { fetchMockData } from "../functions";

describe("suite 2", function () {
  test("test 2.1", () => {
    expect(2 + 3).toBe(5);
  });
});

describe("async test", () => {
  test("callback test", (done) => {
    function callback(data) {
      try {
        expect(data).toBe("Phat trien web nang cao")
        done();
      } catch (err) {
        done(err);
      }
    }

    fetchMockData(callback);
  });
});
