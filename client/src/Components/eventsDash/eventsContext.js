import React, { createContext, useState } from "react";
export const State = createContext();

const Context = (props) => {
  const [searchQuery, setSearchQuery] = useState(null);
  return (
    <State.Provider value={{ searchQuery, setSearchQuery }}>
      {props.children}
    </State.Provider>
  );
};

export default Context;
