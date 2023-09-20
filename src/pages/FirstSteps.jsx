import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const questions = [
  "what is meditation",
  "which are the benefits of meditating",
  "how to get started",
  "which are the different types of meditation",
  "what should i do if my mind wanders during meditation",
];

export const FirstSteps = () => {
  const [isOpen, setIsOpen] = useState({
    whatIs: false,
    whyStartPracticing: false,
    startDoing: false,
  });

  const handleClick = (e) => {
    let section = e.target.id;
    console.log(section);

    switch (section) {
      case "what-is":
        setIsOpen((prev) => ({ ...prev, whatIs: !prev.whatIs }));
        break;
      case "why-start":
        setIsOpen((prev) => ({
          ...prev,
          whyStartPracticing: !prev.whyStartPracticing,
        }));
        break;
      case "start-doing":
        setIsOpen((prev) => ({ ...prev, startDoing: !prev.startDoing }));
    }
  };
  return (
    <div onClick={handleClick}>
      <h1>Prova First Steps</h1>

      <div className="flex flex-row items-center relative">
        <h3 id="what-is">What Is Meditation </h3>
        {isOpen.whatIs ? <FaCaretUp /> : <FaCaretDown />}
      </div>

      <div className="flex flex-col items-center ">
        <h3 id="why-start">Why you should start practicing it</h3>
        {isOpen.whyStartPracticing ? <FaCaretUp /> : <FaCaretDown />}

        {isOpen.whyStartPracticing && (
          <div className="">
            <p>
              Lorem ipsum dolor sit amet. Nam praesentium molestias sit odit
              placeat sed vitae dignissimos ut repudiandae nesciunt? Qui
              delectus repudiandae a distinctio sint ea nesciunt eveniet sit
              obcaecati blanditiis in ipsum accusantium aut quia similique. Qui
              atque accusantium eos dolores ducimus vel nobis alias ea dolores
              doloribus non error fugiat et enim deleniti.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-row items-center relative">
        <h3 id="start-doing">How to start Meditating</h3>
        {isOpen.startDoing ? <FaCaretUp /> : <FaCaretDown />}
      </div>
    </div>
  );
};
