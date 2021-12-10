import React from "react";
import APIScan from "./api";
import { Home } from "./home";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import { render } from "enzyme";

describe("Api APIScan Test", () => {

    test("Api APIScan.fetchAPIScan", () => {
        jest.spyOn(React, "useEffect").mockImplementation((f) => f());
        jest.spyOn(APIScan, "fetchAPIScan");
        render(<Home />);
      
        expect(APIScan.fetchAPIScan).toHaveBeenCalled();
        expect(APIScan.fetchAPIScan).toHaveBeenCalledTimes(1);
        expect(APIScan.fetchAPIScan).toHaveBeenCalledWith("http://swapi.dev/api/people");
      });

})


