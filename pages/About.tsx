
import React from 'react';
import StatCard from '../components/StatCard';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Title Section */}
      <section className="py-32 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-xs font-bold uppercase tracking-[0.4em] text-orange-600 mb-8">The Firm</h1>
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 mb-10 italic leading-tight">About Optus Energy</h2>
            <p className="text-2xl text-slate-600 font-light leading-relaxed max-w-3xl">
              Fueling global markets with flexible, buyer-friendly solutions from Houston to Dubai. We bridge continents to ensure consistent energy flow.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-20">
            <StatCard label="Trusted Worldwide" value={150} suffix="+" />
            <StatCard label="Years Experience" value={15} suffix="+" />
            <StatCard label="Founded" value={2025} />
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 space-y-8 lg:space-y-0">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-sky-500 mb-6">Leadership</h2>
              <h3 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight">Meet Our Team</h3>
            </div>
            <div className="text-slate-500 font-serif italic text-2xl max-w-md lg:text-right">
              "Integrity and innovation are at the core of every transaction we facilitate."
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Leader 1 */}
            <div className="group relative">
              <div className="overflow-hidden bg-slate-100 aspect-[4/5] shadow-xl">
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=373,fit=crop/CbexEfr9R7B7E2oF/dee-professional-photo-edIdjbyiFnctfdV1.jpeg" 
                  alt="Deepak Ram" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="mt-8 border-l-4 border-orange-600 pl-8 py-4">
                <h4 className="text-3xl font-serif font-bold group-hover:text-orange-600 transition-colors">Deepak Ram</h4>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mt-2">CEO – Dubai</p>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="group relative">
              <div className="overflow-hidden bg-slate-100 aspect-[4/5] shadow-xl">
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=372,fit=crop/CbexEfr9R7B7E2oF/dan-at-the-busy-office-buLyDHi6AmU2HHVN.png" 
                  alt="Daniel Schwartz" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="mt-8 border-l-4 border-sky-500 pl-8 py-4">
                <h4 className="text-3xl font-serif font-bold group-hover:text-sky-500 transition-colors">Daniel Schwartz</h4>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mt-2">Co-Founder & Head of Sales and Marketing – USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-orange-600 mb-24 text-center">Global Voice</h2>
          
          <div className="space-y-32">
            {/* Testimonial 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Mark Lee" 
                  className="w-full h-full object-cover grayscale shadow-[30px_30px_0px_0px_rgba(249,115,22,0.2)]"
                />
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-orange-600 flex items-center justify-center font-serif text-4xl">“</div>
              </div>
              <div className="max-w-3xl text-center lg:text-left">
                <p className="text-3xl md:text-5xl font-serif italic text-slate-100 mb-10 leading-tight">
                  “Optus Energy’s flexible procedures made sourcing jet fuel seamless and reliable for our Houston operations.”
                </p>
                <div className="font-bold uppercase tracking-[0.3em] text-lg text-orange-600">— Mark Lee, Houston</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 relative">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" 
                  alt="Anna Kim" 
                  className="w-full h-full object-cover grayscale shadow-[-30px_30px_0px_0px_rgba(14,165,233,0.2)]"
                />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-sky-500 flex items-center justify-center font-serif text-4xl rotate-180">“</div>
              </div>
              <div className="max-w-3xl text-center lg:text-right">
                <p className="text-3xl md:text-5xl font-serif italic text-slate-100 mb-10 leading-tight">
                  “Their global reach and financial strength gave us peace of mind when expanding our fuel supply chain.”
                </p>
                <div className="font-bold uppercase tracking-[0.3em] text-lg text-sky-500">— Anna Kim, Dubai</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
