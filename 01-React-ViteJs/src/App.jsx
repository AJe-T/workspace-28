import "./App.css";
import Header from "./components/Header.jsx";

function App() {
  let a = "Good Morning";
  let b = "Good Evening";
  let c = "Good Night";

  return (
    <>
      <div className="home">
        <Header heading={a} />
        <Header heading={b} />
        <Header heading={c} />
      </div>
    </>
  );
}

export default App;
