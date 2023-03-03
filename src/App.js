import logo from "./dogLogo.jpeg";
import "./App.css";
import { useState } from "react";

function App() {
  const dogHat =
    "https://raw.githubusercontent.com/northcoders/fe-tiny-apps-assets/main/dog-hat/dog-hat.jpeg?token=GHSAT0AAAAAAB4KPABGMTQPM5DVAHVNISUEY6RBRHQ";
  const dogWithoutHat =
    "https://raw.githubusercontent.com/northcoders/fe-tiny-apps-assets/main/dog-hat/dog-no-hat.jpg?token=GHSAT0AAAAAAB4KPABG5TZVH2IACRWJ6RAYY6RBR2Q";
  const [dogUrl, setDogUrl] = useState(dogWithoutHat);

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo">
          <Logo></Logo>
        </div>

        <div className="App-heading">
          <Heading></Heading>
        </div>

        <div className="App-dog-image">
          <DogImage dogUrl={dogUrl}></DogImage>
        </div>
      </div>
      <button
        onClick={() =>
          setDogUrl(dogUrl === dogWithoutHat ? dogHat : dogWithoutHat)
        }
      >
        Toggle Hat
      </button>
    </div>
  );
}

export default App;

const Heading = () => {
  return <h1>Dog-Hat-O-Matic</h1>;
};

const Logo = () => {
  return <img src={logo} alt="logo" className="App-logo" />;
};

const DogImage = (props) => {
  return <img src={props.dogUrl} className="dog-image" />;
};
