import React, { useEffect, useState } from "react";
import { quoteType } from "./types/QuoteType";
import "./App.css";
import { getRandomQuery } from "./utils/api/QueryApi";
import RandomService from "./components/RandomService";
import QuotePopup from "./components/QuotePopup";
import { Notification } from "./components/Notifications/Notification";
import { exit } from "process";

function App() {
  const [quote, setQuote] = useState("");
  const [isFly, setIsFly] = useState(false);
  const [isInvis, setIsInvis] = useState(true);
  const [isExit, setIsExit] = useState(false);

  const changeInvis = () => {
    setIsInvis(!isInvis);
  };

  const changeFly = () => {
    setIsFly(false);
  };

  const changeExit = () => {
    setIsExit(!isExit);
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
    <>
      {isExit && (
        <Notification
          message="Цитата добавлена"
          notType="SUCCESS"
          close={changeExit}
        />
      )}
      <div className="App">
        <QuotePopup
          changeInvis={changeInvis}
          isInvis={isInvis}
          getNotif={changeExit}
        />
        <RandomService
          changeInvis={changeInvis}
          changeFly={changeFly}
          isFly={isFly}
          clickHandler={clickHandler}
          quote={quote}
        />
      </div>
    </>
  );
}

export default App;
