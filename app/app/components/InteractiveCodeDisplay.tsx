import React, { useState } from 'react';

interface InteractiveCodeDisplayProps {
  solutionCode: string;
}

const InteractiveCodeDisplay: React.FC<InteractiveCodeDisplayProps> = ({ solutionCode }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="my-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowSolution(!showSolution)}
      >
        {showSolution ? "Close Solution" : "Click here for the solution"}
      </button>
      {showSolution && (
        <div className="mt-2 border rounded bg-gray-100 p-4 whitespace-pre-wrap">
          <code>
            {solutionCode}
          </code>
        </div>
      )}
    </div>

  );
}

export default InteractiveCodeDisplay;
