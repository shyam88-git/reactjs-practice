//it holds the mutable variable cause that doesnot re-render the components.

import React, { useEffect, useRef, useState } from "react";

const Example1 = () => {
  const [inputValues, setInputValues] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        value={inputValues}
        onChange={(e) => setInputValues(e.target.value)}
      />
      <h2>The Count is :{count.current} </h2>
    </div>
  );
};

export default Example1;
