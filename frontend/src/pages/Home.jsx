import React from "react";

function Home() {
  return (
    <div className="pt-16 md:pt-0"> {/* Added padding-top to account for fixed navbar */}
      <section id="about" className="min-h-screen p-4 md:p-10 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About</h2>
        <p className="text-base md:text-lg">This is the About section. Add your content here.</p>
      </section>

      <section id="features" className="min-h-screen p-4 md:p-10 bg-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Features</h2>
        <p className="text-base md:text-lg">This is the Features section. Add your content here.</p>
      </section>

      <section id="contact" className="min-h-screen p-4 md:p-10 bg-gray-300">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
        <p className="text-base md:text-lg">This is the Contact section. Add your content here.</p>
      </section>
    </div>
  );
}

export default Home;