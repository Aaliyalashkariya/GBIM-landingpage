import React from 'react';
import './creative.css';

const steps = [
  {
    level: 'Level 1',
    title: 'Research',
    icon: '🔍',
    description:
      'Until iron is hot with the research, our design head specialists never command the designers to hit.',
    color: 'red',
  },
  {
    level: 'Level 2',
    title: 'Idea',
    icon: '💡',
    description:
      'Ideation is a very necessary step to optimize the process. An idea must be well-versed with the research.',
    color: 'blue',
  },
  {
    level: 'Level 3',
    title: 'Strategy',
    icon: '♘',
    description:
      'Strategic planning is a crucial step to deliver the projects on time. Never underestimate the strategy makers.',
    color: 'red',
  },
  {
    level: 'Level 4',
    title: 'Process',
    icon: '🛠️',
    description:
      'Processing the project with detailed research, ideas, and pre-planning is always a cherry on the cake.',
    color: 'blue',
  },
  {
    level: 'Level 5',
    title: 'Time',
    icon: '⏳',
    description:
      'We value your time. Playing with client’s deadlines is not our area. Timeline delivery is our first priority.',
    color: 'red',
  },
  {
    level: 'Level 6',
    title: 'Goal',
    icon: '🎯',
    description:
      'Our goal-oriented vision always gives us fruitful results. Connect with us to achieve your design goals.',
    color: 'blue',
  },
];

const ArrowRight = () => (
  <div className="arrow-wrapper">
    <svg
      className="arrow-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </div>
);

const CreativeProcess = () => {
  return (
    <div className="creative-container">
      <h2 className="creative-heading gradient-text">
        Our creative process blends <span>curiosity</span>, <span>collaboration</span>, and <span>innovation</span> to bring <strong>bold ideas</strong> to life.
      </h2>
      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={`step-card card-${step.color}`}>
              <div className="step-icon">{step.icon}</div>
              <h5 className="step-title">{step.title}</h5>
              <p className="step-desc">{step.description}</p>
              <div className="step-level">{step.level}</div>
            </div>
            {index < steps.length - 1 && <ArrowRight />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CreativeProcess;
