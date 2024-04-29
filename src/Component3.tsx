import { useContext } from "react";
import { UserContext } from "./App";

const component3 = () => {
  const context = useContext(UserContext);
  return <div>{`component 3 count is ${context}`}</div>;
};

export default component3;
