import "./App.css";
import Home from "./components/home/Home";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Home />
    </div>
  );
}

export default App;
