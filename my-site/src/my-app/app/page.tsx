"use client"
import headshot from './headshot.jpeg';
import headshot_2 from './headshot_2.jpeg';
import Slideshow from "./components/Slideshow";
import "./globals.css";

export default function Home() {
   

  return (
      <body>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <div style = {{maxWidth: "80%", margin: "0 auto", padding: "30px"}}> 
              <Slideshow images={[headshot, headshot_2]}></Slideshow>
            </div>
            <div style = {{maxWidth: "80%", margin: "0 auto", padding: "30px"}} >
              <h1>Hi! My name is Alicia Yoon / 윤채민.</h1>
              <h2>I'm a Computer Science undergraduate at Brown University who is interested in Full-Stack development, 
                Cybersecurity (RvB Competitions), and Visual Computing. 
              </h2>
              <h2>
                 This summer, I am working in the Pen and Touch Visual Computing Lab at Brown University alongisde Professor Andy Van Dam in Dash, 
                 sponsored by Adobe. I'm currently researching text-to-3D modelling for creatives that will allow for customization of individual components.
              </h2>
              <h2>
                Cybersecurity: Last semester, I co-founded CyBearSec@Brown, a pre-professional, competitive CyberSecurity club at 
                Brown University that collaborates with other Ivy League schools through IVYSEC. Up next, we will be 
                making a curriculum for cybersecuirty competitions and hosting workshops for students interested in Cybersecurity in
                 both the pre-Law and Technological track.
              </h2>
              <h2>
                I'm currently looking into NLP and reading up-to-date news about AI, so feel free to send me some interesting articles! In other 
                news, I will be working on Design for Brown Dems for Club Fair through merch, stickers, and work on ARTivism. I'm also working on
                design for the Hack@Brown Design team, where I will use Blender and work in a team for the upcoming 2027 Hackathon!
              </h2>
              <h2>Everything on this site is written by me, not AI.</h2>
            </div>
          </main>
        </div>
      </body>
  );
}
