import React from "react";
import { shallow } from "enzyme";
import NavBar from "../navbar/NavBar";
import { findByTestAttr } from "../Utils";

const setUp = (props = {}) => {
  const component = shallow(<NavBar {...props} />);
  return component;
};

describe("NavBar Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    const wrapper = findByTestAttr(component, "navComponent");
    expect(wrapper.length).toBe(1);
  });
});
