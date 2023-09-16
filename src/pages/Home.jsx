import meditatingGuy from "../assets/meditating-guy.jpg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PathContext from "../context";

export const Home = () => {
  const { updateNav } = useContext(PathContext);
  const navigate = useNavigate();

  return (
    <section>
      <h1>Nome App</h1>
      <h3>Slogan</h3>
      <div>
        <img
          src={meditatingGuy}
          alt="meditating-guy"
          className="w-1/2 h-1/3"
        ></img>
        <div
          onClick={() => {
            updateNav(window.location.pathname);
          }}
        >
          <button onClick={() => navigate("/custom-meditations")}>
            Custom meditations
          </button>
          <button onClick={() => navigate("/guided-meditations")}>
            Guided Meditations
          </button>
          <button onClick={() => navigate("/first-steps")}>First Steps</button>
        </div>
      </div>
    </section>
  );
};
