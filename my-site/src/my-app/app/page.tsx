import Header from "./components/Header";
import Footer from "./components/Footer";
import headshot from './headshot.jpeg';
import headshot_2 from './headshot_2.jpeg';
import Slideshow from "./components/Slideshow";
import "./globals.css";

export default function Home() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <div> 
              <Slideshow images={[headshot, headshot_2]}></Slideshow>
            </div>
            <div>
              <h1>Hi, my name is Alicia Yoon.</h1>
              <h2>Everything on this site is written by me, not AI.</h2>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
