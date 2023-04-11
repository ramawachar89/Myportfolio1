import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
       
        <Card
          title="App Development"
          des="Developed front-end user interfaces for several complex web applications with HTML, CSS, and JavaScript.
          •Utilized React frameworks to create interactive, responsive, and user-friendly web designs."
          icon={<AiFillAppstore />}
        />
        <Card
          title="UI/UX Design"
          des="•Created custom UI components and implemented layouts using HTML5, CSS3, and JavaScript.
          "
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="In these training i am deployed many projects.For hosting there is many platforms are available like netlify ,vercel etc
          Hosting a website involves storing and serving website content from a server so that it can be accessed by users over the internet. "
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features