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
                 This summer, I am working in the Pen and Touch Visual Computing Lab at Brown University alongside Professor Andy Van Dam in {' '}
                  <a className="link-text" href="https://brown-dash.github.io/Dash-Documentation/about/" target="_blank">
                   Dash</a>, 
                 sponsored by Adobe. I'm currently researching text-to-3D modelling for creatives that will allow for customization of individual components.
              </h2>
              <h2>
                Cybersecurity: Last semester, I co-founded  {' '}
                <a className="link-text" href="https://studentactivities.brown.edu/organizations/cybearsec-brown" target="_blank">
                   CyBearSec@Brown</a>, a pre-professional, competitive CyberSecurity club at 
                Brown University that collaborates with other Ivy League schools through {' '}
                <a className="link-text" href="https://ivysec.org/" target="_blank">
                   IVYSEC</a>. Up next, we will be 
                making a curriculum for cybersecurity competitions and hosting workshops for students interested in Cybersecurity in
                 both the pre-Law and Technological track.
              </h2>
              <h2>
                I'm currently looking into NLP and reading up-to-date news about AI, so feel free to send me some interesting articles! In other 
                news, I will be working on Design for {' '} <a className="link-text" href="https://browndems.org/" target="_blank">
                   BrownDems</a> through merch, stickers, and work on ARTivism. I'm also working on
                design for the {' '} <a className="link-text" href="https://hackatbrown.org/" target="_blank">
                   Hack@Brown</a> Design team, where I will use Blender and work in a team designing the website and merch for the upcoming 2027 Hackathon!
              </h2>
              <h2>Everything on this site is written by me, not AI.</h2>
            </div>
          </main>
        </div>
      </body>
  );
}
