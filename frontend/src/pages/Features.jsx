import React from "react";
import { Camera, AlertTriangle, LineChart, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-blue-500" />,
      title: "Computer Vision Detection",
      description: "Advanced real-time monitoring using computer vision technology to detect signs of driver drowsiness with high accuracy."
    },
    {
      icon: <LineChart className="w-8 h-8 text-green-500" />,
      title: "Real-time Analysis",
      description: "Continuous monitoring and analysis of driver behavior through camera feeds, providing instant feedback and assessment."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Timely Alerts",
      description: "Proactive alert system that warns drivers when drowsiness levels exceed safety thresholds, preventing potential accidents."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Enhanced Safety",
      description: "Particularly effective for long-distance vehicles and trucks, significantly reducing accident risks during extended journeys."
    }
  ];

  return (
    <div className="px-4 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-blue-50 p-8 md:p-12 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">
              Potential Impact
            </h3>
            <p className="text-lg text-blue-900/80 leading-relaxed">
              This technology has the potential to revolutionize road safety, becoming a standard safety measure for all long-distance travel vehicles. By preventing drowsiness-related accidents, we can save lives and make roads safer for everyone.
            </p>
          </div>
        </div>
      </div>
  
  );
};

export default Features;