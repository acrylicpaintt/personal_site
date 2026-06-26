"use client"
import "../globals.css";
import Project from "../components/Project";
import perennial from "../project-images/perennial.jpg"

export default function ArtPage() {
  return (
      <body>
        <div style = {{maxWidth: "80%", margin: "0 auto", padding: "30px"}} className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <div className="section-header">
              <h1>Visual Arts</h1>
              <hr />
            </div>
            <div className="projects-grid">
              <Project projName={"check out my portfolio!"}
                  link = {"/favs" }
                  desc={"Collection of Visual Arts, Digital Arts, and Animation by Alicia Yoon"}
                  skills={"Design, Art, Creativity"}
                  image={perennial}>
              </Project>
            </div>

            <div className="section-header">
              <h1>Animation</h1>
              <hr />
            </div>
            <div className="projects-grid">
              <Project projName={"check out my portfolio!"}
                  link = {"/favs" }
                  desc={"Collection of Visual Arts, Digital Arts, and Animation by Alicia Yoon"}
                  skills={"Design, Art, Creativity"}
                  image={perennial}>
              </Project>
            </div>
        </main>
      </div>
    </body>
  );
}