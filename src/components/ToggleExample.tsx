"use client";

import { useState } from "react";

export const ToggleExample = () => {
  const [on, setOn] = useState(false);

  const handleClick = () => {
    setOn((o) => !o);
  };

  return (
    <>
      <p>State: {on ? "On" : "off"}</p>
      <button onClick={handleClick}>Toggle It</button>
    </>
  );
};
