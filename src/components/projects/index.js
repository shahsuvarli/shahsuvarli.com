import React from "react";
import projects from "../../utils/projects.json";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { BiHomeSmile, BiSlideshow } from "react-icons/bi";
import Link from "next/link";

function ProjectsContainer() {
  return (
    <div className="flex flex-col items-center py-20 box-border h-screen">
      <Link href={"/"}>
        <BiHomeSmile color="#fff" size={46} />
      </Link>
      <div className="mt-8 w-[90%] flex justify-center gap-6 flex-wrap animation: animate-riseup">
        {projects.map((project) => {
          const imagePath = project.image;
          return (
            <div
              key={project.id}
              className="flex flex-col items-center box-border gap-4 w-72"
            >
              <div className="relative w-72 h-72 bg-white flex justify-center items-center rounded-md shadow-md">
                <Image
                  priority
                  width={300}
                  height={300}
                  src={imagePath}
                  alt={project.name}
                  className="object-contain rounded-md"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-opacity-75 bg-gray-600 gap-5 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:border-opacity-100 hover:rounded-7 cursor-pointer rounded-md">
                  <Link href={project.githubLink} target="_blank">
                    <BsGithub
                      size={40}
                      color="#fff"
                      className="text-white text-2xl"
                    />
                  </Link>
                  <Link href={project.viewLink} target="_blank">
                    <BiSlideshow
                      size={40}
                      color="#fff"
                      className="text-white text-2xl"
                    />
                  </Link>
                </div>
              </div>
              <p className="text-base">{project.name}</p>
              <span className="flex flex-row flex-wrap gap-2 mt-2 mb-2 w-full items-center justify-center">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-slate-600 rounded-md px-2 py-1 hover:bg-slate-500 hover:cursor-pointer"
                  >
                    {tool}
                  </span>
                ))}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsContainer;
