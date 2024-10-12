import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is a QR code?",
    answer: "A QR code (Quick Response code) is a two-dimensional barcode that can be scanned using a smartphone camera to quickly access information or perform an action."
  },
  {
    question: "How do I create a QR code with QRSolutions?",
    answer: "Creating a QR code with QRSolutions is simple. Just sign up for an account, choose your plan, and use our intuitive dashboard to generate QR codes for various purposes such as websites, contact information, or product details."
  },
  {
    question: "Can I customize the appearance of my QR codes?",
    answer: "Yes, QRSolutions offers customization options for your QR codes. You can add your logo, change colors, and adjust the design to match your brand identity."
  },
  // ... (other FAQs)
];

const FAQ: React.FC<{ id: string }> = ({ id }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                {expandedIndex === index ? (
                  <Minus className="w-6 h-6 text-blue-600" />
                ) : (
                  <Plus className="w-6 h-6 text-blue-600" />
                )}
              </button>
              {expandedIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;