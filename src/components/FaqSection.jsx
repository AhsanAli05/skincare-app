// src/components/FaqSection.jsx
import React, { useState } from "react";

const faqData = [
  {
    question: "What is the purpose of this app?",
    answer:
      "This app helps you analyze your skin health using AI, track your skincare routine, and monitor progress with photos and personalized insights.",
  },
  {
    question: "How do I upload a photo for skin analysis?",
    answer:
      "Simply go to the Home page and upload your photo. The AI will analyze it for acne detection, hydration levels, and redness, providing instant feedback.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes! Your data is stored securely in Firebase and is only accessible to you. We prioritize your privacy and data protection.",
  },
  {
    question: "Can I track my progress over time?",
    answer:
      "Absolutely! You can upload photos regularly and compare them in the Progress Tracking section to monitor your skin improvements.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 transition-all">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
