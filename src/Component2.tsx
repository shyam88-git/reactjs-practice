import Component3 from "./Component3";

interface PropsI {
  count: number;
}

const component2 = () => {
  return (
    <div>
      <h1>Count is 2</h1>
      <Component3 />
    </div>
  );
};

export default component2;
