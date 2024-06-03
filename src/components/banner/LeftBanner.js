import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Web Designer.", "Forntend Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY Portfolio</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Avimanu</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a Fornt-end Developer with coding and programming skills. I am fluet in more than 6 different programming languages. HTML, CSS/CSS3,SASS/SCSS, BOOTSTRAP5, Javascript, JQUERY, REACT.JS And PHP, MYSQL, OP, DBMS, OOPS,JAVA,DAS basic Knowledge
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner