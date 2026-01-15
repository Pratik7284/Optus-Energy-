
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const logoUrl = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/CbexEfr9R7B7E2oF/optusenergy-logo-tRBYRgNpB4t3a8js.png";

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center mb-6">
            <img 
              src={logoUrl} 
              alt="Optus Energy Logo" 
              className="h-8 w-auto object-contain" 
            />
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Fueling global markets with flexible, buyer-friendly solutions from Houston to Dubai. Professional services, genuine products.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-orange-600 hover:text-white transition-all shadow-sm">
              <span className="text-xs">FB</span>
            </a>
            <a href="#" className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white transition-all shadow-sm">
              <span className="text-xs">IG</span>
            </a>
            <a href="#" className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
              <span className="text-xs">X</span>
            </a>
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-sm uppercase tracking-widest text-slate-900 mb-6 underline decoration-orange-600 decoration-2 underline-offset-8">Links</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-slate-600 hover:text-orange-600 text-sm transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-slate-600 hover:text-orange-600 text-sm transition-colors">Our Services</Link></li>
            <li><Link to="/procedures" className="text-slate-600 hover:text-orange-600 text-sm transition-colors">Procedures</Link></li>
            <li><Link to="/contact" className="text-slate-600 hover:text-orange-600 text-sm transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-sm uppercase tracking-widest text-slate-900 mb-6 underline decoration-sky-500 decoration-2 underline-offset-8">Contact</h4>
          <ul className="space-y-4">
            <li className="text-slate-600 text-sm">Dubai, UAE (HQ)</li>
            <li className="text-slate-600 text-sm">Houston, Texas, USA</li>
            <li className="text-slate-600 text-sm">dan@optusenergy.com</li>
            <li className="text-slate-600 text-sm">+1-702-727-6945</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-sm uppercase tracking-widest text-slate-900 mb-6 underline decoration-orange-600 decoration-2 underline-offset-8">Newsletter</h4>
          <p className="text-slate-600 text-sm mb-4">Stay updated on our fuel options.</p>
          <div className="flex">
            <input type="email" placeholder="Your email" className="bg-white border border-slate-200 px-4 py-2 text-sm focus:outline-none w-full border-r-0" />
            <button className="bg-slate-900 text-white px-4 py-2 text-xs font-bold uppercase hover:bg-orange-600 transition-all">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-slate-500 text-xs">
          &copy; 2025 Optus Energy. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-slate-500 hover:text-black text-xs">Privacy Policy</a>
          <a href="#" className="text-slate-500 hover:text-black text-xs">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
