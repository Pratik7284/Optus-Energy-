
export interface NavItem {
  label: string;
  path: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  image: string;
}

export interface FuelProduct {
  name: string;
  image: string;
}

export interface Procedure {
  title: string;
  description: string;
  image: string;
}
