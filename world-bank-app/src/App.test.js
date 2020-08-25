import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr } from "./Utils";

const setUp = (props = {}) => {
  const wrapper = shallow(<App {...props} />);

  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("Should render without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });
});
