import React from "react";

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          Driver Drowsiness Detection
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          An innovative safety system using advanced computer vision to protect
          drivers and prevent accidents caused by drowsiness.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="text-center mb-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          Tech Stack
        </h3>
        <ul className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto list-disc list-outside">
          <li className="block">React.js for the Frontend</li>
          <li className="block">TensorFlow.js for Dataset Model</li>
          <li className="block">Haar Cascades for Eye Detection</li>
          <li className="block">OpenCV for Computer Vision</li>
        </ul>
      </div>

      {/* Additional Information */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          Additional Information
        </h3>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
          Our system continuously monitors the driver's facial expressions and eye movements to detect signs of drowsiness. If drowsiness is detected, the system alerts the driver through auditory signals, helping to prevent potential accidents.
        </p>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          The system is designed to be easily integrated into existing vehicles and can be customized to meet the specific needs of different users. Our goal is to enhance road safety and save lives by reducing the number of accidents caused by driver drowsiness.
        </p>
      </div>
    </div>
  );
}

export default About;