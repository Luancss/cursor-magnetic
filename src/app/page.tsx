"use client";

import { useEffect, useRef } from "react";
import { Header } from "./components/header";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = (containerRef.current as HTMLDivElement) || null;
    const highlight = (highlightRef.current as HTMLDivElement) || null;

    const gridItems = container?.querySelectorAll(
      ".grid-item"
    ) as NodeListOf<HTMLElement>;

    const firstItem = gridItems?.[0];

    // Replacing solid colors with lighter RGB gradients
    const gradients = [
      "linear-gradient(135deg, rgb(255, 150, 100), rgb(230, 100, 70))",
      "linear-gradient(135deg, rgb(130, 160, 255), rgb(90, 120, 250))",
      "linear-gradient(135deg, rgb(255, 210, 120), rgb(250, 170, 80))",
      "linear-gradient(135deg, rgb(80, 230, 180), rgb(60, 190, 150))",
      "linear-gradient(135deg, rgb(150, 240, 150), rgb(100, 210, 100))",
      "linear-gradient(135deg, rgb(120, 245, 255), rgb(80, 220, 240))",
      "linear-gradient(135deg, rgb(180, 190, 200), rgb(140, 160, 170))",
      "linear-gradient(135deg, rgb(100, 230, 210), rgb(70, 190, 180))",
    ] as string[];

    gridItems.forEach((item, index) => {
      item.dataset.gradient = gradients[index % gradients.length];
    });

    const moveToElement = (element: HTMLElement) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect() as DOMRect;

        highlight.style.transform = `translate(${
          rect.left - containerRect.left
        }px, ${rect.top - containerRect.top}px)`;
        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;
        // Using background-image instead of backgroundColor for gradients
        highlight.style.backgroundImage = element.dataset.gradient!;
      }
    };

    const moveHightlight = (e: MouseEvent) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

      if (hoveredElement && hoveredElement.classList.contains("grid-item")) {
        moveToElement(hoveredElement as HTMLElement);
      } else if (
        hoveredElement &&
        hoveredElement.parentElement &&
        hoveredElement.parentElement.classList.contains("grid-item")
      ) {
        moveToElement(hoveredElement.parentElement);
      }
    };

    moveToElement(firstItem);

    container.addEventListener("mousemove", moveHightlight);

    return () => {
      container.removeEventListener("mousemove", moveHightlight);
    };
  }, []);

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
            <div className="grid-item">
              <p>( three.js )</p>
            </div>
            <div className="grid-item">
              <p>( three.js )</p>
            </div>
          </div>
        </div>
        <div className="highlight" ref={highlightRef} />
      </div>
    </>
  );
}
