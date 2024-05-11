import React from "react";

type Props = {
  quote: string;
  isFly: boolean;
  changeFly: () => void;
};

export default function Quote({ quote, isFly, changeFly }: Props) {
  return (
    <div className="quote">
      <span
        onAnimationEnd={changeFly}
        className={isFly ? "quote__fly-text" : "quote__text"}
      >
        {quote}
      </span>
    </div>
  );
}
