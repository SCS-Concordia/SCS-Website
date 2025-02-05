import React from "react";

function About() {
  return (
    <div className="flex m-8 items-center justify-center gap-x-12">
      <img 
        className="flex-1 m-4 w-96"
        src="/src/assets/pictures/group-photo.png"
      />
      <div className="flex-1 text-center">
        <h1 id="about-section" className="p-4 font-JetBrainsMono">
          WHO WE ARE
        </h1>
        <p className="font-CutiveMono text-[1.4em] leading-tight">
          We are a dedicated group of students leading the Software Engineering and Computer Science Club on campus. Our mission is to enhance student life by creating a vibrant community for those passionate about technology and programming. Through our club, we organize a variety of events, including workshops, hackathons, and networking sessions, aimed at providing valuable opportunities for skill development, collaboration, and knowledge-sharing.
        </p>
      </div>
    </div>
  );
}

export default About;
