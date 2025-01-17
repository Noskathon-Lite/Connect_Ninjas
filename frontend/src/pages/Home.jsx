import React from "react";
import About from "./About";
import Features from "./Features";
import Contact from "./Contact";

function Home() {
  return (
    <div className="pt-16 md:pt-0"> {/* Added padding-top to account for fixed navbar */}
      <section id="about" className=" p-4 md:p-10 bg-gray-100">
        <About />
      </section>

      <section id="features" className=" p-4 md:p-10 bg-gray-100">
        <Features />
      </section>

      <section id="contact" className="min-h-screen p-4 md:p-10 bg-gray-100">
        <Contact />
      </section>
    </div>
  );
}

export default Home;