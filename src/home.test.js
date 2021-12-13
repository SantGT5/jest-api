import React from "react";
import { APIScan } from "./api";
import { Home } from "./home";
import { act, renderHook } from "@testing-library/react-hooks";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import { render, shallow } from "enzyme";

describe("Api APIScan Test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("Api APIScan.fetchAPIScan", () => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    jest.spyOn(APIScan, "fetchAPIScan");
    render(<Home />);
    expect(APIScan.fetchAPIScan).toHaveBeenCalled();
    expect(APIScan.fetchAPIScan).toHaveBeenCalledTimes(1);
  });
});
