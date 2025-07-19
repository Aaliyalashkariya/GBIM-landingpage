import React, { useState } from "react";

const categories = [
    "E-Commerce",
    "Education",
    "Finance",
    "Health",
    "Manufacturing",
    "Real Estate",
    "Technology",
];

const testimonials = [
    {
        logo: "/Images/image 28.png",
        name: "Client Full Name",
        designation: "Designation",
        text: `Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centurie`,
        img: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    // add more testimonials here for navigation
];

export default function Testimonials() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const prevTestimonial = () => {
        setActiveTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const nextTestimonial = () => {
        setActiveTestimonial((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="container my-5" style={{
            fontFamily: "Arial, sans-serif",
            backgroundImage: 'url("/Images/Frame 1171277057.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#000",
        }}
        >
            <h2 className="text-center fw-bold mb-2">
                Our Success Starts With <br />
                Their <span style={{ color: "#D93025" }}>Satisfaction.</span>
            </h2>
            <p className="text-center text-muted mb-4" style={{ fontSize: 14 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Categories Tabs */}
            <div className="d-flex justify-content-center gap-2 flex-wrap mb-5">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`btn px-4 ${activeCategory === cat ? "btn-dark" : "btn-outline-secondary"
                            }`}
                        style={{ borderRadius: "20px" }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Testimonial Card with Arrows */}
            <div className="d-flex justify-content-center align-items-center position-relative">
                {/* Left Arrow */}
                <button
                    onClick={prevTestimonial}
                    className="btn btn-light rounded-circle shadow-sm position-absolute"
                    style={{ left: 0, width: 40, height: 40 }}
                    aria-label="Previous testimonial"
                >
                    &#8249;
                </button>

                {/* Testimonial Card */}
                <div
                    className="bg-white rounded shadow p-4 text-center"
                    style={{
                        maxWidth: 320,
                        borderRadius: 20,
                        border: "1px solid #eee",
                    }}
                >
                    {/* Logo */}
                    <img
                        src={testimonials[activeTestimonial].logo}
                        alt="Client Logo"
                        style={{ height: 30, marginBottom: 10 }}
                    />

                    {/* Profile Image */}
                    <img
                        src={testimonials[activeTestimonial].img}
                        alt={testimonials[activeTestimonial].name}
                        className="rounded-circle mb-3"
                        style={{ width: 70, height: 70, objectFit: "cover" }}
                    />

                    {/* Name & Designation */}
                    <h6 className="mb-0 fw-bold" style={{ fontSize: 14 }}>
                        {testimonials[activeTestimonial].name}
                    </h6>
                    <p className="text-muted mb-3" style={{ fontSize: 12 }}>
                        {testimonials[activeTestimonial].designation}
                    </p>

                    {/* Text */}
                    <p
                        className="text-muted"
                        style={{ fontSize: 13, lineHeight: 1.4, minHeight: 120 }}
                    >
                        {testimonials[activeTestimonial].text}
                    </p>

                    {/* Quote mark */}
                    <div
                        style={{
                            fontSize: 50,
                            color: "#eee",
                            position: "absolute",
                            bottom: 15,
                            right: 15,
                            userSelect: "none",
                        }}
                    >
                        &quot;
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextTestimonial}
                    className="btn btn-light rounded-circle shadow-sm position-absolute"
                    style={{ right: 0, width: 40, height: 40 }}
                    aria-label="Next testimonial"
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
}
