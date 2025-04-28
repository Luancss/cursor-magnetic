"use client";

import { useEffect, useRef } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;
    const gridItems = container?.querySelectorAll(".grid-item");
    const firstItem = gridItems?.[0];

    const hightlightColors = [
      "#E24E1B",
      "#4381C1",
      "#F79824",
      "#04A777",
      "#5BBC5A",
      "#21F6FF",
      "#818D92",
      "#22AAA1",
    ];
  });

  return (
    <>
      <Header />
      <div className="container" ref={containerRef}>
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
        <div className="highlight" ref={highlightRef} />
      </div>
      <Footer />
    </>
  );
}
