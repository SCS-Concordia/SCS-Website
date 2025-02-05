import React, { useState } from "react";
import "./events.css"; // Ensure this CSS is imported correctly
import csgames2 from "/src/assets/events/csgames2.jpg";
import test_banner from "/src/assets/events/test_banner.jpg";
import wine from "/src/assets/events/wine&cheese.jpg";
import workshop from "/src/assets/events/workshop.jpg";

const images = [
  {
    url: csgames2,
    title: "CS Games",
    description:
      "A competitive and fun-filled event where participants showcase their coding and problem-solving skills through various challenges and games.",
  },
  {
    url: test_banner,
    title: "Matrix Event",
    description:
      "A dynamic event designed to encourage collaboration and innovation, where teams work on tech-based challenges and explore new ideas.",
  },
  {
    url: wine,
    title: "Wine and Cheese",
    description:
      "An evening of casual networking with industry professionals, featuring delicious wine and cheese to foster connections and discussions.",
  },
  {
    url: workshop,
    title: "Technical Workshop",
    description:
      "A hands-on learning experience that provides attendees with practical skills in various technical fields through interactive sessions and expert guidance.",
  },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // console.log(currentIndex);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    // console.log(currentIndex);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 id="about-section" className="p-4 font-JetBrainsMono">
          OUR PAST EVENTS
        </h1>
      </div>
      <div
        className="relative flex items-center justify-center w-[970px] h-[588px] bg-[#C0FEC1] border-2 border-[#765CBA]"
        style={{ left: "calc(50% - 970px/2)" }}
      >
        <div>

          <div className="absolute" style={{ right: "20px", top: "10px" }}>
            <svg
              width="103"
              height="25"
              viewBox="0 0 103 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="78.5"
                y="0.5"
                width="24"
                height="24"
                fill="#DDF3D8"
                stroke="#240765"
              />
              <rect
                x="0.5"
                y="0.5"
                width="24"
                height="24"
                fill="#DDF3D8"
                stroke="#240765"
              />
              <rect
                x="39.5"
                y="0.5"
                width="24"
                height="24"
                fill="#DDF3D8"
                stroke="#240765"
              />
              <path
                d="M90.6294 10.1968L94.4624 3.22656H97.1235L91.96 12.04L97.2456 21H94.6089L90.6782 13.8955L86.7354 21H84.062L89.3599 12.04L84.1963 3.22656H86.8452L90.6294 10.1968Z"
                fill="#342165"
              />
              <rect
                x="45.5"
                y="4.5"
                width="14"
                height="14"
                fill="#D9D9D9"
                stroke="#342165"
              />
              <rect
                x="43.5"
                y="6.5"
                width="14"
                height="14"
                fill="#D9D9D9"
                stroke="#342165"
              />
              <line x1="5" y1="12.5" x2="21" y2="12.5" stroke="#342165" />
            </svg>
          </div>
          <div
            className="absolute w-[930px] h-[528px] bg-[#D9D9D9] border-2 border-[#765CBA]"
            style={{ left: "20px", top: "41px" }}
          >
            <div
              className="carousel"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((item, index) => (
                <div
                  className={`carousel-item ${
                    index === currentIndex ? "active" : ""
                  }`}
                  key={index}
                  style={{
                    backgroundImage: `url(${item.url})`,
                  }}
                >
                  <div className="content">
                    <h2 className="title">{item.title}</h2>
                    <p className="description">{item.description}</p>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
              ))}
            </div>
            <div className="nav">
              <button className="btn prev" onClick={handlePrev}>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </button>
              <button className="btn next" onClick={handleNext}>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Events;
