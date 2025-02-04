import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaViber } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript, SiGit, SiWhatsapp, SiGithub } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaViber />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiWhatsapp />
            </span>
            <span className="bannerIcon">
              <SiGithub/>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media