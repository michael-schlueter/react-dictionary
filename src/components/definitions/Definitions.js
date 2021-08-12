import React from "react";
import "./Definitions.css";

export default function Definitions({ category, word, meanings, lightmode }) {
  return (
    <div className="meanings">
      {/* Render audio element if it exists, the language is english and a search has been initiated */}
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          controls
        >
          Your browser does not support the audio element
        </audio>
      )}
      {/* Render different subtitles depending on if a search has been initialized or not */}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: lightmode ? "#3b5360" : "white",
                  color: lightmode ? "white" : "black",
                }}
              >
                {/* Render definitions / synonyms when they can be provided by the API */}
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "white", width: "100%" }}></hr>
                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
}
