import React, { useState } from "react";

const UtilityAbout = (props) => {
  const [panelOneOpen, setPanelOneOpen] = useState(true);
  const [panelTwoOpen, setPanelTwoOpen] = useState(false);
  const [panelThreeOpen, setPanelThreeOpen] = useState(false);

  const togglePanelOne = () => {
    setPanelOneOpen(!panelOneOpen);
  };

  const togglePanelTwo = () => {
    setPanelTwoOpen(!panelTwoOpen);
  };

  const togglePanelThree = () => {
    setPanelThreeOpen(!panelThreeOpen);
  };

  return (
    <div className="container">
      <h1 className="my-3">{props.aboutText}</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className={`accordion-button ${panelOneOpen ? "" : "collapsed"}`}
              type="button"
              onClick={togglePanelOne}
              aria-expanded={panelOneOpen}
              aria-controls="panelsStayOpen-collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className={`accordion-collapse collapse ${panelOneOpen ? "show" : ""}`}
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <em>
                TextTract gives you a way to analyze your text quickly and
                efficiently. Be it word count, character count, case conversion
                of your text, removal of spaces and special characters and many
                more.
              </em>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className={`accordion-button ${panelTwoOpen ? "" : "collapsed"}`}
              type="button"
              onClick={togglePanelTwo}
              aria-expanded={panelTwoOpen}
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <strong>Usage is totally free!</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className={`accordion-collapse collapse ${panelTwoOpen ? "show" : ""}`}
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <em>
                TextTract is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                TextUtils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </em>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className={`accordion-button ${panelThreeOpen ? "" : "collapsed"}`}
              type="button"
              onClick={togglePanelThree}
              aria-expanded={panelThreeOpen}
              aria-controls="panelsStayOpen-collapseThree"
            >
              <strong>Compatibility</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className={`accordion-collapse collapse ${panelThreeOpen ? "show" : ""}`}
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <em>
                This utility software works in any web browsers such as Chrome,
                Firefox, Internet Explorer, Safari, Opera
              </em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityAbout;
