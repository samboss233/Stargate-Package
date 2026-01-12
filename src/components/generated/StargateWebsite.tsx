import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimation, useInView } from 'framer-motion';
import { Menu, X, ArrowRight, Database, Cloud, Zap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Brain, Server } from 'lucide-react';
import { StargateLogo } from './StargateLogo';

// --- Types ---
type NavItem = {
  name: string;
  href: string;
};
type ServiceCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  delay?: number;
};

// --- Constants ---
const NAV_ITEMS: NavItem[] = [{
  name: 'About Us',
  href: '#about'
}, {
  name: 'Services',
  href: '#services'
}, {
  name: 'Partners',
  href: '#partners'
}, {
  name: 'Contact Us',
  href: '/contact'
}];
const SERVICES = [{
  title: 'Enterprise Resource Planning Systems',
  description: 'Specialized implementation of financial management systems for large-scale enterprise control.',
  imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600'
}, {
  title: 'Data Integration & Analytics',
  description: 'Transforming complex data silos into real-time decision-making dashboards and insights.',
  imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600'
}, {
  title: 'Modernization',
  description: 'Updating legacy on-premises applications, infrastructure, and processes to leverage cloud-native technologies like microservices, serverless computing, and managed services.',
  imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=600'
}, {
  title: 'Workflow Automation',
  description: 'Intelligent automation that eliminates manual tasks and accelerates business efficiency using message queues, Application Programming Interfaces (APIs), and orchestration platforms.',
  imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800&h=600'
}];
const CAPABILITIES = [{
  title: 'Cloud Infrastructure',
  detail: 'AWS / Azure'
}, {
  title: 'Cybersecurity',
  detail: 'Enterprise Grade'
}, {
  title: 'Global Presence',
  detail: 'USA / Ghana'
}, {
  title: 'Consultants',
  detail: '500+ Experts'
}];
const PARTNERS = [{
  name: 'AWS',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
}, {
  name: 'Azure',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg'
}, {
  name: 'Google Cloud',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg'
}, {
  name: 'Microsoft',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
}, {
  name: 'IBM',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
}, {
  name: 'Oracle',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg'
}, {
  name: 'Salesforce',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg'
}, {
  name: 'SAP',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg'
}];
const VIDEO_LEADERS = [{
  name: 'Sam Altman',
  company: 'OpenAI',
  title: 'Interview on AI & Policy',
  thumbnail: '/images/default-video-thumb.svg',
  videoUrl: 'https://www.youtube.com/results?search_query=sam+altman+interview'
}, {
  name: 'Sundar Pichai',
  company: 'Google',
  title: 'Conversation on AI & Products',
  thumbnail: '/images/default-video-thumb.svg',
  videoUrl: 'https://www.youtube.com/results?search_query=sundar+pichai+interview'
}, {
  name: 'Jensen Huang',
  company: 'NVIDIA',
  title: 'GTC / Tech Leadership Interview',
  thumbnail: '/images/default-video-thumb.svg',
  videoUrl: 'https://www.youtube.com/results?search_query=jensen+huang+interview'
}, {
  name: 'Satya Nadella',
  company: 'Microsoft',
  title: 'On Cloud & AI (Interview)',
  thumbnail: '/images/default-video-thumb.svg',
  videoUrl: 'https://www.youtube.com/results?search_query=satya+nadella+interview'
}, {
  name: 'Tim Cook',
  company: 'Apple',
  title: 'Interview on Product & Privacy',
  thumbnail: '/images/default-video-thumb.svg',
  videoUrl: 'https://www.youtube.com/results?search_query=tim+cook+interview'
}, {
  name: 'Demis Hassabis',
  company: 'DeepMind',
  title: 'AI Research & Society (Interview)',
  thumbnail: '/images/default-video-thumb.svg',
  videoUrl: 'https://www.youtube.com/results?search_query=demis+hassabis+interview'
}];

// --- Subcomponents ---

