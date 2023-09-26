import { useState, useContext } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { nanoid } from "nanoid";

import DataContext from "../context/dataContext";

export const FirstSteps = () => {
  const { questions } = useContext(DataContext);

  const [isOpen, setIsOpen] = useState({
    whatIs: false,
    benefits: false,
    gettingStarted: false,
    types: false,
    wanderingMind: false,
  });

  const [prevOpen, setPrevOpen] = useState("");

  //funzione per generare le card con le domande che al click mostrano la risposta
  const questionElements = questions.map((question) => (
    <div key={question.id}>
      <div className="flex flex-row items-center" id={question.id}>
        <h3>{question.title}</h3>
        {isOpen[question.id] ? (
          <FaCaretUp id={question.id} />
        ) : (
          <FaCaretDown id={question.id} />
        )}
      </div>
      {isOpen[question.id] && (
        <div id={question.id}>
          <p>{question.answerIntro}</p>
          {question.bulletList && (
            <ul id={question.id}>
              {question.bulletList.map((bulletPoint) => (
                <li key={nanoid()}>{bulletPoint}</li>
              ))}
            </ul>
          )}
          {question.answerOutro && <p>{question.answerOutro}</p>}
        </div>
      )}
    </div>
  ));

  //funzione per mostrare la risposta e nascondere quella della domanda precedente
  const showAnswer = (e) => {
    let section =
      e.target.tagName === "DIV" ? e.target.id : e.target.parentElement.id;
    console.log(e.target.tagName, section);
    if (e.target.tagName !== "P" && e.target.tagName !== "LI") {
      setIsOpen((prev) => ({
        ...prev,
        [section]: !prev[section],
        [prevOpen]: !prev[prevOpen],
      }));
      setPrevOpen(section);
    }
  };

  return <div onClick={showAnswer}>{questionElements}</div>;
};
