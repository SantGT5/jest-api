import React from "react";
import { APIScan, INICIAL_STATE } from "./api";

export const Home = () => {
  const [state, setState] = React.useState(INICIAL_STATE);

  React.useEffect(() => {
    APIScan.fetchAPIScan("http://swapi.dev/api/people").then((res) => {
      delete res.previous;
      setState(res);
    });
  }, []);

  const handleClick = () => {
    setState(INICIAL_STATE);
  };

  console.log("orignal -> ", state);

  return (
    <div>
      <button type="button" onClick={handleClick}>
        hola
      </button>
    </div>
  );
};
