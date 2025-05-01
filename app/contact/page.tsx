import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, AlertCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-gradient mb-6">Contact Us</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Have questions about ISRO or space research? We're here to help. Reach out to us using any of the methods below.
          </p>
        </section>
        
        {/* Contact Info & Form */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 glass-effect p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-500/20 p-3 mr-4">
                    <MapPin className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Headquarters</h3>
                    <p className="text-slate-300">
                      ISRO Headquarters,<br />
                      Antariksh Bhavan,<br />
                      New BEL Road, Bengaluru,<br />
                      Karnataka 560094
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-500/20 p-3 mr-4">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-slate-300">
                      General Inquiries: <a href="mailto:info@isro.gov.in" className="text-blue-400 hover:underline">info@isro.gov.in</a><br />
                      Media Relations: <a href="mailto:media@isro.gov.in" className="text-blue-400 hover:underline">media@isro.gov.in</a><br />
                      Educational Programs: <a href="mailto:education@isro.gov.in" className="text-blue-400 hover:underline">education@isro.gov.in</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-500/20 p-3 mr-4">
                    <Phone className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-slate-300">
                      Reception: +91-80-2217-2465<br />
                      Public Relations: +91-80-2217-2807<br />
                      International Cooperation: +91-80-2217-2962
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-500/20 p-3 mr-4">
                    <Clock className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-slate-300">
                      Monday to Friday: 9:00 AM - 5:30 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Closed on Sundays and Public Holidays
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-500/20 p-3 mr-4">
                    <Globe className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Media</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="bg-slate-800 rounded-full p-2 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-slate-800 rounded-full p-2 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-slate-800 rounded-full p-2 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 glass-effect p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              <div className="mb-6">
                <p className="text-slate-300 mb-4">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <div className="flex items-center text-amber-400 bg-amber-400/10 rounded-md px-3 py-2 text-sm mb-6">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <p>All fields marked with an asterisk (*) are required.</p>
                </div>
              </div>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="inquiry" className="block text-sm font-medium text-slate-300 mb-1">
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiry"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="media">Media Request</option>
                    <option value="education">Educational Programs</option>
                    <option value="research">Research Collaboration</option>
                    <option value="careers">Careers & Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="mt-1 bg-slate-800/50 border border-slate-700 rounded text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                      required
                    />
                    <span className="ml-2 text-sm text-slate-300">
                      I consent to ISRO collecting and storing the information I have provided in this form for the purpose of responding to my inquiry. *
                    </span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="space-button flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How can I visit ISRO facilities?",
                answer: "ISRO organizes open house events periodically where the public can visit certain facilities. For security reasons, regular visits require prior approval. Educational institutions can request organized tours through the formal application process."
              },
              {
                question: "Does ISRO offer internship opportunities?",
                answer: "Yes, ISRO offers internships to undergraduate and postgraduate students in relevant fields. Applications are typically accepted during specific periods. Visit the Careers section of our website for current opportunities and application guidelines."
              },
              {
                question: "How can I get satellite imagery for my research?",
                answer: "ISRO provides satellite data through the National Remote Sensing Centre (NRSC). Researchers can submit data requests through the Bhuvan portal or contact the NRSC directly. Some data is freely available, while specialized data may require payment."
              },
              {
                question: "What career opportunities are available at ISRO?",
                answer: "ISRO offers careers in various fields including engineering, science, technology, administration, and support services. Job openings are advertised on our website and through national employment notifications. ISRO also conducts regular recruitment drives for fresh graduates."
              },
              {
                question: "Can international students participate in ISRO programs?",
                answer: "ISRO offers certain educational and training programs open to international participants through bilateral agreements. The ITEC (Indian Technical and Economic Cooperation) program and UN-affiliated Centre for Space Science and Technology Education in Asia Pacific (CSSTEAP) are examples."
              },
              {
                question: "How can I collaborate with ISRO for research?",
                answer: "Academic institutions and research organizations can propose collaborative projects through our formal channels. International collaborations typically require government-level agreements. Contact the International Cooperation division for specific guidelines."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-effect rounded-lg overflow-hidden">
                <div className="p-6 border-b border-slate-700">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}