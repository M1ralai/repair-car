import React from 'react';
import './Stepper.css';

interface Step {
  label: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

interface StepperProps {
  steps: Step[];
}

export const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <div key={index} className={`step${step.isCompleted ? ' is-completed' : ''}${step.isCurrent ? ' is-current' : ''}`}>
            <div className="step-indicator-wrapper">
              <div className="step-indicator">
                {step.isCompleted ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="14" height="14">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : (
                  <span className="step-number">{index + 1}</span>
                )}
              </div>
              {!isLast && <div className="step-line" />}
            </div>
            <div className="step-content">
              <span className="step-label">{step.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
