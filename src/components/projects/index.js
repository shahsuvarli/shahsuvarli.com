import projects from "../../utils/projects.json";
import Image from "next/image";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { BiHomeSmile, BiSlideshow } from "react-icons/bi";
import Link from "next/link";
import Card from "./card";

function ProjectsContainer() {
  return (
    <div className="flex flex-col items-center py-4 box-border px-4 gap-6">
      <Link href={"/"}>
        <BiHomeSmile color="#fff" size={40} />
      </Link>
      <div className="w-full flex justify-center gap-2 flex-wrap animation: animate-riseup rounded-md">
        {projects.map((project, index) => {
          return <Card project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default ProjectsContainer;
