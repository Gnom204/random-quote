import React, { useState } from "react";
import { create, createQuery } from "../utils/api/QueryApi";

type Props = {
  isInvis: boolean;
  changeInvis: () => void;
};

export default function QuotePopup({ isInvis, changeInvis }: Props) {
  const [newQuery, setNewQuery] = useState("");
  function postQuery() {
    createQuery(newQuery)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setNewQuery("");
    changeInvis();
  }
  return (
    <>
      <div className={isInvis ? "popup-invis" : "quote-popup"}>
        <div className="quote-popup_closing">
          <div onClick={changeInvis} className="popup__close"></div>
          <p className="quote-popup__desc">Введите сюда любую цитатку</p>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              postQuery();
              console.log(newQuery);
            }}
          >
            <input
              placeholder="Сюда писать"
              value={newQuery}
              onChange={(e) => {
                console.log(e.target.value);
                setNewQuery(e.target.value);
              }}
              name="queryInput"
              className="quote-popup__input"
            />
          </form>
          <button
            onClick={() => {
              changeInvis();
              postQuery();
            }}
            type="submit"
            className="random__button random__button_orange"
          >
            Добавить
          </button>
        </div>
      </div>
      <div
        onClick={changeInvis}
        className={isInvis ? "popup-invis" : "popup-container"}
      ></div>
    </>
  );
}
