/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQAccordion = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`${isOpen ? "bg-primary-color" : ""} p-3 rounded-md`}>
      <button
        className={`flex justify-between items-center w-full py-4 text-left text-lg font-medium text-gray-100 focus:outline-none p-3 rounded-md ${
          isOpen ? "border-b border-gray-300" : "border border-gray-700"
        }`}
        onClick={onClick}
      >
        {question}
        {isOpen ? <FaMinus /> : <FaPlus />}
      </button>
      {isOpen && <div className="py-2 text-gray-100">{answer}</div>}
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Mazala.AI?",
      answer:
        "Mazala.AI is a creative platform that harnesses the power of artificial intelligence to inspire and empower users in their creative endeavors. We offer a diverse range of AI-driven tools and features designed to spark imagination and facilitate expression across various mediums",
    },
    {
      question: "What kind of tools does Mazala.AI offer?",
      answer:
        "Mazala.AI is a creative platform that harnesses the power of artificial intelligence to inspire and empower users in their creative endeavors. We offer a diverse range of AI-driven tools and features designed to spark imagination and facilitate expression across various mediums",
    },
    {
      question: "Are there any community features on Mazala.AI?",
      answer:
        "Mazala.AI is a creative platform that harnesses the power of artificial intelligence to inspire and empower users in their creative endeavors. We offer a diverse range of AI-driven tools and features designed to spark imagination and facilitate expression across various mediums",
    },
    {
      question: "Is there a mobile app for Mazala.AI?",
      answer:
        "Mazala.AI is a creative platform that harnesses the power of artificial intelligence to inspire and empower users in their creative endeavors. We offer a diverse range of AI-driven tools and features designed to spark imagination and facilitate expression across various mediums",
    },
    {
      question: "Does Mazala.AI offer tutorials or guides for using its tools?",
      answer:
        "Mazala.AI is a creative platform that harnesses the power of artificial intelligence to inspire and empower users in their creative endeavors. We offer a diverse range of AI-driven tools and features designed to spark imagination and facilitate expression across various mediums",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-100">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-lg mb-12 text-gray-400">
          Discover answers to common inquiries in our Frequently Asked Questions
          section, providing clarity and guidance for all users.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/3 p-6 shadow-lg rounded-lg mb-8 md:mb-0 relative">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                Ask your question
              </h3>
              <p className="text-gray-400 mb-6">
                If the question is not available in our FAQ section, feel free
                to contact us personally, we will resolve your respective
                doubts.
              </p>
              <button className="bg-primary-color text-white font-bold py-2 px-4 rounded-md">
                Аsk Question
              </button>
            </div>
            <div className="bottom-10 absolute">
              <p className="text-gray-400">
                Feel Free to Contact our Support Team at
              </p>
              <p className="text-primary-color">mazala.ai@gmail.com</p>
            </div>
          </div>

          <div className="md:w-2/3 space-y-3">
            {faqItems.map((item, index) => (
              <FAQAccordion
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