const ServiceCard = ({
  imageUrl,
  title,
  description,
  delay = 0
}: ServiceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6,
    delay
  }} viewport={{
    once: false,
    amount: 0.3
  }} className="group" style={{
    perspective: '1000px'
  }} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)} onClick={() => setIsFlipped(!isFlipped)}>
    <motion.div className="relative w-full h-[400px]" animate={{
      rotateY: isFlipped ? 180 : 0,
      translateY: isFlipped ? -8 : 0
    }} transition={{
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }} style={{
      transformStyle: 'preserve-3d',
      boxShadow: isFlipped ? '0 20px 60px rgba(0, 0, 0, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      {/* FRONT FACE - Title Only */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden border border-black/5" style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        background: '#FFFFFF'
      }}>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Image */}
          <div className="relative w-full h-[240px] overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          </div>
          
          {/* Title */}
          <div className="flex-1 flex items-center justify-center px-8">
            <h3 className="text-center text-[#333333]" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '1.2'
            }}>
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* BACK FACE - Description */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden border border-black/5" style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
        background: '#FFFFFF'
      }}>
        <div className="w-full h-full flex items-center justify-center p-6">
          <p className="text-[#555555]" style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.6',
            textAlign: 'center'
          }}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  </motion.div>;
};
type VideoCardProps = {
  name: string;
  company: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
};
const VideoCard = ({
  name,
  company,
  title,
  thumbnail,
  videoUrl
}: VideoCardProps) => {
  return <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="group flex-shrink-0 w-[380px] cursor-pointer block">
      <div className="relative overflow-hidden rounded-2xl bg-black">
        {/* 16:9 Thumbnail */}
        <div className="relative w-full aspect-video overflow-hidden">
          <img
            src={thumbnail || '/images/default-video-thumb.svg'}
            alt={`${name} - ${title}`}
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              if (img && img.src.indexOf('/images/default-video-thumb.svg') === -1) {
                img.src = '/images/default-video-thumb.svg';
              }
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />
          
          {/* Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
              <div className="w-0 h-0 border-l-[18px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
          <h3 className="text-2xl font-bold text-white mb-1" style={{
          fontFamily: 'Inter, sans-serif'
        }}>
            {name}
          </h3>
          <p className="text-sm text-white/80 mb-2">{company}</p>
          <p className="text-base text-white/90">{title}</p>
        </div>
      </div>
    </a>;
};
type CircularProgressCounterProps = {
  percentage: number;
  label: string;
  color: string;
  delay?: number;
};
const CircularProgressCounter = ({
  percentage,
  label,
  color,
  delay = 0
}: CircularProgressCounterProps) => {
  const [ringProgress, setRingProgress] = useState(0);
  const [count, setCount] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px"
  });

  // Circle specs: 200px outer diameter = 100px radius, 25px stroke width
  const radius = 87.5; // 200px diameter - 25px stroke = 175px inner circle / 2
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - ringProgress / 100 * circumference;
  useEffect(() => {
    if (isInView) {
      // Reset all states when coming back into view
      setRingProgress(0);
      setCount(0);
      setTextVisible(false);

      // Ring sweep animation (starts immediately, takes 1500ms)
      const ringTimeout = setTimeout(() => {
        const ringDuration = 1500;
        const ringSteps = 60;
        const ringIncrement = percentage / ringSteps;
        const ringStepDuration = ringDuration / ringSteps;
        let currentRingStep = 0;
        const ringTimer = setInterval(() => {
          currentRingStep++;
          if (currentRingStep <= ringSteps) {
            setRingProgress(Math.min(Math.round(ringIncrement * currentRingStep), percentage));
          } else {
            clearInterval(ringTimer);
          }
        }, ringStepDuration);
      }, delay);

      // Number count-up (starts 400ms after ring starts, takes 1200ms)
      const countTimeout = setTimeout(() => {
        const countDuration = 1200;
        const countSteps = 60;
        const countIncrement = percentage / countSteps;
        const countStepDuration = countDuration / countSteps;
        let currentCountStep = 0;
        const countTimer = setInterval(() => {
          currentCountStep++;
          if (currentCountStep <= countSteps) {
            setCount(Math.min(Math.round(countIncrement * currentCountStep), percentage));
          } else {
            clearInterval(countTimer);
          }
        }, countStepDuration);
      }, delay + 400);

      // Text fade-in (starts 1000ms after count starts)
      const textTimeout = setTimeout(() => {
        setTextVisible(true);
      }, delay + 1400);
      return () => {
        clearTimeout(ringTimeout);
        clearTimeout(countTimeout);
        clearTimeout(textTimeout);
      };
    }
  }, [isInView, percentage, delay]);
  return <div ref={ref} className="flex flex-col items-center justify-start w-full">
      {/* Circular Progress Ring - responsive sizes */}
      <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] flex items-center justify-center mb-3">
        <svg viewBox="0 0 200 200" className="absolute transform -rotate-90 w-full h-full">
          {/* Background Circle */}
          <circle cx="100" cy="100" r={radius} stroke="#e5e7eb" strokeWidth="25" fill="none" />
          {/* Progress Circle with gradient */}
          <circle cx="100" cy="100" r={radius} stroke={color} strokeWidth="25" fill="none" strokeDasharray={circumference} strokeDashoffset={offset} className="transition-all duration-75 ease-out" strokeLinecap="round" />
        </svg>
        
        {/* Center Content - Percentage Number ONLY */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-none tabular-nums" style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          color: '#000000'
        }}>
            {count}%
          </div>
        </div>
      </div>
      
      {/* Label Text - Single line, clean, below the circle */}
      <div className="text-center px-3 transition-opacity duration-500 min-h-[64px]" style={{
      opacity: textVisible ? 1 : 0,
      maxWidth: '280px'
    }}>
        <p className="text-sm md:text-base leading-relaxed text-black/60">
          {label}
        </p>
      </div>
    </div>;
};

