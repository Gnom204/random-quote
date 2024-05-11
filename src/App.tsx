import React, { useEffect, useState } from "react";
import { quoteType } from "./types/QuoteType";
import "./App.css";
import { getRandomQuery } from "./utils/api/QueryApi";
import RandomService from "./components/RandomService";
import QuotePopup from "./components/QuotePopup";

function App() {
  const [quote, setQuote] = useState("");
  const [isFly, setIsFly] = useState(false);
  const [isInvis, setIsInvis] = useState(true);

  const changeInvis = () => {
    setIsInvis(!isInvis);
  };

  const changeFly = () => {
    setIsFly(false);
  };

  const clickHandler = () => {
    renderQuote();
  };

  const renderQuote = () => {
    getRandomQuery().then((res) => {
      setQuote(res);
      console.log(res);
      setIsFly(true);
    });
    setIsFly(false);
  };

  useEffect(() => {
    renderQuote();
  }, []);

  return (
    <div className="App">
      <QuotePopup changeInvis={changeInvis} isInvis={isInvis} />
      <RandomService
        changeInvis={changeInvis}
        changeFly={changeFly}
        isFly={isFly}
        clickHandler={clickHandler}
        quote={quote}
      />
    </div>
  );
}

export default App;
