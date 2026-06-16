import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <div>
              <h1>Hi, my name is Alicia Yoon. </h1>
              <h2>Everything on this site is written by me, not AI.</h2>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
