import {
  fetchMockData,
  getMockPromise,
  getMockPromiseRejected,
} from "../functions";

describe("async test", () => {
  test("callback test", (done) => {
    function callback(data) {
      console.log("callback function is called");

      try {
        expect(data).toBe("Phat trien web nang cao");
        done();
      } catch (err) {
        done(err);
      }
    }

    fetchMockData(callback);
    console.log("end of test function");
  });

  test("promise test", () => {
    return getMockPromise().then((data) => {
      expect(data).toBe("hello world");
    });
  });

  test("promise reject test", () => {
    return getMockPromiseRejected().then(
      () => {},
      (err) => {
        expect(err).toBe("hi");
      }
    );
  });

  test("async await test", async () => {
    const result = await getMockPromise()
    expect(result).toBe("hello world")
  });
});
