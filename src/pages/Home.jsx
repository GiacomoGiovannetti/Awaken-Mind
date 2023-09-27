import meditatingGuy from "../assets/images/meditating-guy.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PathContext from "../context/pathContext";

export const Home = () => {
  const { updateNav } = useContext(PathContext);
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="mt-5 text-4xl font-semibold ">Awaken Mind</h1>
      <h3 className="mt-2 mx-2 text-xl text-center">
        Tame your mind and taste the joy of liberation
      </h3>
      <div className="flex flex-col items-center mt-5">
        <div
          className="flex flex-col items-center"
          onClick={() => {
            updateNav(window.location.pathname);
          }}
        >
          <button
            className="home-button"
            onClick={() => navigate("/custom-meditations")}
          >
            Custom Meditations
          </button>
          <button
            className="home-button"
            onClick={() => navigate("/guided-meditations")}
          >
            Guided Meditations
          </button>
          <button
            className="home-button"
            onClick={() => navigate("/first-steps")}
          >
            First Steps
          </button>
        </div>
        <img
          src={meditatingGuy}
          alt="meditating-guy"
          className="h-72 object-contain mt-4"
        ></img>
      </div>
    </section>
  );
};
