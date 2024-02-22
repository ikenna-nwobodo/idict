import "./App.css";
// import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";

function App() {
  return (
    <div className="relative min-h-screen bg-black bg-gradient-to-tr from-black via-black to-[#930000]/50 text-white w-full flex flex-col items-center">
      <Nav />
      <div className="flex flex-col w-full min-h-max items-center justify-center">
        <Home />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
