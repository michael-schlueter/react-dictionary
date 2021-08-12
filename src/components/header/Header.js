import {
  ThemeProvider,
  TextField,
  createTheme,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../../data/category";

export default function Header({
  category,
  setCategory,
  word,
  setWord,
  lightmode,
}) {
  // Material UI Dark Theme
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightmode ? "#000" : "#fff",
      },
      type: lightmode ? "light" : "dark",
    },
  });

  // Event Handler for selecting a language
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        {/* Material UI Theme Provider Component */}
        <ThemeProvider theme={darkTheme}>
          {/* Material UI TextField Component */}
          <TextField
            className="search"
            id="standard-basic"
            label="Search a word"
            value={word}
            // Event Handler for committing a search
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select"
            id="standard-select-currency"
            select
            label="Select"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {categories.map((option) => (
              // Material UI MenuItem Component
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}
