import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, withStyles, Switch } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Header from "./components/header/Header";
import Definitions from "./components/definitions/Definitions";

function App() {

  // State Management
  const [category, setCategory] = useState("en");
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [lightmode, setLightmode] = useState(false);

  // Use dictionaryAPI if the values for category and or word change
  useEffect(() => {
    dictionaryAPI();
  }, [category, word]);

  // Material UI Component for switching between Light / Dark Mode
  const ThemeSwitcher = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  // Fetch meanings from dictionaryAPI
  const dictionaryAPI = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: lightmode ? "#fff" : "#282c34",
        color: lightmode ? "black" : "white",
        height: "100vh",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{lightmode ? "Dark" : "Light"}</span>
          <ThemeSwitcher
            checked={lightmode}
            onChange={() => setLightmode(!lightmode)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightmode={lightmode}
        />
        {meanings && (
          <Definitions
            word={word}
            category={category}
            meanings={meanings}
            lightmode={lightmode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
