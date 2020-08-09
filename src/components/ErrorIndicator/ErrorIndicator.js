import React from 'react';
import './ErrorIndicator.scss';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="error-indicator__title">BOOM!</span>
      <span className="error-indicator__text">
        something has gone terribly wrong
      </span>
      <span className="error-indicator__text">
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
