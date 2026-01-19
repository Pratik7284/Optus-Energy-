
import React, { useState } from 'react';
import StatCard from '../components/StatCard';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-slate-950 py-32 md:py-0">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop" 
            alt="Energy Refinery" 
            className="w-full h-full object-cover"
          />
          {/* Deepened gradient for better text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/30"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full text-white">
          <div className="max-w-5xl animate-fadeInUp">
            <div className="flex items-center space-x-3 mb-6 md:mb-10">
              <div className="flex text-orange-500 text-lg md:text-xl">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-slate-300">
                Rated 4.8/5 by industry partners
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-[10rem] font-serif font-bold mb-8 md:mb-12 leading-[1.05] md:leading-[0.85] tracking-tight">
              Fueling Your <br />
              <span className="italic text-orange-500">Future.</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-100 mb-12 md:mb-16 leading-relaxed max-w-3xl font-light">
              Welcome to Optus Energy. Experience fuel transactions reimagined. Our cutting-edge digital platform connects buyers and sellers, making fuel trading <span className="text-white font-normal underline decoration-orange-500 decoration-2 underline-offset-8">seamless, secure, and transparent.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <Link to="/contact" className="bg-orange-600 text-white px-10 lg:px-16 py-5 lg:py-6 font-bold uppercase tracking-[0.2em] text-xs lg:text-sm hover:bg-white hover:text-slate-900 transition-all shadow-2xl text-center">
                Get Quote
              </Link>
              <Link to="/about" className="border-2 border-white/40 backdrop-blur-md text-white px-10 lg:px-16 py-5 lg:py-6 font-bold uppercase tracking-[0.2em] text-xs lg:text-sm hover:bg-white hover:text-slate-900 hover:border-white transition-all text-center">
                Our Story
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-16 right-6 lg:right-12 hidden xl:block">
          <div className="flex space-x-12 lg:space-x-20 border-l-2 border-orange-500 pl-12 py-6">
            <div>
              <div className="text-5xl lg:text-6xl font-serif font-bold text-white">150+</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-3">Trusted Partners</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-serif font-bold text-sky-400">15yr</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-3">Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 md:py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-orange-600 mb-8">Global Scale</h2>
              <h3 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-slate-900 mb-10 leading-[1.1]">
                Fueling Your <br/>Global Needs
              </h3>
              <p className="text-lg md:text-2xl text-slate-600 mb-12 md:mb-16 leading-relaxed max-w-2xl font-light">
                Optus Energy connects our worldwide refinery partners with flexible, buyer-friendly fuel supply solutions tailored to your operations. We bridge the gap between production and delivery with unparalleled efficiency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
                <StatCard label="Worldwide" value={150} suffix="+" />
                <StatCard label="Experience" value={15} suffix="Y" />
                <StatCard label="Est." value={2025} />
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-6 bg-slate-50 -z-10 transform -rotate-1"></div>
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop" 
                alt="Global Trade" 
                className="w-full aspect-[4/5] object-cover shadow-[40px_40px_0px_0px_rgba(249,115,22,0.1)] grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-600/10 to-sky-500/5 skew-x-12 -mr-24"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-10 leading-tight">Stay Connected</h2>
            <p className="text-slate-400 mb-12 md:mb-16 text-xl md:text-2xl max-w-2xl leading-relaxed font-light">
              Get updates on fuel options, market trends, and exclusive supply offers directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-2xl">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-white/5 border border-white/20 px-8 py-6 text-white focus:outline-none focus:bg-white/10 focus:border-orange-600 transition-all placeholder:text-slate-500 text-lg md:text-xl"
                />
                <button className="bg-white text-slate-900 px-12 py-6 font-bold uppercase tracking-widest text-sm hover:bg-orange-600 hover:text-white transition-all whitespace-nowrap shadow-xl">
                  {subscribed ? 'Joined' : 'Join Network'}
                </button>
              </div>
              {subscribed && (
                <p className="mt-8 text-orange-500 animate-pulse text-sm font-bold uppercase tracking-[0.4em]">
                  Success! You've been added to our list.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="flex flex-col justify-center">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-sky-500 mb-8">Our Network</h2>
              <h3 className="text-4xl md:text-8xl font-serif font-bold text-slate-900 mb-12 leading-none">Our Locations</h3>
              <p className="text-xl md:text-2xl text-slate-600 mb-16 max-w-xl font-light">From Wyoming to Dubai, our offices power your fuel needs worldwide with 24/7 coverage.</p>
              
              <div className="space-y-12">
                <div className="flex items-start space-x-8 group">
                  <div className="w-16 h-16 bg-slate-950 text-white flex-shrink-0 flex items-center justify-center font-bold text-xl group-hover:bg-orange-600 transition-colors">DXB</div>
                  <div className="border-b border-slate-100 pb-8 flex-grow">
                    <h4 className="font-bold text-2xl md:text-3xl mb-2">Dubai, UAE</h4>
                    <p className="text-slate-500 text-lg font-light">Global Headquarters - Opening Soon</p>
                    <p className="text-slate-500 text-base font-light opacity-60">Strategic 24/7 Global Operations Center</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8 group">
                  <div className="w-16 h-16 bg-slate-100 text-slate-900 flex-shrink-0 flex items-center justify-center font-bold text-xl group-hover:bg-sky-500 group-hover:text-white transition-colors">HOU</div>
                  <div className="border-b border-slate-100 pb-8 flex-grow">
                    <h4 className="font-bold text-2xl md:text-3xl mb-2">Houston, USA</h4>
                    <p className="text-slate-500 text-lg font-light">Energy Trading & North American Hub</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8 group">
                  <div className="w-16 h-16 bg-slate-100 text-slate-900 flex-shrink-0 flex items-center justify-center font-bold text-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">WYO</div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-2xl md:text-3xl mb-2">Wyoming, USA</h4>
                    <p className="text-slate-500 text-lg font-light">Western US Strategic Operations Base</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="mt-20 inline-block font-bold text-sm uppercase tracking-[0.4em] text-slate-900 border-b-4 border-orange-600 pb-4 hover:text-orange-600 hover:border-slate-900 transition-all w-fit">
                Speak with an Expert
              </Link>
            </div>
            <div className="relative min-h-[600px] md:h-[800px] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2069&auto=format&fit=crop" 
                alt="Dubai Office" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-orange-600/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
