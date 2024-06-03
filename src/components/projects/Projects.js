import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="Social media are interactive technologies that facilitate the creation, sharing and aggregation of content, ideas, interests, and other forms of expression"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Ecommerce website design involves creating and launching a virtual store to sell products. We're not talking about listing your items on a third-party online"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting Design web"
          des=" Web Chat. Inspirational designs, illustrations, and graphic elements from the world's best designers. Want more inspiration? Browse our search results"
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects