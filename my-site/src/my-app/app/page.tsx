import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
