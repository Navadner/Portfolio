import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters long';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:navadeep1610@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'navadeep1610@gmail.com', link: 'mailto:navadeep1610@gmail.com', color: 'text-red-600 dark:text-red-400' },
    { icon: Linkedin, label: 'LinkedIn', value: 'navadeep-narasamsetty', link: 'https://www.linkedin.com/in/navadeep-narasamsetty', color: 'text-blue-600 dark:text-blue-400' },
    { icon: Github, label: 'GitHub', value: 'Navadner', link: 'https://github.com/Navadner', color: 'text-gray-900 dark:text-white' },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">I'm actively seeking opportunities and collaborations. Let's connect and discuss how we can work together.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">Currently looking for AI/ML Engineer roles. Whether you have a question, a proposal, or just want to say hi, feel free to reach out.</p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300 group">
                    <div className="p-3 bg-white dark:bg-gray-700 rounded-lg group-hover:scale-110 transition-transform">
                      <IconComponent size={24} className={item.color} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.label}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex p-4 bg-green-100 dark:bg-green-900/30 rounded-full mb-4"><CheckCircle size={48} className="text-green-600 dark:text-green-400" /></div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`} placeholder="Your name"/>
                    {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`} placeholder="your.email@example.com"/>
                    {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`} placeholder="What's this about?"/>
                  {errors.subject && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`} placeholder="Tell me more..."></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (<><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>Sending...</>) : (<><Send size={20} />Send Message</>)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;