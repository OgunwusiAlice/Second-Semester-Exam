import React, { useState } from "react";
import "./testErrorBoundary.css";

const TestError = () => {
  const [errrorText, setErrorText] = useState("");

  function handleError(e) {
    if (e.target.value.toUpperCase() == "exam") setErrorText("exam");
    if (errrorText == "exam") throw new Error("Error Boundary. Checked.");
  }
  return (
    <div className="test-error">
      <input
        className="form-control form-control-lg"
        onChange={handleError}
        type="text"
        placeholder="Enter 'exam' to test error boundary"
      />
    </div>
  );
};

export default TestError;
