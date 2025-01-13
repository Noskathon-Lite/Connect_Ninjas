import { ExternalLink } from "lucide-react";
import React from "react";

function TryItNow() {
  return (
    <button
      onClick={() => window.open("http://localhost:5173", "_blank")}
      className="flex items-center gap-2 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
    >
      Try It Now
      <ExternalLink className="w-4 h-4" />
    </button>
  );
}

export default TryItNow;
