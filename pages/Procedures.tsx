
import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';

const Procedures: React.FC = () => {
  const faqs = [
    {
      question: "What fuels do you offer?",
      answer: "We primarily supply high-grade Jet A1, D6, and EN590/ULSD fuels. We also facilitate access to additional specialized fuel products upon request."
    },
    {
      question: "Where are your operations located?",
      answer: "Our headquarters is strategically located in Dubai, UAE. We maintain significant trading and logistics operations in Houston, Texas and Wyoming, USA."
    },
    {
      question: "What delivery procedures do you follow?",
      answer: "We offer both CIF (Cost, Insurance, and Freight) and FOB (Free on Board) supply procedures. This includes specialized handovers such as tank-to-tank, tank takeover, tank-to-vessel, and vessel takeover."
    },
    {
      question: "Who leads Optus Energy?",
      answer: "Optus Energy is led by co-founders Deepak Ram (CEO) and Daniel Schwartz (Head of Sales and Marketing), bringing decades of combined energy trading expertise."
    },
    {
      question: "Are you expanding globally?",
      answer: "Yes. In addition to our current hubs, we have strategic expansion plans for major energy ports including Fujairah, Rotterdam, and Jurong."
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 md:py-32 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-sky-500 mb-6 md:mb-8">Operations</h1>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-slate-900 mb-6 md:mb-10 italic leading-tight">Procedures & FAQs</h2>
            <p className="text-lg md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl">
              Transparency is the cornerstone of our trading relationships. We provide detailed guidelines on our transaction protocols.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20">
          <div className="lg:col-span-5">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-4 md:mb-8">Common Inquiries</h3>
            <h4 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 md:mb-10 leading-tight">Get the Answers You Need</h4>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed">If you have specific operational questions not covered here, please reach out to our support team.</p>
          </div>
          <div className="lg:col-span-7">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Procedure Details */}
      <section className="py-16 md:py-32 bg-slate-950 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* CIF Card */}
            <div className="group relative">
                <div className="h-[400px] md:h-[600px] overflow-hidden shadow-2xl">
                    <img 
                        src="https://ram-shipping.com/wp-content/uploads/2024/12/Intermodal-Freight-Transportation.jpg" 
                        alt="CIF Supply" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-slate-950/70 group-hover:bg-slate-950/40 transition-all duration-700"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full text-white">
                    <h4 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6">CIF Supply</h4>
                    <p className="text-base md:text-xl text-slate-300 font-light mb-6 md:mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                        Delivered with cost, insurance, and freight included. We manage the logistics until the point of discharge, ensuring a smooth end-to-end transaction.
                    </p>
                    <div className="w-16 md:w-24 h-1 md:h-1.5 bg-orange-600"></div>
                </div>
            </div>

            {/* FOB Card */}
            <div className="group relative">
                <div className="h-[400px] md:h-[600px] overflow-hidden shadow-2xl">
                    <img 
                        src="https://www.credlix.com/_next/image?url=https%3A%2F%2Fblog.credlix.com%2Fwp-content%2Fuploads%2F2019%2F09%2F259.png&w=3840&q=75" 
                        alt="FOB Supply" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-slate-950/70 group-hover:bg-slate-950/40 transition-all duration-700"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full text-white">
                    <h4 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6">FOB Supply</h4>
                    <p className="text-base md:text-xl text-slate-300 font-light mb-6 md:mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                        Flexible FOB procedures for direct buyer control. Transact at the point of origin with complete transparency and certified product verification.
                    </p>
                    <div className="w-16 md:w-24 h-1 md:h-1.5 bg-sky-500"></div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 bg-white text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 md:mb-10 leading-tight">Need Detailed Documentation?</h3>
            <p className="text-slate-600 mb-10 md:mb-16 text-lg md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">Our legal and operational teams can provide full procedure documentation and compliance requirements for qualified buyers.</p>
            <Link to="/contact" className="inline-block bg-slate-950 text-white px-10 md:px-16 py-4 md:py-6 font-bold uppercase tracking-[0.3em] text-xs md:text-sm hover:bg-orange-600 transition-all shadow-2xl">
                Request Full Procedures
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Procedures;
