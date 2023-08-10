import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./TextDataComponent.css";
import {
  convertToUpper,
  convertToLower,
  clearText,
  copyTextToClipboard,
  removeWhitespaceAndSpecialChars,
} from "./TextFunctions.js";

const UtilityTextData = () => {
  const [inputText, setInputText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const [hasNoInput, setHasNoInput] = useState(false);
  const [isCharacter,setIsCharacter]= useState(false);

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
    setHasNoInput(false);
    setCharacterCount(newText.length);
    setWordCount(
      newText
        .trim()
        .split(/\s+/)
        .filter((word) => word !== "").length
    );
    setIsInvalidInput(false);
    setIsCharacter(false); // Reset invalid input state
  };

  const handleConvertToUpper = () => {
    inputText ? setHasNoInput(false) : setHasNoInput(true);
    if (hasNumbersOrSpecialChars(inputText)) {
      setIsInvalidInput(true);
    } else {
      setIsInvalidInput(false);
      setInputText(convertToUpper(inputText));
    }
  };

 
  const handleConvertToLower = () => {
    inputText ? setHasNoInput(false) : setHasNoInput(true);
    if (hasNumbersOrSpecialChars(inputText)) {
      setIsInvalidInput(true);
    } else {
      setIsInvalidInput(false);
      setInputText(convertToLower(inputText));
    }
  };

  const handleClearText = () => {
    inputText ? setHasNoInput(false) : setHasNoInput(true);
    setInputText(clearText());
    setIsInvalidInput(false);
    setCharacterCount(0);
    setWordCount(0);
  };

  const handleCopyText = () => {
    inputText ? setHasNoInput(false) : setHasNoInput(true);
    copyTextToClipboard("AboutText");
  };

  const handleRemoveWhitespace = () => {
    inputText ? setHasNoInput(false) : setHasNoInput(true);
    if(inputText && !hasNumbersOrSpecialChars(inputText)){
      setIsCharacter(true);
     }

    const cleanedText = removeWhitespaceAndSpecialChars(inputText);
    setInputText(cleanedText);
    setCharacterCount(cleanedText.length);
    setWordCount(
      cleanedText
        .trim()
        .split(/\s+/)
        .filter((word) => word !== "").length
    );
    setIsInvalidInput(false);
  };

  const hasNumbersOrSpecialChars = (text) => {
    inputText ? setHasNoInput(false) : setHasNoInput(true);
    const pattern = /[^a-zA-Z\s]/;
    return pattern.test(text);
  };

  return (
    <>
      <Container>
        <div className="row text-center mb-5">
          <div className="col-md-12" id="Content1">
            <div className="AboutContainer">
              <h2 className="AboutHeading">
                Try TextTract - Enter the text to analyze
              </h2>
              <textarea
                id="AboutText"
                name="TextTract"
                rows="15"
                cols="120"
                value={inputText}
                onChange={handleInputChange}
              />
              <div id="AboutButtons">
                <button className="Button1" onClick={handleConvertToUpper}>
                  Convert to Upper Case
                </button>
                <button className="Button2" onClick={handleConvertToLower}>
                  Convert to Lower Case
                </button>
                <button className="Button3" onClick={handleClearText}>
                  Clear Text
                </button>
                <button className="Button4" onClick={handleCopyText}>
                  Copy Text
                </button>
                <button className="Button5" onClick={handleRemoveWhitespace}>
                  Remove Extra Whitespaces/Numbers/Special Characters
                </button>
              </div>
              <div>
                <p className="CharCount">Character Count: {characterCount}</p>
                <p className="WordCount">Word Count: {wordCount}</p>
                {isInvalidInput && (
                  <div className="InvalidMessage">
                    Invalid input: Numbers or special characters detected,change
                    your input
                  </div>
                )}
                {hasNoInput && (
                  <div className="InvalidMessage">
                    Invalid input: Enter something in the text box to use the
                    utility features.
                  </div>
                )}
                {isCharacter && (
                  <div className="InvalidMessage">
                    The entered input does not have any numbers or special character
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UtilityTextData;
