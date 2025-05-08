
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, Instagram, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Show toast notification
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Show global notification
      if (Notification.permission === "granted") {
        const notification = new Notification("New Message Received", {
          body: `From: ${formData.name} (${formData.email})`,
          icon: "/favicon.ico"
        });
        
        notification.onclick = () => {
          window.focus();
        };
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            const notification = new Notification("New Message Received", {
              body: `From: ${formData.name} (${formData.email})`,
              icon: "/favicon.ico"
            });
            
            notification.onclick = () => {
              window.focus();
            };
          }
        });
      }
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  // Handle redirect to Asscote app
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    
    toast({
      title: "Redirecting",
      description: "Taking you to the Asscote app...",
    });
    
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-700 font-lato">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <a 
              href="https://asscote.app/mail"
              onClick={(e) => handleContactClick(e, "https://asscote.app/mail")}
              className="block bg-white p-8 rounded-lg shadow-md text-center animate-fade-in hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy-100 text-navy-600 mb-4">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="font-bold mb-2 font-playfair">Email</h3>
              <p className="text-gray-600 font-lato">contact@example.com</p>
            </a>

            <a 
              href="https://asscote.app/call"
              onClick={(e) => handleContactClick(e, "https://asscote.app/call")}
              className="block bg-white p-8 rounded-lg shadow-md text-center animate-fade-in delay-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy-100 text-navy-600 mb-4">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="font-bold mb-2 font-playfair">Phone</h3>
              <p className="text-gray-600 font-lato">+1 (234) 567-890</p>
            </a>

            <a 
              href="https://asscote.app/whatsapp"
              onClick={(e) => handleContactClick(e, "https://asscote.app/whatsapp")}
              className="block bg-white p-8 rounded-lg shadow-md text-center animate-fade-in delay-200 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy-100 text-navy-600 mb-4">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="font-bold mb-2 font-playfair">WhatsApp</h3>
              <p className="text-gray-600 font-lato">+1 (234) 567-890</p>
            </a>

            <a 
              href="https://asscote.app/instagram"
              onClick={(e) => handleContactClick(e, "https://asscote.app/instagram")}
              className="block bg-white p-8 rounded-lg shadow-md text-center animate-fade-in delay-300 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy-100 text-navy-600 mb-4">
                <Instagram className="h-5 w-5" />
              </div>
              <h3 className="font-bold mb-2 font-playfair">Instagram</h3>
              <p className="text-gray-600 font-lato">@m_reyan_shoaib</p>
            </a>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1 font-lato"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-style font-lato"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1 font-lato"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-style font-lato"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1 font-lato"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-style font-lato"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1 font-lato"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="input-style resize-none font-lato"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
