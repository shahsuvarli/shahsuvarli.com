import Image from "next/image";
import Link from "next/link";
import { BiSlideshow } from "react-icons/bi";
import { BsGithub, BsYoutube } from "react-icons/bs";

export default function Card({ project }) {
  const size = 27;
  return (
    <div
      key={project.id}
      className="flex sm:flex-row flex-col items-center box-border gap-4 w-full border-solid border-[0.5px] border-white rounded-md min-h-48 p-3"
    >
      <div className="flex flex-col gap-2  border-[0.5px] pb-2">
        <div className="bg-white xs:w-60 sm:h-60 flex justify-center items-center border border-solid w-full">
          <Image
            priority
            width={200}
            height={200}
            src={project.image}
            alt={project.name}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-5 [&>*]:cursor-pointer hover:[&>*]:animate-bounce text-white">
          <Link href={project.github} target="_blank">
            <BsGithub size={size} />
          </Link>
          {project.view ? (
            <Link href={project.view} target="_blank">
              <BiSlideshow size={size} />
            </Link>
          ) : (
            ""
          )}
          {project.youtube ? (
            <Link href={project.youtube} target="_blank">
              <BsYoutube size={size} />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="h-full p-3 gap-2 flex flex-col w-full justify-between">
        <div className="flex flex-col gap-2">
          <span className="flex flex-row gap-4">
            <p className="text-xl text-slate-200">{project.name}</p>
            <span className="bg-white py-1 px-2 rounded-md text-black text-xs flex justify-center items-center hover:cursor-pointer max-h-8">
              {project.type}
            </span>
          </span>
          <span className="w-full flex flex-wrap flex-col whitespace-normal">
            <p className="text-slate-200 xs:text-base text-sm">
              {project.description}
            </p>
            <br />
            <ul className="list-disc list-inside mb-4">
              {project.funcs?.map((func) => (
                <li className="text-slate-300 text-sm xs:text-base" key={func}>
                  {func}
                </li>
              ))}
            </ul>
          </span>
        </div>
        <span className="flex flex-row flex-wrap gap-2 w-full items-end">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="bg-slate-100 text-black rounded-md px-2 py-1 hover:bg-black hover:border hover:border-solid hover:border-white hover:text-white hover:cursor-pointer text-xs transition-all border-solid border-white border"
            >
              {tool}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
