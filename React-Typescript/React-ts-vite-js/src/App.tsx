import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

interface IHeadings {
  a: string;
  b: string;
  c: string;
}

const App: React.FC = () => {
  const [headings, setHeadings] = useState<IHeadings>({
    a: "Hello World",
    b: "Hello Universe",
    c: "Hello Galaxy",
  });
  const { a, b, c } = headings;

  return (
    <>
      <Header heading={a} />
      <Header heading={b} />
      <Header heading={c} />
    </>
  );
};

export default App;
