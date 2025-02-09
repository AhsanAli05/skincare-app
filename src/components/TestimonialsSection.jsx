// src/components/TestimonialsSection.jsx
import React from "react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Skincare Enthusiast",
    feedback:
      "The AI skin analysis is a game-changer! It helped me track my skin progress and improve my skincare routine effectively.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ali Khan",
    role: "Fitness Coach",
    feedback:
      "I love how easy it is to upload photos and get personalized insights. The reminders keep me consistent with my routine.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ayesha Malik",
    role: "Beauty Blogger",
    feedback:
      "This tool has transformed how I take care of my skin. The progress tracking is super helpful, and the recommendations are spot on!",
    image: "https://via.placeholder.com/150",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg rounded-xl p-8 text-left hover:shadow-2xl transition duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-blue-600 text-sm">{testimonial.role}</p>
              <p className="text-gray-600 mt-4">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