// @component: StargateWebsite
export const StargateWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPartnerIndex, setHoveredPartnerIndex] = useState<number | null>(null);
  const [videoCarouselScroll, setVideoCarouselScroll] = useState(0);
  const videoCarouselRef = useRef<HTMLDivElement>(null);
  const carouselControls = useAnimation();
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const heroRef = useRef(null);
  const {
    scrollY
  } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen bg-white font-sans text-black antialiased">
      {/* Scroll Progress Indicator */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black origin-left z-[100]" style={{
      scaleX
    }} />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-2xl py-3 border-b border-black/10 shadow-sm' : 'bg-white/60 backdrop-blur-sm py-5'}`}>
        <div className="max-w-[980px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <StargateLogo className="h-6 w-auto brightness-0" width={200} height={40} />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_ITEMS.map(item => item.name === 'Contact Us' ? <button key={item.name} onClick={() => {
            window.history.pushState({}, '', '/contact');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }} className="text-[14px] font-normal text-black/80 hover:text-black transition-colors cursor-pointer">
                  {item.name}
                </button> : <a key={item.name} href={item.href} className="text-[14px] font-normal text-black/80 hover:text-black transition-colors">
                  {item.name}
                </a>)}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-black/10">
            <div className="max-w-[980px] mx-auto px-6 py-6 space-y-4">
              {NAV_ITEMS.map(item => item.name === 'Contact Us' ? <button key={item.name} onClick={() => {
            setIsMenuOpen(false);
            window.history.pushState({}, '', '/contact');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }} className="block text-[17px] text-black/80 hover:text-black cursor-pointer w-full text-left">
                    {item.name}
                  </button> : <a key={item.name} href={item.href} className="block text-[17px] text-black/80 hover:text-black" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>)}
            </div>
          </motion.div>}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: "url('/skylinebg.jpeg')", // ← change to this
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero">
          <motion.div style={{
          opacity: heroOpacity,
          scale: heroScale
        }} className="relative z-10 max-w-[980px] mx-auto px-6 text-center">
            <div className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white/100 leading-[1.05] mb-6">
              {(() => {
                const text = "Harnessing the power of technology.";
                const tokens = text.match(/\S+|\s/g) || [];
                return tokens.map((token, tIndex) => {
                  if (/\s/.test(token)) {
                    return <motion.span key={tIndex} className="whitespace-pre">{token}</motion.span>;
                  }
                  return (
                    <motion.span key={tIndex} className="word-no-break-mobile inline-block mr-[0.15em]">
                      {token.split("").map((char, cIndex) => (
                        <motion.span key={`${tIndex}-${cIndex}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 + (tIndex + cIndex) * 0.03, ease: [0.33, 1, 0.68, 1] }} className="inline-block">
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                  );
                });
              })()}
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-xl md:text-2xl text-white/100 font-semibold leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              <span className="inline-block bg-black/45 backdrop-blur-sm px-5 py-3 rounded-xl" style={{ textShadow: '0 6px 18px rgba(0,0,0,0.6)' }}>
                The strategic partner who will help you ask the tough questions – and find the right answers.
              </span>
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.8
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#services" className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full text-[17px] font-medium hover:bg-black/80 transition-all">
                Explore services
              </a>
              <button
                onClick={() => {
                  window.history.pushState({}, '', '/contact');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="inline-flex items-center px-8 py-3 text-white text-[17px] font-medium hover:text-white transition-colors cursor-pointer"
                style={{ color: '#fff' }} // ← ensures text stays white even on hover
              >
                Contact us <ArrowRight size={18} className="ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is Stargate Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: false,
          amount: 0.3
        }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black/90 mb-6">
              Who Are We?
            </h2>
          </motion.div>
          
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Team Photo */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            ease: "easeInOut"
          }} viewport={{
            once: false,
            amount: 0.3
          }} className="relative rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800&h=900" alt="African female IT professional smiling at camera with laptop in modern office" className="w-full h-auto object-cover" />
            </motion.div>

            {/* Right: Body Text with Sequential Animations */}
            <div className="space-y-6">
              <motion.p initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeInOut"
            }} viewport={{
              once: false,
              amount: 0.3
            }} className="text-xl text-black/60 leading-relaxed">
                We are your strategic partner in navigating the complexities of technology to unlock your business's full potential. We ask the tough questions and deliver the right answers by leveraging deep expertise across strategy and transformation, applications and technology, engineering, and operations.
              </motion.p>
              <motion.p initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 1.5,
              ease: "easeInOut"
            }} viewport={{
              once: false,
              amount: 0.3
            }} className="text-xl text-black/60 leading-relaxed">
                Our focus is on driving measurable value in customer experience, intelligent industry, and enterprise management. We guide you in embracing transformative technologies like cloud, data, artificial intelligence, and cybersecurity—while also optimizing your environmental impact.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: false,
          amount: 0.3
        }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black/90 mb-6">
              Core services.
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Specialized capabilities designed to tackle the most complex enterprise challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => <ServiceCard key={service.title} {...service} delay={index * 0.1} />)}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: false,
          amount: 0.3
        }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black/90 mb-6">
              Built for scale.
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Enterprise-grade infrastructure with global reach and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 bg-white px-4 items-start">
            <div className="p-4 flex flex-col items-center h-full">
              <CircularProgressCounter percentage={50} label="Of organizations will adopt industry-specific cloud platforms by 2029 to accelerate business initiatives" color="#007BFF" delay={0} />
            </div>
            <div className="p-4 flex flex-col items-center h-full">
              <CircularProgressCounter percentage={40} label="Of leading companies will use hybrid computing architectures in mission-critical workflows by 2028" color="#8B5CF6" delay={100} />
            </div>
            <div className="p-4 flex flex-col items-center h-full">
              <CircularProgressCounter percentage={50} label="Of cloud compute resources will support AI workloads by 2029" color="#14B8A6" delay={200} />
            </div>
            <div className="p-4 flex flex-col items-center h-full">
              <CircularProgressCounter percentage={27} label="Reduction in cost per user when migrating from on-premises to AWS" color="#F59E0B" delay={300} />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-32 bg-gray-50">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: false,
          amount: 0.3
        }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black/90 mb-6">
              Our partners.
            </h2>
          </motion.div>

          <div className="relative overflow-hidden py-8">
            {/* Carousel Container with CSS Animation */}
            <div className="flex items-center gap-16" style={{
            animation: 'scroll-left 20s linear infinite',
            width: 'max-content'
          }}>
              {/* Render partners three times for seamless loop */}
              {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => <div key={`${partner.name}-${idx}`} className="flex-shrink-0 w-[180px] h-[100px] flex items-center justify-center transition-all duration-300" onMouseEnter={() => setHoveredPartnerIndex(idx)} onMouseLeave={() => setHoveredPartnerIndex(null)} style={{
              filter: hoveredPartnerIndex === idx ? 'grayscale(0)' : 'grayscale(1)',
              transform: hoveredPartnerIndex === idx ? 'scale(1.1)' : 'scale(1)'
            }}>
                  <img src={partner.logo} alt={partner.name} className="w-[140px] h-[70px] object-contain" />
                </div>)}
            </div>
          </div>

          {/* CSS Keyframes */}
          <style>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-${PARTNERS.length * 196}px);
              }
            }
          `}</style>

          {/* Video Carousel Section */}
          <div className="max-w-[1400px] mx-auto px-6 mt-20">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: false,
            amount: 0.3
          }} className="text-center mb-16">
              <h3 className="text-5xl md:text-6xl font-semibold tracking-tight text-black/90 mb-6">
                Industry Insights.
              </h3>
              <p className="text-xl text-black/60 max-w-2xl mx-auto">
                Insights from the pioneers shaping tomorrow's technology
              </p>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden py-8">
              {/* Carousel with CSS Animation for continuous loop */}
              <div className="flex items-center gap-6" style={{
              animation: 'scroll-videos 30s linear infinite',
              width: 'max-content'
            }}>
                {/* Render video leaders three times for seamless loop */}
                {[...VIDEO_LEADERS, ...VIDEO_LEADERS, ...VIDEO_LEADERS].map((leader, idx) => <VideoCard key={`${leader.name}-${idx}`} {...leader} />)}
              </div>
            </div>

            {/* CSS Keyframes for video carousel */}
            <style>{`
              @keyframes scroll-videos {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-${VIDEO_LEADERS.length * 404}px);
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: false,
          amount: 0.3
        }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black/90 mb-6">
              Let's get the conversation going
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Reach out to discuss your next strategic move or technical challenge.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Get in touch button */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: false,
            amount: 0.3
          }} className="flex items-center justify-center lg:col-span-2">
              <button onClick={() => {
              window.history.pushState({}, '', '/contact');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }} className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full text-[17px] font-medium hover:bg-black/80 transition-all cursor-pointer">
                Get in touch
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-black/5">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-8 mb-6 md:mb-0">
              <a href="#" className="text-[14px] text-black/60 hover:text-black transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[14px] text-black/60 hover:text-black transition-colors">
                Terms of Service
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={16} className="text-black/60" />
              </a>
              <a href="#" className="w-8 h-8 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={16} className="text-black/60" />
              </a>
              <a href="#" className="w-8 h-8 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={16} className="text-black/60" />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 text-[12px] text-black/40">
            © 2026 Stargate Technology Consultancy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>;
};