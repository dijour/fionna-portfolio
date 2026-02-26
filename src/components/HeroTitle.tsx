import { Fragment } from "react";

export function HeroTitle({ text }: { text: string }) {
  const words = text.split(" ");
  let globalIndex = 0;

  return (
    <>
      {words.map((word, wordIndex) => {
        const chars = word.split("").map((char) => {
          const i = globalIndex++;
          return (
            <span
              key={i}
              className="inline-block"
              style={{ clipPath: "inset(-15% -5% 0% -5%)" }}
            >
              <span
                className="hero-letter inline-block"
                style={{ animationDelay: `${i * 0.055}s` }}
              >
                {char}
              </span>
            </span>
          );
        });

        return (
          <Fragment key={wordIndex}>
            {wordIndex > 0 && " "}
            <span className="inline-block">{chars}</span>
          </Fragment>
        );
      })}
    </>
  );
}
