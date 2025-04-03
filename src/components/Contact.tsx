
import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally submit the form to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Success!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section bg-royal-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block text-white">
            Get In Touch
            <span className="absolute bottom-0 left-0 h-1 w-2/3 bg-white rounded-full"></span>
          </h2>
          <p className="text-blue-100 mt-4 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-700">
            <h3 className="text-xl font-bold mb-6 text-royal-blue">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-royal-blue"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-royal-blue"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-royal-blue"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-royal-blue text-white font-medium py-3 rounded-lg transition-all duration-300 hover:bg-royal-blue-light hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-royal-blue-light rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-blue-100 font-medium">Email</p>
                    <p className="text-white">emmanuel@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-blue-100 font-medium">Phone</p>
                    <p className="text-white">+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-blue-100 font-medium">Social Media</p>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors">
                        <Github className="w-5 h-5 text-royal-blue" />
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors">
                        <Linkedin className="w-5 h-5 text-royal-blue" />
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors">
                        <Twitter className="w-5 h-5 text-royal-blue" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-royal-blue-light rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Let's Work Together</h3>
              <p className="text-blue-100 mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <a 
                href="#" 
                className="inline-block bg-white text-royal-blue font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
