import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, FileText, ChevronRight, Github, Linkedin, Database } from "lucide-react";
import { SiPython, SiR, SiPostgresql, SiTensorflow, SiPytorch, SiScikitlearn, SiPlotly, SiApachespark, SiGooglecloud, SiDatabricks, SiGit } from "react-icons/si";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitted">("idle");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitted");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white p-6 md:p-8 flex justify-between items-center pointer-events-none">
        <div className="font-mono text-sm tracking-tighter uppercase pointer-events-auto">
          JN — DATA SCIENTIST
        </div>
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest pointer-events-auto">
          <a href="#expertise" className="hover:opacity-50 transition-opacity">Expertise</a>
          <a href="#experience" className="hover:opacity-50 transition-opacity">Experience</a>
          <a href="#projects" className="hover:opacity-50 transition-opacity">Projects</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-primary text-white px-6 md:px-16 lg:px-24">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </motion.div>

        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={STAGGER_CONTAINER}
          >
            <motion.p variants={FADE_UP} className="font-mono text-sm md:text-base text-blue-200 mb-6 uppercase tracking-widest">
              Digital Lab Notebook
            </motion.p>
            <motion.h1 variants={FADE_UP} className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight mb-8">
              Jibrin<br/>Nasiruddin.
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-xl md:text-2xl text-blue-100 max-w-2xl font-light leading-relaxed mb-12">
              Data Scientist specializing in predictive modeling, machine learning, and turning complex datasets into clear, actionable intelligence.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 text-sm font-mono uppercase tracking-wider hover:bg-blue-50 transition-colors">
                View Research <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3 text-sm font-mono uppercase tracking-wider hover:bg-white/10 transition-colors">
                Contact
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills / Expertise Section */}
      <section id="expertise" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Expertise &<br/>Methodology</h2>
              <p className="text-gray-500 font-mono text-sm leading-relaxed">
                A rigorous approach to data requires the right tools. My stack is built for scale, precision, and reproducibility.
              </p>
            </div>
            
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                <div className="space-y-6">
                  <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">Core Languages & DB</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3"><SiPython className="w-5 h-5 text-primary" /> <span>Python</span></li>
                    <li className="flex items-center gap-3"><SiR className="w-5 h-5 text-primary" /> <span>R</span></li>
                    <li className="flex items-center gap-3"><SiPostgresql className="w-5 h-5 text-primary" /> <span>SQL (PostgreSQL, MySQL)</span></li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">Machine Learning</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3"><SiScikitlearn className="w-5 h-5 text-primary" /> <span>scikit-learn</span></li>
                    <li className="flex items-center gap-3"><SiTensorflow className="w-5 h-5 text-primary" /> <span>TensorFlow</span></li>
                    <li className="flex items-center gap-3"><SiPytorch className="w-5 h-5 text-primary" /> <span>PyTorch</span></li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">Analytics & Viz</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3"><SiPlotly className="w-5 h-5 text-primary" /> <span>Tableau / Plotly</span></li>
                    <li className="flex items-center gap-3"><Database className="w-5 h-5 text-primary" /> <span>Pandas / NumPy</span></li>
                    <li className="flex items-center gap-3"><Database className="w-5 h-5 text-primary" /> <span>Matplotlib / Seaborn</span></li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">Data Eng & Cloud</h3>
                  <ul className="space-y-4 flex flex-wrap gap-x-6 gap-y-4">
                    <li className="flex items-center gap-3"><SiApachespark className="w-5 h-5 text-primary" /> <span>Spark</span></li>
                    <li className="flex items-center gap-3"><SiDatabricks className="w-5 h-5 text-primary" /> <span>AWS</span></li>
                    <li className="flex items-center gap-3"><SiGooglecloud className="w-5 h-5 text-primary" /> <span>GCP</span></li>
                    <li className="flex items-center gap-3"><SiGit className="w-5 h-5 text-primary" /> <span>Git</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CONTAINER}
          >
            <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl font-serif mb-16 text-center">Professional Tenure</motion.h2>
            
            <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gray-200">
              
              <motion.div variants={FADE_UP} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-50 bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 md:p-8 border border-gray-100 shadow-sm">
                  <div className="flex flex-col mb-4">
                    <span className="font-mono text-xs text-primary mb-1">2021 — Present</span>
                    <h3 className="text-xl font-serif">Senior Data Scientist</h3>
                    <span className="text-gray-500 text-sm">Quantum Analytics Corp</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside ml-2 marker:text-gray-300">
                    <li>Architected an NLP-driven sentiment analysis engine improving customer retention models by 18%.</li>
                    <li>Spearheaded the migration of legacy batch-processing pipelines to Apache Spark, reducing compute time by 40%.</li>
                    <li>Mentored a team of 4 junior analysts, establishing code review standards and MLOps best practices.</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-50 bg-white border-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 md:p-8 border border-gray-100 shadow-sm">
                  <div className="flex flex-col mb-4">
                    <span className="font-mono text-xs text-gray-500 mb-1">2018 — 2021</span>
                    <h3 className="text-xl font-serif">Data Scientist</h3>
                    <span className="text-gray-500 text-sm">Horizon Consulting</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside ml-2 marker:text-gray-300">
                    <li>Developed predictive maintenance models for manufacturing clients, decreasing downtime by 22% annually.</li>
                    <li>Built interactive Tableau dashboards utilized by C-suite executives for real-time operational tracking.</li>
                    <li>Implemented automated anomaly detection in financial data streams using Isolation Forests.</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-50 bg-white border-gray-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 md:p-8 border border-gray-100 shadow-sm">
                  <div className="flex flex-col mb-4">
                    <span className="font-mono text-xs text-gray-500 mb-1">2016 — 2018</span>
                    <h3 className="text-xl font-serif">Data Analyst</h3>
                    <span className="text-gray-500 text-sm">Nexus Retail Solutions</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside ml-2 marker:text-gray-300">
                    <li>Conducted A/B testing on e-commerce platforms resulting in a 12% conversion rate uplift.</li>
                    <li>Designed and maintained complex SQL views to consolidate data from 5 disparate sources.</li>
                  </ul>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-serif">Selected Works</h2>
            <a href="#" className="hidden md:flex items-center gap-2 font-mono text-sm hover:text-gray-500 transition-colors">
              View Github <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={FADE_UP}
              className="group cursor-pointer border border-gray-200 hover:border-primary transition-colors flex flex-col h-full"
            >
              <div className="bg-gray-50 aspect-video p-8 flex items-center justify-center border-b border-gray-200 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <Database className="w-16 h-16 text-gray-300 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white">
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-xs font-mono text-gray-600">PyTorch</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs font-mono text-gray-600">Transformers</span>
                </div>
                <h3 className="text-2xl font-serif mb-3">Contextual Sentiment Analyzer</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  A fine-tuned BERT model capable of extracting nuanced sentiment from highly specialized financial jargon, deployed as a scalable REST API.
                </p>
                <div className="flex items-center gap-2 font-mono text-sm text-primary">
                  Read Case Study <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={FADE_UP}
              className="group cursor-pointer border border-gray-200 hover:border-primary transition-colors flex flex-col h-full"
            >
              <div className="bg-gray-50 aspect-video p-8 flex items-center justify-center border-b border-gray-200 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>
                <SiTensorflow className="w-16 h-16 text-gray-300 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white">
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-xs font-mono text-gray-600">TensorFlow</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs font-mono text-gray-600">OpenCV</span>
                </div>
                <h3 className="text-2xl font-serif mb-3">Defect Vision Net</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  Computer vision pipeline for automated quality assurance on assembly lines. Achieved 99.2% accuracy in identifying micro-fractures in metallic components.
                </p>
                <div className="flex items-center gap-2 font-mono text-sm text-primary">
                  Read Case Study <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={FADE_UP}
              className="group cursor-pointer border border-gray-200 hover:border-primary transition-colors flex flex-col h-full"
            >
              <div className="bg-gray-50 aspect-video p-8 flex items-center justify-center border-b border-gray-200 overflow-hidden relative">
                <div className="w-full h-full border border-gray-200 grid grid-cols-4 grid-rows-4 group-hover:bg-primary/5 transition-colors">
                  {Array.from({length: 16}).map((_, i) => (
                    <div key={i} className="border border-gray-200"></div>
                  ))}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white">
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-xs font-mono text-gray-600">Prophet</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs font-mono text-gray-600">Pandas</span>
                </div>
                <h3 className="text-2xl font-serif mb-3">Macro-Economic Time Series</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  Robust forecasting models integrating 50+ macroeconomic indicators to predict supply chain volatility indices up to 6 months in advance.
                </p>
                <div className="flex items-center gap-2 font-mono text-sm text-primary">
                  Read Case Study <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={FADE_UP}
              className="group cursor-pointer border border-gray-200 hover:border-primary transition-colors flex flex-col h-full bg-primary text-white"
            >
              <div className="p-12 flex flex-col justify-center items-center text-center h-full border border-primary">
                <FileText className="w-12 h-12 mb-6 opacity-50" />
                <h3 className="text-2xl font-serif mb-3">Publications & Papers</h3>
                <p className="text-blue-200 text-sm mb-8 font-light">
                  Peer-reviewed research on algorithmic bias mitigation and efficient transformer architectures.
                </p>
                <div className="inline-flex items-center gap-2 font-mono text-sm text-white uppercase tracking-widest hover:text-blue-300 transition-colors">
                  View Google Scholar <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-primary text-white border-t border-primary-foreground/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif mb-8 border-b border-white/20 pb-4">Academic Background</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif mb-1">M.S. in Data Science</h3>
                <p className="font-mono text-sm text-blue-200 mb-2">University of Michigan, 2016</p>
                <p className="text-sm text-blue-100 font-light leading-relaxed">
                  Focus on Statistical Machine Learning and High-Dimensional Data Analysis. Thesis: "Optimizing Stochastic Gradient Descent in Non-convex Landscapes."
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-1">B.S. in Applied Mathematics</h3>
                <p className="font-mono text-sm text-blue-200 mb-2">Purdue University, 2014</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-serif mb-8 border-b border-white/20 pb-4">Certifications</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-white shrink-0" />
                <div>
                  <h3 className="font-serif text-lg">AWS Certified Machine Learning – Specialty</h3>
                  <p className="font-mono text-xs text-blue-200">Amazon Web Services, 2022</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-white shrink-0" />
                <div>
                  <h3 className="font-serif text-lg">Google Data Analytics Professional Certificate</h3>
                  <p className="font-mono text-xs text-blue-200">Google, 2020</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-white shrink-0" />
                <div>
                  <h3 className="font-serif text-lg">Deep Learning Specialization</h3>
                  <p className="font-mono text-xs text-blue-200">DeepLearning.AI, 2019</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Initialize Connection</h2>
            <p className="text-gray-500 font-mono text-sm">Open for academic collaboration, consulting, and full-time roles.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 bg-gray-50 p-8 md:p-12 border border-gray-200">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">Direct Details</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="mailto:jibrin.nasiruddin@example.com" className="flex items-center gap-3 text-gray-800 hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                      <span className="font-medium text-sm">jibrin.nasiruddin@example.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 text-gray-800 hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span className="font-medium text-sm">linkedin.com/in/jibrinnasir</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 text-gray-800 hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                      <span className="font-medium text-sm">github.com/jibrindata</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">Location</h3>
                <p className="text-sm text-gray-700">San Francisco, CA<br/>Available Remote / Hybrid</p>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleFormSubmit} className="space-y-4" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-gray-500 uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border border-gray-300 p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Jane Doe"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-gray-500 uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border border-gray-300 p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="jane@example.com"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-gray-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white border border-gray-300 p-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Let's discuss a project..."
                    data-testid="input-message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-4 font-mono text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-50"
                  disabled={formStatus === "submitted"}
                  data-testid="button-submit-contact"
                >
                  {formStatus === "submitted" ? "Message Sent" : "Transmit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-16 lg:px-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-xs text-gray-400">
          © {new Date().getFullYear()} Jibrin Nasiruddin. All rights reserved.
        </div>
        <div className="font-mono text-xs text-gray-400">
          Designed with precision.
        </div>
      </footer>
    </div>
  );
}
