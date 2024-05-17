import React from "react";
import Quote from "./Quote";

type Props = {
  quote: string;
  clickHandler: () => void;
  changeFly: () => void;
  isFly: boolean;
  changeInvis: () => void;
};

export default function RandomService({
  isFly,
  changeFly,
  quote,
  clickHandler,
  changeInvis,
}: Props) {
  return (
    <div className="random">
      <Quote changeFly={changeFly} isFly={isFly} quote={quote} />
      <div className="random__container">
        <button onClick={clickHandler} className="random__button">
          Получить цитату
        </button>
        <button
          onClick={changeInvis}
          className="random__button random__button_orange"
        >
          Добавить цитату
        </button>
      </div>
    </div>
  );
}
