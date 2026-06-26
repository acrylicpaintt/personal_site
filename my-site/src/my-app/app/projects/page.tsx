"use client"
import "../globals.css";
import Project from "../components/Project";
import perennial from "../project-images/perennial.jpg";
import dash from "../project-images/dash.png";
import summertime from "../project-images/summertime.png";
import youthjapan from "../project-images/youth-japan.png";
import cyberpat from "../project-images/cyberpatriot.jpeg";
import hab2027 from "../project-images/hackatbrown2027.png";
import browndems from "../project-images/browndems.jpg.webp";
import dashstarter from "../project-images/dashstarter.png";
import snake from "../project-images/snake.png";
import bryte from "../project-images/bryte.png";
import odespaper from "../project-images/355paper.png";
import hcipaper from "../project-images/1302paper.png";
import cybearsec from "../project-images/cybearsec.png";
import personalsite from "../project-images/personalsite.png"

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
                    desc={"Visual Computing Research."}
                    skills={"TypeScript, SCSS, JavaScript, HTML, UI Design, Research"}
                    image={dash}>
                </Project>
                <Project projName={"perennial"}
                    link = {"https://devpost.com/software/perennial-t62nhb" }
                    desc={"Won ActualFoods track at YHack 2026."}
                    skills={"Kotlin, Android Studio, Firebase, Machine Learning, App Dev"}
                    image={perennial}>
                </Project>
                <Project projName={"Slackbot: summertime"}
                    link = {"https://github.com/acrylicpaintt/slack-bot" }
                    desc={"Developed as part of the StarDance Hack Club challenge."}
                    skills={"Harry Potter API, Joke API, Cat Fact API, Node.JS, Slack Bolt"}
                    image={summertime}>
                </Project>
                <Project projName={"Snake"}
                    link = {"https://github.com/acrylicpaintt/slack-bot" }
                    desc={"Classic Snake Game in VSCode Terminal."}
                    skills={"C/C++, Docker"}
                    image={snake}>
                </Project>
                <Project projName={"Dash Starter Project"}
                    link = {"https://aliciayoon-dashstarterproject.web.app/" }
                    desc={"Developed as part of CS300 Course."}
                    skills={"TypeScript, HTML, SCSS"}
                    image={dashstarter}>
                </Project>
                <Project projName={"Personal Website"}
                    link = {"/" }
                    desc={"You're here right now!"}
                    skills={"React, UI Design, TypeScript, Next.js"}
                    image={personalsite}>
                </Project>
                <Project projName={"YouthJapan Website"}
                    link = {"https://project-youth-japan.vercel.app/" }
                    desc={"Team project in Full Stack at Brown"}
                    skills={"Full Stack, React"}
                    image={youthjapan}>
                </Project>
                <Project projName={"BRYTE Website"}
                    link = {"https://project-youth-japan.vercel.app/" }
                    desc={"Official website for BRYTE (Brown Refugee Youth Tutoring & Enrichment) - a student-run organization at Brown University dedicated to supporting refugee youth through academic tutoring and mentoring."}
                    skills={"Full Stack, React, Google Calendar API"}
                    image={bryte}>
                </Project>  
            </div>
            <div className="section-header">
                <h1>Cybersecurity</h1>
                <hr />
            </div>
            <div className="projects-grid">
                <Project projName={"CyberPatriot National Finalist"}
                    link = {"https://www.afa.org/cyberpatriot-national-finalist-are-here/" }
                    desc={"The most prestigious national youth cyber education competition."}
                    skills={"Security, Malware/backdoor detection and removal, Active Directory & Group Policy, Networking, DNS, DHCP configuration, Windows 10/12, Windows Server 2019/2022, Linux Ubuntu"}
                    image={cyberpat}>
                </Project>
                <Project projName={"CyBearSec | Co-founder, VP"}
                    link = {"https://studentactivities.brown.edu/organizations/cybearsec-brown" }
                    desc={"First Cybersecurity Club at Brown."}
                    skills={"Leadership"}
                    image={cybearsec}>
                </Project>
            </div>
            <div className="section-header">
                <h1>Research</h1>
                <hr />
            </div>
            <div className="projects-grid">
                <Project projName={"ODE's Final Paper"}
                    link = {"/budykosellerspaper.pdf" }
                    desc={"Bifurcation Theory and Climate Tipping in the Budyko–Sellers Energy Balance Climate Model."}
                    skills={"ODE, Applied Math"}
                    image={odespaper}>
                </Project>
                <Project projName={"Human-Computer Interaction Project Proposal"}
                    link = {"/1302projproposal.pdf" }
                    desc={"Artificial-Intelligence in Streamed Music Audit/Policy Research Proposal"}
                    skills={"Sociotechnical Approach to AI and HCI"}
                    image={hcipaper}>
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
                    skills={"Blender, Design"}
                    image={hab2027}>
                </Project>
                <Project projName={"BrownDems"}
                    link = {"https://browndems.org" }
                    desc={"Official website for BrownDems."}
                    skills={"Design, JS"}
                    image={browndems}>
                </Project>
            </div>
        </div>
    </body>
  );
}