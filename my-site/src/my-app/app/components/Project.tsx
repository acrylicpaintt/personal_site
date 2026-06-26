import "../globals.css";
import Image from "next/image";
import { StaticImageData } from 'next/image';

interface ProjectProps {
  projName: string;
  link: string;
  desc: string;
  skills: string;
  image: StaticImageData;
}

function Project({ projName, link, desc, skills, image}: ProjectProps) {
    return (

        <a href={link} target="_blank" className="project-card">
            <div style={{ overflowY: "auto", maxHeight: "370px" }}>
            <Image style={{width: 300}} src={image} alt="Images"/>
            
                <h1 style={{ fontWeight: 'bold' }}>{projName}</h1>
                <h2>{desc}</h2>
                <h2 style={{ color: "gray" }}>{skills}</h2>
            </div>
        </a>
    );
};

export default Project;
