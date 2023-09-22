import { useState, useContext } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { nanoid } from "nanoid";
import DataContext from "../context/dataContext";

export const FirstSteps = () => {
  const { questions } = useContext(DataContext);

  //state per mostrare/nascondere la risposta della domanda
  const [isOpen, setIsOpen] = useState({
    whatIs: false,
    benefits: false,
    gettingStarted: false,
    types: false,
    wanderingMind: false,
  });

  const questionElements = questions.map((question) => (
    <div key={question.id} id={question.id}>
      <h3>{question.title}</h3>
      {isOpen[question.id] ? (
        <FaCaretUp id={question.id} />
      ) : (
        <FaCaretDown id={question.id} />
      )}
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

  const handleClick = (e) => {
    let section = e.target.parentElement.id;
    console.log(section);

    if (isOpen.hasOwnProperty(section)) {
      setIsOpen((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    }
  };

  return <div onClick={handleClick}>{questionElements}</div>;
};
