import React from 'react';
import ReactImg from "../assets/react.png";
import mongo from "../assets/mongodb.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import Bootstrap from "../assets/Bootstrap.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import aws from "../assets/aws.png";
import heroku from "../assets/heroku.png";
import netlify from "../assets/netlify.png";
import git from "../assets/git.png";
import mysql from "../assets/mysql.png";

const SkillCard = ({ src, name }) => (
  <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[100px] bg-gray-900 shadow-lg hover:shadow-white  rounded-xl flex flex-col items-center justify-center">
    <img src={src} alt={`${name} Logo`} className="w-10 h-10 lg:w-12 lg:h-12 mb-1 object-contain" />
    <span className="text-white text-sm text-center">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <div id="skills" className="bg-black ">
      <div className="container mx-auto">
        <button className="text-red-800 text-4xl font-bold mx-auto block">
          SKILLS
        </button>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 px-4 lg:px-10 xl:px-40">
          <SkillCard src={mongo} name="MongoDB" />
          <SkillCard src={ReactImg} name="React" />
          <SkillCard src={express} name="Express" />
          <SkillCard src={node} name="Node.js" />
          <SkillCard src={Bootstrap} name="Bootstrap" />
          <SkillCard src={tailwind} name="Tailwind" />
          <SkillCard src={figma} name="Figma" />
          <SkillCard src={js} name="JavaScript" />
          <SkillCard src={html} name="HTML" />
          <SkillCard src={css} name="CSS" />
          <SkillCard src={aws} name="AWS" />
          <SkillCard src={heroku} name="Heroku" />
          <SkillCard src={netlify} name="Netlify" />
          <SkillCard src={git} name="Git" />
          <SkillCard src={mysql} name="MySQL" />
        </div>
      </div>
    </div>
  );
};

export default Skills;