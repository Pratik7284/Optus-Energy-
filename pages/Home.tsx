
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
      <section className="relative h-[90vh] flex items-center bg-slate-950">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop" 
            alt="Energy Refinery" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full text-white">
          <div className="max-w-4xl animate-fadeInUp">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-orange-500 text-lg">★★★★★</span>
              <span className="text-sm font-medium tracking-widest uppercase">Rated 4.8/5 by industry partners</span>
            </div>
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-serif font-bold mb-8 leading-[0.9]">
              Fueling Your <br />
              <span className="italic text-orange-500">Future.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light">
              Welcome to Optus Energy. Experience fuel transactions reimagined. Our cutting-edge digital platform connects buyers and sellers, making fuel trading seamless, secure, and transparent.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="bg-white text-slate-900 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-orange-600 hover:text-white transition-all shadow-lg text-center">
                Get Quote
              </Link>
              <Link to="/about" className="border border-white/30 backdrop-blur-md text-white px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-sky-500/20 hover:border-sky-500 transition-all text-center">
                Our Story
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="flex space-x-16 border-l border-white/20 pl-12 py-4">
            <div>
              <div className="text-5xl font-serif font-bold text-orange-500">150+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mt-2">Trusted Partners</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold text-sky-400">15yr</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mt-2">Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-orange-600 mb-6">Global Scale</h2>
              <h3 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-10 leading-tight">
                Fueling Your Global Needs
              </h3>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl">
                Optus Energy connects our worldwide refinery partners with flexible, buyer-friendly fuel supply solutions tailored to your operations. We bridge the gap between production and delivery with unparalleled efficiency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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
                className="w-full h-[600px] object-cover shadow-[40px_40px_0px_0px_rgba(249,115,22,0.1)] grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section with Gradient Accent */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-600/10 to-sky-500/5 skew-x-12 -mr-24"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Stay Connected</h2>
            <p className="text-slate-400 mb-12 text-xl max-w-2xl leading-relaxed">
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
                  className="flex-grow bg-white/5 border border-white/10 px-8 py-5 text-white focus:outline-none focus:bg-white/10 focus:border-orange-600 transition-all placeholder:text-slate-500 text-lg"
                />
                <button className="bg-white text-slate-900 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-orange-600 hover:text-white transition-all whitespace-nowrap">
                  {subscribed ? 'Joined' : 'Join Network'}
                </button>
              </div>
              {subscribed && (
                <p className="mt-6 text-orange-500 animate-pulse text-sm font-bold uppercase tracking-widest">
                  Success! You've been added to our list.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-sky-500 mb-6">Our Network</h2>
              <h3 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-10 leading-tight">Our Locations</h3>
              <p className="text-xl text-slate-600 mb-12 max-w-xl">From Wyoming to Dubai, our offices power your fuel needs worldwide with 24/7 coverage.</p>
              
              <div className="space-y-12">
                <div className="flex items-start space-x-8 group">
                  <div className="w-16 h-16 bg-slate-950 text-white flex-shrink-0 flex items-center justify-center font-bold text-xl group-hover:bg-orange-600 transition-colors">DXB</div>
                  <div className="border-b border-slate-100 pb-6 flex-grow">
                    <h4 className="font-bold text-2xl mb-2">Dubai, UAE</h4>
                    <p className="text-slate-500 font-light">Global Headquarters - Opening Soon</p>
                    <p className="text-slate-500 font-light">Strategic 24/7 Global Operations Center</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8 group">
                  <div className="w-16 h-16 bg-slate-100 text-slate-900 flex-shrink-0 flex items-center justify-center font-bold text-xl group-hover:bg-sky-500 group-hover:text-white transition-colors">HOU</div>
                  <div className="border-b border-slate-100 pb-6 flex-grow">
                    <h4 className="font-bold text-2xl mb-2">Houston, USA</h4>
                    <p className="text-slate-500 font-light">Energy Trading & North American Hub</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8 group">
                  <div className="w-16 h-16 bg-slate-100 text-slate-900 flex-shrink-0 flex items-center justify-center font-bold text-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">WYO</div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-2xl mb-2">Wyoming, USA</h4>
                    <p className="text-slate-500 font-light">Western US Strategic Operations Base</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="mt-16 inline-block font-bold text-sm uppercase tracking-[0.3em] text-slate-900 border-b-2 border-orange-600 pb-2 hover:text-orange-600 transition-all w-fit">
                Speak with an Expert
              </Link>
            </div>
            <div className="relative min-h-[600px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2069&auto=format&fit=crop" 
                alt="Dubai Office" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-orange-600/5 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
