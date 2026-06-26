"use client"
import "../globals.css";
import Project from "../components/Project";

export default function ProjectPage() {
  return (
      <body>
        <div style = {{maxWidth: "80%", margin: "0 auto", padding: "30px"}} className="flex flex-col min-h-screen">
        <div className="section-header">
            <h1>Coding</h1>
            <hr />
        </div>
         <div className="projects-grid">
                <Project projName={"Dash"}
                    link = {"https://brown-dash.github.io/Dash-Documentation/about/" }
                    desc={"Work alongside Andy Van Dam in Visual Computing Lab, sponsored by Adobe. Used documents in context to support smoother user image generation catered for creatives."}
                    skills={"TypeScript, SCSS, JavaScript, HTML, UI Design, Research"}>
                </Project>
                <Project projName={"perennial"}
                    link = {"https://devpost.com/software/perennial-t62nhb" }
                    desc={"Won ActualFoods track at YHack 2026, works to combat endometriosis. Calculated AI-based pain score using Samsung ADK Watch. Created UI."}
                    skills={"Kotlin, Android Studio, Firebase, Machine Learning, App Dev"}>
                </Project>
                <Project projName={"Slackbot: summertime"}
                    link = {"https://github.com/acrylicpaintt/slack-bot" }
                    desc={"SlackBot running 24/7, hosted on Nest. Developed as part of the StarDance Hack Club challenge."}
                    skills={"Harry Potter API, Joke API, Cat Fact API, Node.JS, Slack Bolt"}>
                </Project>
                <Project projName={"Snake"}
                    link = {"https://github.com/acrylicpaintt/slack-bot" }
                    desc={"Developed as part of the StarDance Hack Club challenge."}
                    skills={"C/C++, Docker"}>
                </Project>
                <Project projName={"Personal Website"}
                    link = {"https://github.com/acrylicpaintt?tab=repositories" }
                    desc={"You're here right now!"}
                    skills={"UI Design, TypeScript"}>
                </Project>
                <Project projName={"YouthJapan Website"}
                    link = {"https://project-youth-japan.vercel.app/" }
                    desc={"Team project in Full Stack at Brown"}
                    skills={"Full Stack"}>
                </Project>
                <Project projName={"BRYTE Website"}
                    link = {"https://project-youth-japan.vercel.app/" }
                    desc={"Official website for BRYTE (Brown Refugee Youth Tutoring & Enrichment) - a student-run organization at Brown University dedicated to supporting refugee youth through academic tutoring and mentoring."}
                    skills={"Full Stack, Google Calendar API"}>
                </Project>  
            </div>
            <div className="section-header">
                <h1>Cybersecurity</h1>
                <hr />
            </div>
            <div className="projects-grid">
                <Project projName={"CyberPatriot National Finalist"}
                    link = {"https://www.afa.org/cyberpatriot-national-finalist-are-here/" }
                    desc={"The most prestigious national youth cyber education program in the United States from 2024."}
                    skills={"Security, Malware/backdoor detection and removal, Active Directory & Group Policy, Networking, DNS, DHCP configuration, Windows 10/12, Windows Server 2019/2022, Linux Ubuntu"}>
                </Project>
                <Project projName={"CyBearSec | Co-founder, VP"}
                    link = {"https://devpost.com/software/perennial-t62nhb" }
                    desc={"First Cybersecurity Club at Brown."}
                    skills={"CCDC Competition"}>
                </Project>
            </div>
            <div className="section-header">
                <h1>Design</h1>
                <hr />
            </div>
            <div className="projects-grid">
                <Project projName={"Hack@Brown 2027"}
                    link = {"https://hackatbrown.org" }
                    desc={"Design components and work alongside the Dev team to create website for Hack@Brown."}
                    skills={"Blender, Design"}>
                </Project>
                <Project projName={"BrownDems"}
                    link = {"https://project-youth-japan.vercel.app/" }
                    desc={"Official website for BRYTE (Brown Refugee Youth Tutoring & Enrichment) - a student-run organization at Brown University dedicated to supporting refugee youth through academic tutoring and mentoring."}
                    skills={"Design, JS"}>
                </Project>
            </div>
        </div>
    </body>
  );
}