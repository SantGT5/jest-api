import React from "react";
import APIScan from "./api";

export const Home = () => {
  const [state, setState] = React.useState();

  React.useEffect(() => {
    APIScan.fetchAPIScan("http://swapi.dev/api/people").then((res) => setState(res));
    
  }, []);

  return <h1>Hola</h1>;
};
