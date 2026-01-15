
import React, { useState } from 'react';
import { FAQItem } from '../types';

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-slate-200 bg-white">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left py-6 px-4 flex justify-between items-center hover:bg-slate-50 transition-all focus:outline-none"
          >
            <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-orange-600' : 'text-slate-900'}`}>
              {item.question}
            </span>
            <span className={`transform transition-transform text-2xl ${openIndex === index ? 'rotate-45 text-orange-600' : 'rotate-0 text-slate-400'}`}>
              +
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-6 pt-0 text-slate-600 leading-relaxed font-light">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
