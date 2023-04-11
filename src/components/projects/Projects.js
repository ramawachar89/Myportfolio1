import React from 'react'
import Title from '../layouts/Title'
import { projectOne,  doc,twitter,online,weather,validation } from "../../assets/index";
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
          title="Gym Gladiator "
          des="A typical gym website is a comprehensive online resource that provides information on a gym's facilities, services, pricing, and memberships."
          src={projectOne}
          gitHubLink='https://github.com/ramawachar89/Group-5-Project1-'
        />
        <ProjectsCard
          title="Twitter Clone"
          des="As part of a programming course, I developed a Twitter clone application that emulates many of the core features of the popular social media platform. Users can create accounts, post tweets, follow other users, and interact with content through likes, retweets, and comments."
          src={twitter}
          gitHubLink='https://github.com/ramawachar89/project3-phase4'


        />
        <ProjectsCard
          title="Online-Compiler"
          des="In these projects, simply create a new file or open an existing one. You can choose from a variety of languages and file types, including HTML, CSS, JavaScript. Once you've created or opened a file, you can start editing right away.you also save your code in files."
          src={online}
          gitHubLink=' https://github.com/ramawachar89/project04-online-editor-'
        />
        <ProjectsCard
          title="Google-Doc Clone"
          des="Built a Google Docs clone using React Js for real-time document creation, editing, and collaboration, with a focus on performance optimization and user experience."
          src={doc}
          gitHubLink='https://github.com/ramawachar89/project5-googledoc'
        />
        <ProjectsCard
          title="Weather App"
          des="In my weather app project, I used HTML, CSS, and JavaScript frameworks such as React to build engaging and interactive user interfaces. I also have experience with APIs such as OpenWeatherMap and Weatherstack to fetch weather data."
          src={weather}
        />
        <ProjectsCard
          title="Validation Forms"
          des="In these project i am creating simple sign in and sign up form with all the validation.i am creating these project by the help React Js CSS HTML5 and Javascript"
          src={validation}
          gitHubLink='https://github.com/ramawachar89/project0001/tree/finalproject'
        />
       
      </div>
    </section>
  );
}

export default Projects