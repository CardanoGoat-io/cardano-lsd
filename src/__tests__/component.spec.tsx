import * as React from "react";
import HelloComponent from "..";
import * as renderer from "react-test-renderer";

test("Component should show 'red' text 'Hello World'", () => {
  const component = renderer.create(<HelloComponent text="World" />);
  const testInstance = component.root;

  expect(testInstance.findByType(HelloComponent).props.text).toBe("World");

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
