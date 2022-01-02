export const fetchMockData = (callback) => {
  setTimeout(() => callback("Phat trien web nang cao"), 1000);
};

export const getMockPromise = () => {
  let count = 0;

  while (count < 1000) {
    count++;
  }

  return Promise.resolve("hello world");
};

export const getMockPromiseRejected = () => {
  let count = 0;

  while (count < 1000) {
    count++;
  }

  return Promise.reject("hi")
};

export const add = (a, b) => {
  return a + b;
};
