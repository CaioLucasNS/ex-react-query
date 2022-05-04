import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [books, setBooks] = useState({
    name: "Learning React",
    author: "John Doe",
    SerialNumber: 1234,
  });

  return (
    <Context.Provider value={[books, setBooks]}>{children}</Context.Provider>
  );
};
