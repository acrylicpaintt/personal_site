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
            <div className="hero-section"
                  style={{ display: "flex", alignItems: "center", gap: "30px", maxWidth: "80%", margin: "0 auto", padding: "30px" }}>
              <div style={{ flexShrink: 0 }}>
                <Slideshow images={[headshot, headshot_2]} />
                <a style={{textAlign: "center", marginTop: "8px"}}>me!</a>
              </div>
              <div style= {{paddingTop: '60px'}}>
                <h1>Hi! My name is Alicia Yoon / 윤채민.</h1>
              <h2>I'm a Computer Science undergraduate at Brown University who is interested in Full-Stack development, 
                Cybersecurity (RvB Competitions), and Visual Computing. 
              </h2>
              <h2>
                 This summer, I am working in the Pen and Touch Visual Computing Lab at Brown University alongside Professor Andy Van Dam in {' '}
                  <a className="link-text" href="https://brown-dash.github.io/Dash-Documentation/about/" target="_blank">
                   Dash</a>, 
                 sponsored by Adobe. I'm currently <b>researching text-to-3D modelling</b> for creatives that will allow for customization of individual components.
              </h2>
              <h2>
                Cybersecurity: Last semester, I co-founded  {' '}
                <a className="link-text" href="https://studentactivities.brown.edu/organizations/cybearsec-brown" target="_blank">
                   CyBearSec@Brown</a>, a pre-professional, competitive CyberSecurity club at 
                Brown University that collaborates with other Ivy League schools through {' '}
                <a className="link-text" href="https://ivysec.org/" target="_blank">
                   IVYSEC</a>. Up next, we will be 
                making a <b>curriculum for cybersecurity competitions</b> and <b>hosting panels</b> for students interested in Cybersecurity in
                 both the pre-Law and Technological track.
              </h2>
              <h2>
                On campus, I'm part of Brown Taekwondo, and I'm a 3rd Dan Black Belt! Also, I will be working on Design for {' '} 
                <a className="link-text" href="https://browndems.org/" target="_blank">
                   BrownDems</a> through merch, stickers, and work on ARTivism. I'm also working on
                design for the {' '} <a className="link-text" href="https://hackatbrown.org/" target="_blank">
                   Hack@Brown</a> Design team, where I will use Blender and work in a team designing the website and merch for the upcoming 2027 Hackathon!
              </h2>
              <h2>Everything on this site is written by me, not AI.</h2>
            </div>
            </div>

            <div style = {{maxWidth: "90%", margin: "0 auto"}} className="section-header">
                <h1>fun facts:</h1>
                <hr />
              </div>

            <div style = {{maxWidth: "80%", margin: "0 auto", }} >
              <div className="section-header">
                <h1>Book Recommendations</h1>
                <hr />
              </div>
                <h2 style = {{color: "gray"}}>Some of my favorite books across many categories: </h2>
                <ul>
                  <li>i who have never known men</li>
                  <li>Recoding America</li>
                  <li>The Bell Jar</li>
                  <li>Invisible Women</li>
                  <li>Strange Houses</li>
                </ul>
            <div className="section-header">
                <h1>Music Favorites</h1>
                <hr />
              </div>
                <ul>
                  <li>Hamilton</li>
                  <li>Hadestown</li>
                  <li>Dominic Fike</li>
                  <li>Taylor Swift</li>
                  <li>Remi Wolf</li>
                </ul>
            </div>
          </main>
        </div>
      </body>
  );
}
