
import React from 'react';

const Services: React.FC = () => {
  const fuels = [
    { name: 'Jet A1', image: 'https://jet-a1-fuel.com/photo/j1.jpg' },
    { name: 'D6', image: 'https://img.etimg.com/thumb/width-1200,height-1200,imgsize-72696,resizemode-75,msid-49878652/industry/energy/oil-gas/about-11-12-bcm-gas-of-ongc-shifted-to-rils-kg-d6-dm.jpg' },
    { name: 'EN590 / ULSD', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWJ2rsFLzoV4OF5hdDNvNkl4z5l6vB8Q3QA&s' },
    { name: 'Additional Products', image: 'https://images.unsplash.com/photo-1676581390369-f4170bd8be43?auto=format&fit=crop&w=503&h=464' },
  ];

  const deliveryOptions = [
    { name: 'Tank-to-Tank (TTT)', icon: '⚓', accent: 'border-orange-600' },
    { name: 'Tank Takeover (TTO)', icon: '🏢', accent: 'border-sky-500' },
    { name: 'Tank-to-Vessel (TTV)', icon: '🚢', accent: 'border-orange-600' },
    { name: 'Vessel Takeover (VTO)', icon: '🌊', accent: 'border-sky-500' },
  ];

  const projects = [
    {
      title: 'Jet A1 Supply',
      description: 'Reliable jet fuel from Houston to Dubai.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      accent: 'text-sky-500'
    },
    {
      title: 'Flexible Terms',
      description: 'Buyer-friendly procedures that work for you.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      accent: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-32 md:py-40 bg-slate-950 text-white relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-slate-950/85 z-10"></div>
            <img src="https://corporate.nvisionglobal.com/wp-content/uploads/2023/12/flexible-logistics.jpg" className="w-full h-full object-cover" alt="Services" />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-20 w-full">
          <h1 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-orange-600 mb-6 md:mb-8">Expertise</h1>
          <h2 className="text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-serif font-bold italic mb-6 md:mb-10 leading-[1.1] md:leading-[0.9]">Our Services</h2>
          <p className="text-lg md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
            Fuel supply tailored to your needs with flexible terms and an expansive global logistics network.
          </p>
        </div>
      </section>

      {/* Available Fuels Grid */}
      <section className="py-16 md:py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-20">
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 border-l-[8px] md:border-l-[12px] border-orange-600 pl-6 md:pl-10 leading-none py-1 md:py-2">Available Fuels</h3>
            <p className="text-base md:text-xl text-slate-500 mt-4 md:mt-6 max-w-2xl">Premium energy products sourced from trusted refineries worldwide, meeting stringent international quality standards.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {fuels.map((fuel, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700 cursor-default">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={fuel.image} 
                    alt={fuel.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <h4 className="text-white font-bold text-lg md:text-2xl tracking-tight">{fuel.name}</h4>
                  <div className={`h-1 w-12 ${idx % 2 === 0 ? 'bg-orange-600' : 'bg-sky-500'} mt-3 md:mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 md:mb-24">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-orange-600 mb-4 md:mb-6">Execution</h3>
            <h4 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold text-slate-900 italic mb-4">Projects</h4>
            <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto font-light">
              Fuel delivery tailored to your global needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white p-8 md:p-12 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                <div className={`${proj.accent} mb-6 md:mb-8 transform group-hover:scale-110 transition-transform duration-500 inline-block`}>
                  {proj.icon}
                </div>
                <h5 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-4 md:mb-6">{proj.title}</h5>
                <p className="text-slate-500 leading-relaxed font-light text-base md:text-lg">
                  {proj.description}
                </p>
                <div className={`mt-6 md:mt-8 h-1 w-12 ${proj.accent.replace('text-', 'bg-')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Procedures */}
      <section className="py-16 md:py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 lg:order-1 relative mt-10 lg:mt-0">
              <div className="absolute -inset-4 md:-inset-8 bg-slate-200 -z-10 rotate-1"></div>
              <img 
                src="https://img.freepik.com/free-photo/global-logistics-transportation-network_23-2152005448.jpg?semt=ais_hybrid&w=740&q=80" 
                alt="Logistics" 
                className="w-full h-[400px] md:h-[700px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 md:mb-10 leading-tight">CIF & FOB Delivery</h3>
              <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-12 leading-relaxed">We follow rigorous, industry-standard supply procedures to ensure secure transfers and complete buyer protection at every stage of the transaction.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {deliveryOptions.map((opt, idx) => (
                  <div key={idx} className={`p-6 md:p-10 bg-white border-2 border-transparent hover:${opt.accent} transition-all group shadow-sm hover:shadow-lg`}>
                    <div className="text-3xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform inline-block grayscale group-hover:grayscale-0">{opt.icon}</div>
                    <h4 className={`font-bold text-base md:text-xl text-slate-900 group-hover:text-slate-900 transition-colors uppercase tracking-tight`}>{opt.name}</h4>
                    <div className={`h-1 w-12 ${opt.accent.replace('border-', 'bg-')} mt-3 md:mt-4`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Operations Stats */}
      <section className="py-16 md:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
                <h3 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 md:mb-10 leading-tight">Global Strategic Hubs</h3>
                <p className="text-slate-400 text-base md:text-xl mb-8 md:mb-12 leading-relaxed">Our presence is strategically centered around the world's most vital energy corridors and trading centers.</p>
                <div className="space-y-6 md:space-y-8">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4 md:pb-6 group cursor-default">
                        <span className="text-xl md:text-3xl font-serif group-hover:text-orange-600 transition-colors">Dubai, UAE</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">HQ / Primary Hub</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-4 md:pb-6 group cursor-default">
                        <span className="text-xl md:text-3xl font-serif group-hover:text-sky-500 transition-colors">Houston, USA</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Trading Hub</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-4 md:pb-6 group cursor-default">
                        <span className="text-xl md:text-3xl font-serif group-hover:text-orange-600 transition-colors">Wyoming, USA</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Logistics Base</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-10 lg:pt-0">
                <div className="bg-white/5 p-8 md:p-16 text-center backdrop-blur-md border border-white/10 shadow-2xl">
                    <div className="text-4xl md:text-7xl font-serif font-bold text-orange-600 mb-2 md:mb-4">3</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Current Hubs</div>
                </div>
                <div className="bg-white/5 p-8 md:p-16 text-center backdrop-blur-md border border-white/10 shadow-2xl mt-8 md:mt-16">
                    <div className="text-4xl md:text-7xl font-serif font-bold text-sky-500 mb-2 md:mb-4">3+</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Planned Ports</div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
