
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white">
      {/* Hero Location Image */}
      <section className="relative h-[65vh] bg-slate-950 flex items-end">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2068&auto=format&fit=crop" 
          alt="Dubai Skyline" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full pb-16">
            <h1 className="text-xs font-bold uppercase tracking-[0.6em] text-orange-600 mb-6 animate-fadeIn">Inquiries</h1>
            <h2 className="text-6xl md:text-9xl font-serif font-bold text-slate-900 animate-fadeInUp italic leading-none">Get in Touch</h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Contact Details */}
          <div className="lg:col-span-5">
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-12 leading-tight">Reach out to Optus Energy for fuel supply inquiries or partnership opportunities.</h3>
            
            <div className="space-y-16 mt-12">
              <div className="group">
                <div className="text-xs font-bold uppercase tracking-[0.4em] text-orange-600 mb-4">Direct Email</div>
                <a href="mailto:dan@optusenergy.com" className="text-3xl md:text-4xl font-serif hover:text-orange-600 transition-colors border-b border-slate-200 pb-2">dan@optusenergy.com</a>
              </div>
              
              <div className="group">
                <div className="text-xs font-bold uppercase tracking-[0.4em] text-sky-500 mb-4">Primary Phone</div>
                <a href="tel:+17027276945" className="text-3xl md:text-4xl font-serif hover:text-sky-500 transition-colors border-b border-slate-200 pb-2">+1-702-727-6945</a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-16 border-t border-slate-100">
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-[0.3em] mb-6 text-slate-900">Dubai HQ</h4>
                  <p className="text-slate-500 text-lg leading-relaxed font-light">
                    Opening Soon<br />
                    Dubai, United Arab Emirates<br />
                    24/7 Global Hub
                  </p>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-[0.3em] mb-6 text-slate-900">USA Hub</h4>
                  <p className="text-slate-500 text-lg leading-relaxed font-light">
                    Energy Trading Hub<br />
                    Houston, Texas & Wyoming<br />
                    North American Logistics
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-12 lg:p-20 border border-slate-100 shadow-2xl relative">
                {isSent && (
                <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center text-white z-20 animate-fadeIn p-12 text-center">
                    <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mb-10 animate-bounce">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h4 className="text-4xl font-serif font-bold mb-6 text-white">Message Received</h4>
                    <p className="text-xl text-slate-400 font-light max-w-md">Thank you for reaching out. An Optus Energy representative will contact you shortly.</p>
                    <button onClick={() => setIsSent(false)} className="mt-12 text-sm font-bold uppercase tracking-[0.4em] text-orange-600 underline underline-offset-[12px]">Send another inquiry</button>
                </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Full Name</label>
                    <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-slate-300 py-4 focus:outline-none focus:border-orange-600 transition-all font-light text-xl"
                    placeholder="John Doe"
                    />
                </div>
                
                <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Email Address</label>
                    <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-slate-300 py-4 focus:outline-none focus:border-sky-500 transition-all font-light text-xl"
                    placeholder="john@company.com"
                    />
                </div>
                
                <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Message</label>
                    <textarea 
                    rows={5} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-slate-300 py-4 focus:outline-none focus:border-orange-600 transition-all font-light resize-none text-xl"
                    placeholder="How can we assist your business operations?"
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-slate-950 text-white py-6 font-bold uppercase tracking-[0.4em] text-sm hover:bg-orange-600 transition-all disabled:opacity-50 shadow-xl"
                >
                    {isSubmitting ? 'Processing...' : 'Send Inquiry'}
                </button>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
