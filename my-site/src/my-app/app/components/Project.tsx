import "../globals.css";
// okay well i want to have link to readme, link to project if it exists, li and definitely a dscription, name and wimportant languages or skills i learned form it
//be a box shape fr.

interface ProjectProps {
  projName: string;
  link: string;
  desc: string;
  skills: string;
}

function Project({ projName, link, desc, skills }: ProjectProps) {
    return (
        <a href={link} target="_blank" className="project-card">
            <h1 style={{fontWeight: 'bold'}}>{projName}</h1>
            <h2>{desc}</h2>
            <h2 style={{color:"gray"}}>{skills}</h2>  
        </a>
    );
};

export default Project;