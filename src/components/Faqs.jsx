import React, { useState } from "react";


const data = {
  "Marketing Creatives": [
    {
      question: "What is creative design thinking?",
      answer: "Creative design thinking is an approach that combines analytical thinking and creative problem-solving techniques to generate innovative solutions. It involves applying empathy, experimentation, and collaboration to understand the needs of users, redefine problems, and explore new possibilities."
    },
    {
      question: "How can creative design thinking benefit my design projects?",
      answer: "Creative design thinking benefits your projects by fostering innovative solutions tailored to users’ needs, encouraging collaboration, and reducing risk by testing ideas early."
    },
    {
      question: "How can creative design thinking benefit my design projects?",
      answer: "Creative design thinking benefits your projects by fostering innovative solutions tailored to users’ needs, encouraging collaboration, and reducing risk by testing ideas early."
    },
    {
      question: "How can creative design thinking benefit my design projects?",
      answer: "Creative design thinking benefits your projects by fostering innovative solutions tailored to users’ needs, encouraging collaboration, and reducing risk by testing ideas early."
    },
    {
      question: "How can creative design thinking benefit my design projects?",
      answer: "Creative design thinking benefits your projects by fostering innovative solutions tailored to users’ needs, encouraging collaboration, and reducing risk by testing ideas early."
    },
  ],
  "Branding": [],
  "UI/UX Designing": []
};

function FAQ() {
  const tabs = Object.keys(data);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5" style={{ fontFamily: 'Arial, sans-serif' }}>
      <h2 className="text-center mb-2">
        Got Questions? We've Got <span style={{ color: '#D93025' }}>Answers!</span>
      </h2>
      <p className="text-center text-muted mb-4" style={{ fontSize: 14 }}>
        Let's clear the air like your favorite reel transition.
      </p>

      {/* Tabs */}
      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setOpenIndex(null);
            }}
            className={`btn ${
              activeTab === tab ? "btn-dark" : "btn-outline-secondary"
            } px-4`}
            style={{ borderRadius: "20px" }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div>
        {data[activeTab].map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`${isOpen ? "bg-danger text-white" : "bg-light"}`}
              style={{
                cursor: "pointer",
                boxShadow: isOpen ? "0 2px 8px rgba(217,48,37,0.4)" : "none",
                padding: isOpen ? "0.6rem 1rem" : "0.25rem 1rem",
                marginBottom: isOpen ? "0.75rem" : "0.4rem",
                borderRadius: "16px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                className="d-flex justify-content-between align-items-center"
                onClick={() => toggleOpen(index)}
                style={{ fontSize: isOpen ? 15 : 12, fontWeight: isOpen ? 600 : 500 }}
              >
                {item.question}
                <div
                  className={`btn btn-sm btn-${isOpen ? "light" : "danger"}`}
                  style={{
                    width: isOpen ? 28 : 22,
                    height: isOpen ? 28 : 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isOpen ? 14 : 10,
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                  }}
                  aria-label={isOpen ? "Collapse" : "Expand"}
                >
                  {isOpen ? "↩" : "↗"}
                </div>
              </div>
              {isOpen && (
                <p className="mt-1 mb-0" style={{ fontSize: 13, lineHeight: 1.3 }}>
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
