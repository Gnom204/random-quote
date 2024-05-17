import React, { useState } from "react";
import { create, createQuery } from "../utils/api/QueryApi";

type Props = {
  isInvis: boolean;
  changeInvis: () => void;
  getNotif: () => void;
};

export default function QuotePopup({ isInvis, changeInvis, getNotif }: Props) {
  const [newQuery, setNewQuery] = useState("");
  const [isValid, setIsValid] = useState(true);
  function postQuery() {
    if (!isValid) {
      return;
    }
    createQuery(newQuery)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    getNotif();
    setNewQuery("");
    changeInvis();
  }
  return (
    <>
      <div className={isInvis ? "popup-invis" : "quote-popup"}>
        <div className="quote-popup_closing">
          <div
            onClick={() => {
              setIsValid(true);
              setNewQuery("");
              changeInvis();
            }}
            className="popup__close"
          ></div>
          <div className="quote-popup__container">
            <p className="quote-popup__desc">Введите сюда любую цитатку</p>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                if (newQuery === "") {
                  setIsValid(false);
                } else {
                  postQuery();
                  setIsValid(true);
                }
              }}
            >
              <p className="error">{!isValid && "Пустота - это не цитата"}</p>
              <input
                placeholder="Сюда писать"
                value={newQuery}
                onChange={(e) => {
                  setNewQuery(e.target.value);
                  if (e.target.value === "") {
                    setIsValid(false);
                  } else {
                    setIsValid(true);
                  }
                }}
                name="queryInput"
                className="quote-popup__input"
              />
              <button
                type="submit"
                className="random__button_s random__button random__button_orange "
              >
                Добавить
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        onClick={changeInvis}
        className={isInvis ? "popup-invis" : "popup-container"}
      ></div>
    </>
  );
}
