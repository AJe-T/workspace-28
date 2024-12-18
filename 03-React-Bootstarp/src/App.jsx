import "./App.css";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import FoodCard from "./components/FoodCard";

function App() {
  return (
    <>
      <div className="container mt-5">
        <FoodCard image={img1} heading={"Fruits"} />
        <FoodCard image={img2} heading={"Noodels"} />
        <FoodCard image={img3} heading={"Pan Cake"} />
      </div>
    </>
  );
}

export default App;
