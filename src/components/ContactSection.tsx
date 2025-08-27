import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <MessageCircle className="w-5 h-5 text-accent" />
            <span className="font-semibold text-accent">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Greener Future Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, ideas, or want to collaborate? We'd love to hear from you! 
            Join our community and let's make sustainability accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  I'm interested in...
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option>Select your interest</option>
                  <option>Early Access to Products</option>
                  <option>Joining the Community</option>
                  <option>Partnership Opportunities</option>
                  <option>Media & Press Inquiries</option>
                  <option>General Questions</option>
                </select>
              </div>
              
              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Message
                </label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about your interest in sustainable living..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-hero w-full">
                <span className="flex items-center justify-center gap-3">
                  <Send className="w-5 h-5" />
                  Send Message
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="card-playful bg-white">
                <div className="bg-gradient-to-br from-primary to-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Email Us</h4>
                <p className="text-muted-foreground mb-3">
                  Get in touch for any questions or collaborations
                </p>
                <a href="mailto:hello@sustainlygreen.com" className="text-primary font-semibold hover:text-primary-light transition-colors">
                  hello@sustainlygreen.com
                </a>
              </div>

              <div className="card-playful bg-white">
                <div className="bg-gradient-to-br from-accent to-accent-yellow w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Join Our Community</h4>
                <p className="text-muted-foreground mb-3">
                  Connect with fellow sustainability enthusiasts
                </p>
                <div className="text-primary font-semibold">
                  Coming Soon: Discord & Slack
                </div>
              </div>

              <div className="card-playful bg-white">
                <div className="bg-gradient-to-br from-secondary to-nature-green w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Response Time</h4>
                <p className="text-muted-foreground mb-3">
                  We typically respond within 24 hours
                </p>
                <div className="text-primary font-semibold">
                  Monday - Friday, 9AM - 6PM PST
                </div>
              </div>
            </div>

            {/* Illustrated Map Background */}
            <div className="bg-gradient-to-br from-nature-light to-primary/10 rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 text-6xl opacity-20">🌍</div>
              <div className="absolute bottom-4 left-4 text-4xl opacity-20">🌱</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-10">🗺️</div>
              
              <div className="relative z-10">
                <div className="bg-white/80 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Global Community
                </h4>
                <p className="text-muted-foreground text-lg mb-6">
                  While we're building our platform, our community spans across 
                  15+ countries, all working together for a sustainable future.
                </p>
                
                {/* Global Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-secondary">50+</div>
                    <div className="text-sm text-muted-foreground">Cities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be the first to know when we launch! Get early access, exclusive content, 
            and sustainability tips delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-foreground focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm opacity-70 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;