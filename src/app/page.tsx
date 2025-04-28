import { Footer } from "./components/footer";
import { Header } from "./components/header";

export default function Home() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="grid">
          <div className="grid-row">
            <div className="grid-item">
              <p>( html )</p>
            </div>
            <div className="grid-item">
              <p>( css )</p>
            </div>
            <div className="grid-item">
              <p>( javascript )</p>
            </div>
          </div>
          <div className="grid-row">
            <div className="grid-item">
              <p>( gsap )</p>
            </div>
            <div className="grid-item">
              <p>( scrolltrigger )</p>
            </div>
            <div className="grid-item">
              <p>( react )</p>
            </div>
            <div className="grid-item">
              <p>( next.js )</p>
            </div>
            <div className="grid-item">
              <p>( three.js )</p>
            </div>
          </div>
        </div>

        <div className="highlight" />
      </div>
      <Footer />
    </>
  );
}
