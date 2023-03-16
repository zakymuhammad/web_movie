// parent component
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import "./style/landingPage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
  return (
    <div>
      {/* intro section start */}
      <div className="myBG text-white">
        <Navigationbar />
        <Intro />
      </div>
      {/* intro section end */}

      {/* trending section start */}
      <div className="trending">
        <Trending />
      </div>
      {/* trending section end */}

      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
