"use client"
import "../globals.css";
import Project from "../components/Project";
import wild from "../art-images/wild.png";
import afterthefight from "../art-images/afterthefight.png";
import dollface from "../art-images/dollface.png";
import popthebubble from "../art-images/popthebubble.png";
import climate from "../art-images/climate.png";

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
              <Project projName={"After the Fight"}
                  link = {"https://drive.google.com/file/d/18nddVboPZmJ9be-vZp2Lbt6ftdQKPmeu/view?usp=drive_link" }
                  desc={"Gold Key Scholastic Winner 2023"}
                  skills={"Acrylic Paint"}
                  image={afterthefight}>
              </Project>
              <Project projName={"Wild"}
                  link = {"https://drive.google.com/file/d/1ZXgpj3hWRT057F8vbeYbApSVE1vmmyOV/view?usp=drive_link" }
                  desc={"Silver Key Scholastic Winner 2024"}
                  skills={"Acrylic Paint, Wire"}
                  image={wild}>
              </Project>
              <Project projName={"Dollface"}
                  link = {"https://drive.google.com/file/d/1kV1KHPPosxPtrNchAE1BpIlbwaQgtG-I/view?usp=drive_link" }
                  desc={"Silver Key Scholastic Winner 2023, Published in Celebrating Art with High Merit Award 2023"}
                  skills={"Pencil"}
                  image={dollface}>
              </Project>
              <Project projName={"Pop the Bubble"}
                  link = {" https://drive.google.com/file/d/1IY5jafEg-aUDvVJl_c6uCYXXkIfo2nwD/view?usp=sharing" }
                  desc={"Silver Key Scholastic Winner 2023, Celebrating Art Feature"}
                  skills={"Gouache"}
                  image={popthebubble}>
              </Project>              
            </div>

            <div className="section-header">
              <h1>Animation</h1>
              <hr />
            </div>
            <div className="projects-grid">
              <Project projName={"MOVING IN, 2022"}
                  link = {"https://drive.google.com/file/d/1AI4zecsOW0Ivf_du8NSde2_50o5rNPKW/view?usp=sharing" }
                  desc={"Presented at the 2023 Providence Youth Filmmaker Showcase"}
                  skills={"Design, Art, Creativity"}
                  image={climate}>
              </Project>
            </div>

            <div className="section-header">
              <h1>Other</h1>
              <hr />
            </div>
            <div className="projects-grid">
              <Project projName={"MOVING IN, 2022"}
                  link = {"https://drive.google.com/file/d/1AI4zecsOW0Ivf_du8NSde2_50o5rNPKW/view?usp=sharing" }
                  desc={"Presented at the 2023 Providence Youth Filmmaker Showcase"}
                  skills={"Design, Art, Creativity"}
                  image={climate}>
              </Project>
            </div>

        </main>
      </div>
    </body>
  );
}