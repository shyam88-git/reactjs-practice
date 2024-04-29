import { useEffect, useState } from "react";
// if you not use the useref the re-render the components.
const Example2 = () => {
  const [count, setCount] = useState<number | string>(0);
  useEffect(() => {
    //@ts-ignore
    setCount(count + 1);
  });
  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <h1>count is {count}</h1>
    </div>
  );
};

export default Example2;
