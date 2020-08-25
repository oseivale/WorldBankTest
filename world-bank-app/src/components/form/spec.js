import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";
import { findByTestAttr } from "../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Form {...props} />);
  return component;
};

describe("Form Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    const wrapper = findByTestAttr(component, "formComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render 5 text input fields", () => {
    const wrapper = findByTestAttr(component, "formInput");
    expect(wrapper.length).toBe(5);
  });
});
