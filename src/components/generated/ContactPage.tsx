import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
export const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    country: '',
    phone: '',
    topic: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compile user details in human-readable format
    const emailBody = `
Contact Form Submission from Stargate Website
=============================================

CONTACT INFORMATION:
--------------------
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

COMPANY INFORMATION:
--------------------
Company: ${formData.company}
Job Title: ${formData.jobTitle}
Country: ${formData.country}

INQUIRY DETAILS:
----------------
Topic of Interest: ${formData.topic}

MESSAGE:
--------
${formData.message}

=============================================
Submitted on: ${new Date().toLocaleString()}
    `.trim();

    // Create mailto link with compiled information
    const subject = `Contact Form: ${formData.topic} - ${formData.firstName} ${formData.lastName}`;
    const mailtoLink = `mailto:info@stargategh.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open default email client with pre-filled information
    window.location.href = mailtoLink;
    setSubmitted(true);
  };
  return <div className="min-h-screen bg-white font-sans text-black antialiased">
      {/* Simple Header with Back Button */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl py-3 border-b border-black/10">
        <div className="max-w-[980px] mx-auto px-6 flex items-center justify-between">
          <button onClick={() => {
          window.history.pushState({}, '', '/');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }} className="flex items-center text-black/80 hover:text-black transition-colors cursor-pointer">
            <ArrowLeft size={20} className="mr-2" />
            <span className="text-[14px] font-medium">Back to Home</span>
          </button>
        </div>
      </nav>

      {/* Contact Form Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          {!submitted ? <>
              {/* Header */}
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-black/90 mb-6">
                  Contact Us
                </h1>
                <p className="text-lg leading-relaxed text-black/60 max-w-3xl mx-auto">
                  Thank you for your interest in Stargate where we build for the future. 
                  If you would like to learn more or discuss how our solutions can help your business grow, 
                  please fill out the form below and we will be in touch.
                </p>
              </motion.div>

              {/* Form */}
              <motion.form initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-black/70 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all bg-white text-black" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-black/70 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all bg-white text-black" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all bg-white text-black" />
                </div>

                {/* Company & Job Title Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-black/70 mb-2">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all bg-white text-black" />
                  </div>
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-black/70 mb-2">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="jobTitle" name="jobTitle" required value={formData.jobTitle} onChange={handleChange} className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all bg-white text-black" />
                  </div>
                </div>

                {/* Country & Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-black/70 mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select id="country" name="country" required value={formData.country} onChange={handleChange} className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all bg-white text-black">
                      <option value="">Select a country</option>
                      <option value="USA">United States</option>
                      <option value="Ghana">Ghana</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black/70 mb-2">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all bg-white text-black" />
                  </div>
                </div>

                {/* Topic of Interest */}
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-black/70 mb-2">
                    Topic of Interest <span className="text-red-500">*</span>
                  </label>
                  <select id="topic" name="topic" required value={formData.topic} onChange={handleChange} className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all bg-white text-black">
                    <option value="">Please select</option>
                    <option value="ERP Systems">ERP Systems</option>
                    <option value="Data Integration & Analytics">Data Integration & Analytics</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership Opportunities">Partnership Opportunities</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">
                    How can we help? <span className="text-red-500">*</span>
                  </label>
                  <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all bg-white text-black resize-none" placeholder="Tell us more about your needs..." />
                </div>

                {/* Privacy Notice */}
                <div className="bg-gray-50 rounded-lg p-4 border border-black/10">
                  <p className="text-xs text-black/60 leading-relaxed">
                    By submitting this form, you acknowledge that Stargate will process your personal information 
                    in accordance with our Privacy Policy. We may use your information to respond to your inquiry 
                    and provide you with information about our services.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button type="submit" className="w-full md:w-auto px-12 py-4 bg-black text-white rounded-full text-[17px] font-medium hover:bg-black/80 transition-all">
                    Submit
                  </button>
                </div>
              </motion.form>
            </> :
        // Success Message
        <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} className="text-center py-20">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-green-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black/90 mb-4">
                Thank You!
              </h2>
              <p className="text-xl text-black/60 mb-8 max-w-lg mx-auto">
                We've received your message and will get back to you shortly.
              </p>
              <button onClick={() => {
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }} className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full text-[17px] font-medium hover:bg-black/80 transition-all cursor-pointer">
                Return to Home
              </button>
            </motion.div>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-black/5">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-center text-[12px] text-black/40">
            © 2026 Stargate Technology Consultancy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>;
};