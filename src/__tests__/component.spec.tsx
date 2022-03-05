import * as React from "react";
import { What } from "..";
import * as renderer from "react-test-renderer";

test("Component should show 'red' text 'Hello World'", () => {
  const component = renderer.create(<What text="World" />);
  const testInstance = component.root;

  expect(testInstance.findByType(What).props).toBe("World");

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
