import React from "react";
import renderer from "react-test-renderer";
import Link from "../react/Link";

describe("snapshot test", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Link href="http://www.facebook.com" label="Facebook"></Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("property matchers", () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      createdAt: new Date(),
      name: "test user",
    };

    expect(user).toMatchSnapshot({
      createdAt: expect.any(Date),
      id: expect.any(Number)
    });
  })
});
