import React from "react";
import renderer from "react-test-renderer";
import Link from "../react/Link";

it("renders correctly", () => {
  const tree = renderer
    .create(<Link href="http://www.facebook.com" label="Facebook"></Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
