
import React, { useState, useEffect, useRef } from 'react';

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={cardRef} className="p-8 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group">
      <div className="text-5xl font-serif font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
        {prefix}{count}{suffix}
      </div>
      <div className="h-0.5 w-12 bg-orange-600 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{label}</div>
    </div>
  );
};

export default StatCard;
